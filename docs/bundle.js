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
        console.assert(ref.current === state || (typeof state === "number" && isNaN(state)));
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

    const Unset$1 = Symbol("unset");
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
        const ref = s(Unset$1);
        _(ref, () => value);
        return A$1(() => {
            if (ref.current === Unset$1) {
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
     * Wrap the native `useEffect` to add arguments
     * that allow accessing the previous value as the first argument,
     * as well as the changes that caused the hook to be called as the second argument.
     *
     * @param effect
     * @param inputs
     * @param impl You can choose whether to use `useEffect` or `useLayoutEffect` by
     * passing one of them as this argument. By default, it's `useEffect`.
     */
    function useEffect(effect, inputs, impl = y) {
        const prevInputs = s(undefined);
        const effect2 = () => {
            let changes = [];
            if (inputs && prevInputs.current) {
                for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
                    if (prevInputs.current[i] != inputs[i])
                        changes[i] = { from: prevInputs.current[i], to: inputs[i] };
                }
            }
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        impl(effect2, inputs);
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
        return useEffect(effect, inputs, h);
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
        const useLinearNavigationChild = A$1(({ index }) => {
            const { useRefElementProps, element } = useRefElement();
            const getIndex = useStableGetter(index);
            // Prefer the parent element's direction so that we're not calling getComputedStyle
            // on every single individual child, which is likely redundant.
            const { convertElementSize, getLogicalDirection } = useLogicalDirection(element?.parentElement ?? element);
            const useLinearNavigationChildProps = (props) => {
                const onKeyDown = (e) => {
                    // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                    if (e.ctrlKey || e.metaKey)
                        return;
                    getIndex();
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
            useLayoutEffect((prev, changes) => {
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
     * While it will be called once for every child on mount, after that setFlag
     * is guaranteed to only be called once on activation and once on deactivation,
     * so it's generally safe to put side effects inside if necessary.
     * It's also safe to make it non-stable.
     *
     * @param activatedIndex What index the current selected (etc.) child is
     * @param length How many children exist (as managedChildren.length)
     * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setActive(flag)
     * @param useEffect Which version of useEffect to use. Default is `useLayoutEffect`.
     */
    function useChildFlag({ activatedIndex, closestFit, managedChildren, setChildFlag, getChildFlag, useEffect }) {
        useEffect ??= useLayoutEffect;
        if (closestFit)
            console.assert(typeof activatedIndex == "number" || activatedIndex == null);
        // Whenever we re-render, make sure that any children that have mounted
        // have their flags properly set.  We know it's unset if it was null,
        // in which case we just set it to true or false.
        //
        // And, I mean, as long as we're already iterating through every child
        // on every render to check for newly mounted children, might as well
        // just handle changed in the activatedIndex here too.
        useEffect(() => {
            // TODO: We have limited information about when a child mounts or unmounts
            // and so we don't know where to look for any null entries that need changing.
            // We know when activatedIndex changes and what it was, but not much else.
            // Looping over every child *works*, and it's not an expensive loop by any means,
            // but, like, eugh.
            // Also, before we do anything, see if we need to "correct" activatedIndex.
            // It could be pointing to a child that doesn't exist, and if closestFit is given,
            // we need to adjust activatedIndex to point to a valid child.
            if (typeof activatedIndex == "number" && Array.isArray(managedChildren) && managedChildren[activatedIndex] == null) {
                // Oh dear. Are we actively correcting this?
                if (closestFit) {
                    // Oh dear.
                    // Search up and down the list of children for any that actually exist.
                    let searchHigh = activatedIndex + 1;
                    let searchLow = activatedIndex - 1;
                    while ((searchLow >= 0 && managedChildren[searchLow] == null) || (searchHigh < managedChildren.length && managedChildren[searchHigh] == null)) {
                        ++searchHigh;
                        --searchLow;
                    }
                    if (searchLow >= 0 && managedChildren[searchLow] != null) {
                        activatedIndex = searchLow;
                    }
                    else if (searchHigh < managedChildren.length && managedChildren[searchHigh] != null) {
                        activatedIndex = searchHigh;
                    }
                    // Now that we've done that, if any valid children exist, we've reset activatedIndex to point to it instead.
                    // Now we'll fall through to the for loop set and unset our flags based on this "corrected" value.
                    //
                    // We don't correct it or save it anywhere because we'd very much like to return to it
                    // if the child remounts itself.
                }
            }
            if (Array.isArray(managedChildren)) {
                for (let i = 0; i < managedChildren.length; ++i) {
                    let shouldBeSet = (i == activatedIndex);
                    if (getChildFlag(i) != shouldBeSet) {
                        setChildFlag(i, shouldBeSet);
                    }
                }
            }
            else {
                Object.entries(managedChildren).forEach(([i, info]) => {
                    let shouldBeSet = (i == activatedIndex);
                    if (getChildFlag(i) != shouldBeSet) {
                        setChildFlag(i, shouldBeSet);
                    }
                });
            }
        });
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
        useChildFlag({
            activatedIndex: tabbableIndex,
            managedChildren,
            closestFit: true,
            setChildFlag: (index, tabbable) => {
                if (index != null)
                    managedChildren[index]?.setTabbable(tabbable);
            },
            getChildFlag: (index) => (managedChildren[index]?.getTabbable() ?? null)
        });
        A$1(() => {
            if (tabbableIndex != null)
                managedChildren[tabbableIndex].setTabbable(true);
        }, [tabbableIndex]);
        const useRovingTabIndexChild = A$1((info) => {
            const [rrafIndex, setRrafIndex] = useState(1);
            const rerenderAndFocus = A$1(() => { setRrafIndex(i => ++i); }, []);
            const [tabbable, setTabbable, getTabbable] = useState(null);
            let newInfo = {
                ...info,
                rerenderAndFocus,
                setTabbable: A$1((tabbable) => { setTabbable(tabbable); }, []),
                getTabbable
            };
            const { element, getElement, useManagedChildProps } = useManagedChild(newInfo);
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
        useChildFlag({
            activatedIndex: currentRow,
            managedChildren: managedRows,
            setChildFlag: (index, tabbable) => { managedRows[index]?.setIsTabbableRow(tabbable); },
            getChildFlag: (index) => (managedRows[index]?.getIsTabbableRow() ?? null),
            useEffect: useEffect
        });
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
            const [isTabbableRow, setIsTabbableRow, getIsTabbableRow] = useState(null);
            // If we're not the tabbable row, then for the purposes of tabIndex
            // calculations, we don't have a tabbable child cell.
            let currentColumn = isTabbableRow ? getCurrentColumn() : null;
            // Track child cells and manage keyboard navigation among them.
            const { managedChildren: managedCells, useRovingTabIndexChild: useRovingTabIndexCell, childCount: cellCount } = useRovingTabIndex({
                shouldFocusOnChange: A$1(() => { return !!getFocusCellOnRowChange() && !!getIsTabbableRow(); }, []),
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
            useChildFlag({
                activatedIndex: currentColumn,
                managedChildren: managedCells,
                setChildFlag: (cellIndex, cellIsTabbable) => {
                    if (cellIndex != null)
                        managedCells[cellIndex]?.setTabbable(cellIsTabbable);
                },
                getChildFlag: (cellIndex) => (managedCells[cellIndex]?.getTabbable() ?? null),
                useEffect
            });
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
                getIsTabbableRow: getIsTabbableRow,
                hidden,
                ...info
            });
            const { useLinearNavigationChildProps: useLinearNavigationChildRowProps } = useLinearNavigationChildRow(info);
            const useGridNavigationRowProps = A$1((props) => useManagedRowProps(useLinearNavigationChildRowProps(useMergedProps()({ hidden: !!hidden, "data-index": rowIndex }, props))), [useManagedRowProps, !!hidden]);
            const getRowIndex = useStableGetter(rowIndex);
            const useGridNavigationCell = A$1((info) => {
                const [tabbable, setTabbable] = useState(false);
                const { useRovingTabIndexChildProps } = useRovingTabIndexCell({ ...info, setTabbable });
                const { useLinearNavigationChildProps: useLinearNavigationChildCellProps } = useLinearNavigationChildCell(info);
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

    /**
     * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can).
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
     * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function
     * @param initialValue If provided, the effect will be invoked once with this value on mount.
     * @returns
     */
    function usePassiveState(onChange, initialValue) {
        const valueRef = s(initialValue === undefined ? Unset : initialValue);
        const cleanupCallbackRef = s(undefined);
        // Shared between "dependency changed" and "component unmounted".
        const onShouldCleanUp = A$1(() => {
            let cleanupCallback = cleanupCallbackRef.current;
            if (cleanupCallback)
                cleanupCallback();
        }, []);
        const getValue = A$1(() => valueRef.current === Unset ? undefined : valueRef.current, []);
        // The actual code the user calls to (possibly) run a new effect.
        const setValue = useStableCallback((arg) => {
            const prevDep = valueRef.current === Unset ? undefined : valueRef.current;
            const dep = arg instanceof Function ? arg(prevDep) : arg;
            if (dep !== valueRef.current) {
                onShouldCleanUp();
                cleanupCallbackRef.current = (onChange?.(dep, prevDep) ?? undefined);
                valueRef.current = dep;
            }
        });
        // Handle running on mount/unmount
        h(() => {
            if (initialValue !== undefined) {
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined) ?? undefined);
                valueRef.current = initialValue;
            }
            return onShouldCleanUp;
        }, []);
        return [getValue, setValue];
    }
    const Unset = Symbol();

    const activeElementUpdaters = new Set();
    const lastActiveElementUpdaters = new Set();
    const windowFocusedUpdaters = new Set();
    let windowFocused = true;
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
        windowFocused = true;
        windowFocusedUpdaters.forEach(f => f?.(windowFocused));
    }
    function windowBlur() {
        windowFocused = false;
        windowFocusedUpdaters.forEach(f => f?.(windowFocused));
    }
    function useActiveElement({ onActiveElementChange, onLastActiveElementChange, onWindowFocusedChanged }) {
        const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, undefined);
        const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, undefined);
        const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChanged, windowFocused);
        h(() => {
            if (activeElementUpdaters.size === 0) {
                document.addEventListener("focusin", focusin, { passive: true });
                document.addEventListener("focusout", focusout, { passive: true });
                window.addEventListener("focus", windowFocus, { passive: true });
                window.addEventListener("blur", windowBlur, { passive: true });
            }
            // Add them even if they're undefined to more easily
            // manage the ">0 means don't add handlers" logic.
            activeElementUpdaters.add(setActiveElement);
            lastActiveElementUpdaters.add(setLastActiveElement);
            windowFocusedUpdaters.add(setWindowFocused);
            return () => {
                activeElementUpdaters.delete(setActiveElement);
                lastActiveElementUpdaters.delete(setLastActiveElement);
                windowFocusedUpdaters.delete(setWindowFocused);
                if (activeElementUpdaters.size === 0) {
                    document.removeEventListener("focusin", focusin);
                    document.removeEventListener("focusout", focusout);
                    window.removeEventListener("focus", windowFocus);
                    window.removeEventListener("blur", windowBlur);
                }
            };
        }, []);
        return { getActiveElement, getLastActiveElement, getWindowFocused };
    }

    function useHasFocus({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged }) {
        const { element, getElement, useRefElementProps } = useRefElement();
        useActiveElement({
            onActiveElementChange: node => {
                debugger;
                onFocusedChanged?.(element == node && element != null);
                onFocusedInnerChanged?.(!!element?.contains(node));
            },
            onLastActiveElementChange: node => {
                debugger;
                onLastFocusedChanged?.(element == node && element != null);
                onLastFocusedInnerChanged?.(!!element?.contains(node));
            }
        });
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
            const { useLinearNavigationChildProps } = useLinearNavigationChild(info);
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
    * tabbable 5.2.1
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
    }; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
    //  unless they are in the _first_ <legend> element of the top-most disabled
    //  fieldset


    var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
      if (isInput(node) || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA' || node.tagName === 'BUTTON') {
        var parentNode = node.parentElement;

        while (parentNode) {
          if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
            // look for the first <legend> as an immediate child of the disabled
            //  <fieldset>: if the node is in that legend, it'll be enabled even
            //  though the fieldset is disabled; otherwise, the node is in a
            //  secondary/subsequent legend, or somewhere else within the fieldset
            //  (however deep nested) and it'll be disabled
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i);

              if (child.tagName === 'LEGEND') {
                if (child.contains(node)) {
                  return false;
                } // the node isn't in the first legend (in doc order), so no matter
                //  where it is now, it'll be disabled


                return true;
              }
            } // the node isn't in a legend, so no matter where it is now, it'll be disabled


            return true;
          }

          parentNode = parentNode.parentElement;
        }
      } // else, node's tabbable/focusable state should not be affected by a fieldset's
      //  enabled/disabled state


      return false;
    };

    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || // For a details element with a summary, the summary element gets the focus
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
        //const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState<Node | null>(null);
        const { getActiveElement, getLastActiveElement, getWindowFocused } = useActiveElement({});
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
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setLastFocusedInner });
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
        const { useHasFocusProps } = useHasFocus({ onFocusedChanged: setFocused, onFocusedInnerChanged: setFocusedInner, onLastFocusedChanged: setLastFocused, onLastFocusedInnerChanged: setLastFocusedInner });
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
        const { useHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setLastFocusedInner });
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
                `${isTabbableRow}`,
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

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCIuLi91c2UtbWVyZ2VkLXJlZnMuanMiLCIuLi91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIi4uL3VzZS1tZXJnZWQtcHJvcHMuanMiLCIuLi91c2Utc3RhdGUuanMiLCIuLi91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCIuLi91c2UtZWxlbWVudC1zaXplLmpzIiwiLi4vdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vdXNlLWVmZmVjdC5qcyIsIi4uL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vdXNlLXRpbWVvdXQuanMiLCIuLi91c2UtYXN5bmMtaGFuZGxlci5qcyIsIi4uL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzIiwiLi4vdXNlLWNoaWxkLW1hbmFnZXIuanMiLCIuLi91c2UtZm9yY2UtdXBkYXRlLmpzIiwiLi4vdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL3VzZS1ncmlkLW5hdmlnYXRpb24uanMiLCIuLi91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vdXNlLWRyYWdnYWJsZS5qcyIsIi4uL3VzZS1kcm9wcGFibGUuanMiLCIuLi91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL3VzZS1hY3RpdmUtZWxlbWVudC5qcyIsIi4uL3VzZS1oYXMtZm9jdXMuanMiLCIuLi91c2UtaW50ZXJ2YWwuanMiLCIuLi91c2UtbGlzdC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vdXNlLWJsb2NraW5nLWVsZW1lbnQuanMiLCIuLi91c2UtZm9jdXMtdHJhcC5qcyIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS1pbnRlcnZhbC50c3giLCJkZW1vcy91c2UtdGltZW91dC50c3giLCJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4geShsLGYsdCxvLG51bGwpfWZ1bmN0aW9uIHkobixpLHQsbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cn07cmV0dXJuIG51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fHIhPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP2sodCk6byx0Ll9faCkseih1LHQpLHQuX19lIT1vJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxvLHIsZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQsbyxyLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJm51bGwhPV8uX19rJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxhfHxcIm9wdGlvblwiIT09dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7dmFyIGksdDtmb3IoaT0wO2k8bi5fX2subGVuZ3RoO2krKykodD1uLl9fa1tpXSkmJih0Ll9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnR5cGU/eCh0LGwsdSk6UCh1LHQsdCxuLl9fayx0Ll9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LG8scixmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIWMscltyLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LG8scixmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKG89ITApLG51bGwhPXIpZm9yKDtfPHIubGVuZ3RoO18rKylpZigocz1yW19dKSYmKHM9PT1sfHwoZD9zLmxvY2FsTmFtZT09ZDozPT1zLm5vZGVUeXBlKSkpe2w9cyxyW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixmLHI/clswXTppLl9fayYmayhpLDApLGMpLG51bGwhPXIpZm9yKF89ci5sZW5ndGg7Xy0tOyludWxsIT1yW19dJiZoKHJbX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQsbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIG8scixmO2wuX18mJmwuX18odSxpKSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFvJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxyfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIW8mJnQ/W3RdOnI/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZ0P3Q6cj9yLl9fZTppLmZpcnN0Q2hpbGQsbykseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxvLHIsZj1hKHt9LGwucHJvcHMpO2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PXZvaWQgMH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgZix1c2VEZWJ1Z1ZhbHVlIGFzIGN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyB2LEZyYWdtZW50IGFzIGQscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6dih2KG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj92KG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXYobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6dn0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKGQsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKGQsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD12KG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD0kLG4ubmF0aXZlRXZlbnQ9bn07dmFyIHEsRz17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSj1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2Zvcih2YXIgdSBpbiByPXt9LGUpe3ZhciBvPWVbdV07XCJ2YWx1ZVwiPT09dSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PW98fChcImRlZmF1bHRWYWx1ZVwiPT09dSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT91PVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT11JiYhMD09PW8/bz1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdCh1KT91PVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdCh1K3QpJiYhVihlLnR5cGUpP3U9XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KHUpP3U9dS50b0xvd2VyQ2FzZSgpOlAudGVzdCh1KT91PXUucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PW8mJihvPXZvaWQgMCksclt1XT1vKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEcuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsRykpLG4uJCR0eXBlb2Y9aixKJiZKKG4pfTt2YXIgSz1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtLJiZLKG4pLHE9bi5fX2N9O3ZhciBRPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gcS5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxYPVwiMTcuMC4yXCI7ZnVuY3Rpb24gbm4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIHRuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gZW4obil7cmV0dXJuIHRuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gcm4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gdW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgb249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49ZDtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6eixoeWRyYXRlOkIsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpybixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6bm4sY2xvbmVFbGVtZW50OmVuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OmQsaXNWYWxpZEVsZW1lbnQ6dG4sZmluZERPTU5vZGU6dW4sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmxuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOm9uLFN0cmljdE1vZGU6ZCxTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpRfTtleHBvcnR7WCBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHJuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsbm4gYXMgY3JlYXRlRmFjdG9yeSxlbiBhcyBjbG9uZUVsZW1lbnQsdG4gYXMgaXNWYWxpZEVsZW1lbnQsdW4gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsbG4gYXMgZmx1c2hTeW5jLG9uIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksUSBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHNQcm9wcywgcmhzUHJvcHMpIHtcclxuICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5jaGlsZHJlbjtcclxuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcclxuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBsaHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgcmV0ID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxyXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cclxuICpcclxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcclxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcclxuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxyXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XHJcbiAgICBjb25zdCBsaHNDbGFzc05hbWUgPSBsaHM/LmNsYXNzTmFtZTtcclxuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcclxuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xyXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICBdO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbM10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s0XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNl0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s3XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMTNdO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXHJcbiAqIEBwYXJhbSBsaHNcclxuICogQHBhcmFtIHJoc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcclxuICAgICAgICBsZXQgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XHJcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcclxuICAgICAgICB9LCBbbGhzLCByaHNdKTtcclxuICAgICAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHR5cGV0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCByZWY6IFJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c09wdGlvbmFsUmVmKHJlZjogUmVmPGFueT4gfCB1bmRlZmluZWQpIHsgfVxyXG5cclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZjogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZjogdW5kZWZpbmVkIH0sIHsgcmVmIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcclxuICAgIF0gYXMgY29uc3Q7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1swXSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcclxuXHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1syXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1s0XSk7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xyXG4gICAgYWNjZXB0c1JlZihjWzVdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s2XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xyXG4gICAgYWNjZXB0c1JlZihjWzhdKTtcclxufVxyXG4qL1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xyXG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxyXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XHJcbn1cclxuLyoqXHJcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxyXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XHJcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cclxuICAgIGlmICghbGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xyXG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cclxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcclxuICAgICAgICAgICAgcmV0dXJuIGxocy5zdHlsZTtcclxuICAgICAgICBpZiAoIWxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcclxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cclxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChyaHM/LnN0eWxlKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTG9naWM/Pz9cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cclxuICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcclxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xyXG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMb2dnaW5nUHJvcENvbmZsaWN0cyhsb2cyKSB7XHJcbiAgICBsb2cgPSBsb2cyO1xyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICpcclxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cclxuICogQHBhcmFtIGxoczJcclxuICogQHBhcmFtIHJoczJcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzMiwgcmhzMikge1xyXG4gICAgICAgIC8vIEZpcnN0LCBwdXQgaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gcmVhc29uIGFib3V0XHJcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IGxoc0NoaWxkcmVuLCBjbGFzczogbGhzQ2xhc3MsIGNsYXNzTmFtZTogbGhzQ2xhc3NOYW1lLCBzdHlsZTogbGhzU3R5bGUsIHJlZjogbGhzUmVmLCAuLi5saHMgfSA9IGxoczI7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogcmhzQ2hpbGRyZW4sIGNsYXNzOiByaHNDbGFzcywgY2xhc3NOYW1lOiByaHNDbGFzc05hbWUsIHN0eWxlOiByaHNTdHlsZSwgcmVmOiByaHNSZWYsIC4uLnJocyB9ID0gcmhzMjtcclxuICAgICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICAgICAuLi5saHMsXHJcbiAgICAgICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmcygpKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiB1c2VNZXJnZWRDaGlsZHJlbihsaHMyLCByaHMyKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5yZWY7XHJcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LnN0eWxlO1xyXG4gICAgICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xyXG4gICAgICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcclxuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXHJcbiAgICAgICAgLy8gTWVyZ2UgZXZlcnkgcmVtYWluaW5nIGV4aXN0aW5nIGVudHJ5IGluIGxocyB3aXRoIHdoYXQgd2UndmUgYWxyZWFkeSBwdXQgaW4gcmV0LlxyXG4gICAgICAgIC8vY29uc3QgbGhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxocykgYXMgW2tleW9mIFQsIFRba2V5b2YgVF1dW107XHJcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbcmhzS2V5LCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xyXG4gICAgICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc1tyaHNLZXldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XHJcbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nPy4oYENvdWxkIG5vdCBtZXJnZSBpbmNvbXBhdGlibGUgcHJvcCBcIiR7cmhzS2V5fVwiICh0eXBlOiAke3R5cGVvZiByaHNWYWx1ZX0sIHZhbHVlczogWyR7bGhzVmFsdWV9LCAke3Joc1ZhbHVlfV0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhsaHMsIHJocykge1xyXG4gICAgaWYgKCFsaHMpXHJcbiAgICAgICAgcmV0dXJuIHJocztcclxuICAgIGlmICghcmhzKVxyXG4gICAgICAgIHJldHVybiBsaHM7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgbHYgPSBsaHMoLi4uYXJncyk7XHJcbiAgICAgICAgbGV0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xyXG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xyXG4gICAgfTtcclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XHJcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xyXG5cclxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xyXG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG0zOiBNMSA9IDA7XHJcblxyXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcclxuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtNjogTTIgPSAwO1xyXG5cclxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XHJcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcclxuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG5cclxuXHJcbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcclxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcclxuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcclxuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcclxuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcclxuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcclxuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcclxuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcclxuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcclxuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcclxuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcclxuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcclxuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcclxuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcclxuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcclxuXHJcblxyXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XHJcbiovIFxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFNsaWdodGx5IGVuaGFuY2VkIHZlcnNpb24gb2YgYHVzZVN0YXRlYCB0aGF0IGluY2x1ZGVzIGEgZ2V0dGVyIHRoYXQgcmVtYWlucyBjb25zdGFudFxyXG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGVcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlUF0gPSB1c2VTdGF0ZVAoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGF0ZSk7XHJcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXHJcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcclxuICAgIGNvbnN0IHNldFN0YXRlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0U3RhdGVQKHByZXZWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVAodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGdldFN0YXRlID0gKCkgPT4geyByZXR1cm4gcmVmLmN1cnJlbnQ7IH07XHJcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcclxuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXHJcbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXHJcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxyXG4gKlxyXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcclxuICpcclxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KCkge1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XHJcbi8qKlxyXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cclxuICpcclxuICogVXNlIHdpdGggY2F1dGlvbiwgYW5kICoqZG8gbm90IHVzZSB0aGUgZ2V0dGVyIGluIHVzZUxheW91dEVmZmVjdCEhKipcclxuICogYHNldFN0YXRlYCdzIGdldHRlciBkb2VzIG5vdCBoYXZlIHRoaXMgcHJvYmxlbSwgYnV0IHRoZW4geW91J3JlIHVzaW5nIHlvdXIgb3duIHN0YXRlXHJcbiAqIGluc3RlYWQgb2YgYW4gZXhpc3RpbmcgdmFsdWUsIHdoaWNoIG1pZ2h0IG5vdCBhbHdheXMgYmUgZmVhc2libGUuXHJcbiAqXHJcbiAqIFdlaWdoIHlvdXIgb3B0aW9ucywgYW5kIGhvcGVmdWxseSBvbmUgb2YgdGhlbSBnZXRzIHRoZSBqb2IgZG9uZS5cclxuICpcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlR2V0dGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHZhbHVlKTtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ID09PSBVbnNldCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG4vKipcclxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxyXG4gKiBzbyB0aGF0IGl0IGNhbiBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZXBlbmRlbmN5IGFycmF5cyBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcy5cclxuICpcclxuICogRE8gTk9UIFVTRSBUSEUgUkVTVUxUIElOIHVzZUxheW91dEVmZmVjdCEhXHJcbiAqXHJcbiAqIFRPRE86IEludmVzdGlnYXRlIG9wdGlvbnMuZGlmZmVkIGlmIHRoZSB1c2VMYXlvdXRFZmZlY3QgbGltaXRhdGlvbiBiZWNvbWVzIGxpbWl0bGVzc2x5IGxpbWl0aW5nLlxyXG4gKlxyXG4gKiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTQwOTkjaXNzdWVjb21tZW50LTY1OTI5ODQyMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXIoZm4pO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBvYnNlcnZlQm94LCBzZXRTaXplIH0pIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCBzdGFibGVTZXRTaXplID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0U2l6ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHN0YWJsZVNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIShcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBvYnNlcnZlQm94IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbGVtZW50LCBvYnNlcnZlQm94XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZ2V0RWxlbWVudCxcclxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xyXG4gICAgcmV0dXJuIChzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbnNwZWN0cyB0aGUgZWxlbWVudCdzIHN0eWxlIGFuZCBkZXRlcm1pbmVzIHRoZSBsb2dpY2FsIGRpcmVjdGlvbiB0aGF0IHRleHQgZmxvd3MuXHJcbiAqXHJcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXHJcbiAqIEJ1dCBgdHJhbnNmb3JtYCwgYGNsaXBgLCBldGMuIGRvbid0LlxyXG4gKlxyXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxyXG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXHJcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXHJcbiAqICogYGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbmA6IEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiIHRvIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiLlxyXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2ljYWxEaXJlY3Rpb24oZWxlbWVudCkge1xyXG4gICAgY29uc3QgW3dyaXRpbmdNb2RlLCBzZXRXcml0aW5nTW9kZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0ZXh0T3JpZW50YXRpb24sIHNldFRleHRPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHdyaXRpbmdNb2RlUmVmID0gdXNlUmVmKHdyaXRpbmdNb2RlKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgdGV4dE9yaWVudGF0aW9uUmVmID0gdXNlUmVmKHRleHRPcmllbnRhdGlvbik7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB3cml0aW5nTW9kZVJlZi5jdXJyZW50ID0gd3JpdGluZ01vZGU7IH0sIFt3cml0aW5nTW9kZV0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZGlyZWN0aW9uUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247IH0sIFtkaXJlY3Rpb25dKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHRleHRPcmllbnRhdGlvblJlZi5jdXJyZW50ID0gdGV4dE9yaWVudGF0aW9uOyB9LCBbdGV4dE9yaWVudGF0aW9uXSk7XHJcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cclxuICAgIC8vIElmIHRoZSB3cml0aW5nIG1vZGUgY2hhbmdlcywgdGhlIHdob2xlIGNvbXBvbmVudCBuZWVkcyB0byBcclxuICAgIC8vIG1vdW50L3VubW91bnQgYmVjYXVzZSAobW9yZS1vci1sZXNzIGluIG9yZGVyIG9mIGltcG9ydGFuY2UpXHJcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xyXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXHJcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIDk5JSBvZiB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxyXG4gICAgLy8gICAgICAoVGhvc2UgdGhhdCBkbyB3aWxsIG5lZWQgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpXHJcbiAgICAvL1xyXG4gICAgLy8gTWF5YmUgdGhlcmUgY291bGQgYmUgYSBjb250ZXh0IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlbW90ZWx5IHVwZGF0ZSBhbGwgY29tcG9uZW50cyB0aGF0IHVzZSB0aGlzIGhvb2s/XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgc2V0V3JpdGluZ01vZGUodyB8fCBcImhvcml6b250YWwtdGJcIik7XHJcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihkIHx8IFwicnRsXCIpO1xyXG4gICAgICAgICAgICBzZXRUZXh0T3JpZW50YXRpb24odCB8fCBcIm1peGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbGVtZW50XSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCB3cml0aW5nTW9kZSA9IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJlZi5jdXJyZW50O1xyXG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIXdyaXRpbmdNb2RlIHx8ICFkaXJlY3Rpb24gfHwgIXRleHRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJsdHJcIjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbd3JpdGluZ01vZGVSZWYsIGRpcmVjdGlvblJlZiwgdGV4dE9yaWVudGF0aW9uUmVmXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcclxuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xyXG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxyXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxyXG4gICAgfTtcclxufVxyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqIEBwYXJhbSBpbXBsIFlvdSBjYW4gY2hvb3NlIHdoZXRoZXIgdG8gdXNlIGB1c2VFZmZlY3RgIG9yIGB1c2VMYXlvdXRFZmZlY3RgIGJ5XHJcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMsIGltcGwgPSB1c2VFZmZlY3ROYXRpdmUpIHtcclxuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IGVmZmVjdDIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcclxuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHByZXZJbnB1dHMuY3VycmVudC5sZW5ndGgsIGlucHV0cy5sZW5ndGgpOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xyXG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxuICAgIGltcGwoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcIi4vdXNlLWVmZmVjdFwiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KHsgdGltZW91dCwgY2FsbGJhY2ssIHRyaWdnZXJJbmRleCB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcclxuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XHJcbiAgICAvLyBTZXQgYW55IHRpbWUgd2Ugc3RhcnQgdGltZW91dC5cclxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXHJcbiAgICAvLyByZXN0YXJ0IHRoZSB0aW1lb3V0LiAgVGhlIHRpbWVvdXQgZG9lcyBOT1QgcmVzZXRcclxuICAgIC8vIHdoZW4gdGhlIGR1cmF0aW9uIG9yIGNhbGxiYWNrIGNoYW5nZXMsIG9ubHkgdHJpZ2dlckluZGV4LlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aW1lb3V0SXNOdWxsID09ICh0aW1lb3V0ID09IG51bGwpKTtcclxuICAgICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XHJcbiAgICBjb25zdCBnZXRFbGFwc2VkVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCsobmV3IERhdGUoKSkpIC0gKCsoc3RhcnRUaW1lUmVmLmN1cnJlbnQgPz8gbmV3IERhdGUoKSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHsgZ2V0RWxhcHNlZFRpbWUsIGdldFJlbWFpbmluZ1RpbWUgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xyXG4vKipcclxuICogR2l2ZW4gYW4gYXN5bmNyb25vdXMgZXZlbnQgaGFuZGxlciwgcmV0dXJucyBhIHN5bmNyb25vdXMgb25lIHRoYXQgd29ya3Mgb24gdGhlIERPTSxcclxuICogYWxvbmcgd2l0aCBzb21lIG90aGVyIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAqIERvZXMgbm90IG1vZGlmeSBhbnkgcHJvcHMuXHJcbiAqXHJcbiAqIFRoZSBoYW5kbGVyIGlzIGF1dG9tYXRpY2FsbHkgdGhyb3R0bGVkIHRvIG9ubHkgcnVuIG9uZSBhdCBhIHRpbWUuXHJcbiAqIElmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCwgYW5kIHRoZW4gYmVmb3JlIGl0IGZpbmlzaGVzLCBpcyBjYWxsZWQgYWdhaW4sXHJcbiAqIGl0IHdpbGwgYmUgcHV0IG9uIGhvbGQgdW50aWwgdGhlIGN1cnJlbnQgb25lIGZpbmlzaGVzLCBhdCB3aGljaCBwb2ludFxyXG4gKiB0aGUgc2Vjb25kIG9uZSB3aWxsIHJ1bi4gIElmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCBhIHRoaXJkIHRpbWUgYmVmb3JlXHJcbiAqIHRoZSBmaXJzdCBoYXMgZmluaXNoZWQsIGl0IHdpbGwgKnJlcGxhY2UqIHRoZSBzZWNvbmQsIHNvIG9ubHkgdGhlIG1vc3RcclxuICogcmVjZW50bHkgY2FsbGVkIGl0ZXJhdGlvbiBvZiB0aGUgaGFuZGxlciB3aWxsIHJ1bi5cclxuICpcclxuICogWW91IG1heSBvcHRpb25hbGx5ICphbHNvKiBzcGVjaWZ5IGEgZGVib3VuY2UgcGFyYW1ldGVyIHRoYXQgd2FpdHMgdW50aWwgdGhlXHJcbiAqIHN5bmNyb25vdXMgaGFuZGxlciBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciB0aGUgc3BlY2lmaWVkIG51bWJlciBvZlxyXG4gKiBtaWxsaXNlY29uZHMsIGF0IHdoaWNoIHBvaW50IHdlICphY3R1YWxseSogcnVuIHRoZSBhc3luY3Jvbm91cyBoYW5kbGVyXHJcbiAqIGFjY29yZGluZyB0byB0aGUgbG9naWMgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gVGhpcyBpcyBpblxyXG4gKiAqYWRkaXRpb24qIHRvIHRocm90dGxpbmcgdGhlIGhhbmRsZXIsIGFuZCBkb2VzIG5vdCByZXBsYWNlIHRoYXQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgcGFyYW1ldGVycyB0byB0aGUgYXN5bmMgaGFuZGxlciBhcmUgc2xpZ2h0bHkgZGlmZmVyZW50IHRoYW5cclxuICogdGhlIHN5bmMgaGFuZGxlciAmbmRhc2g7IHRoZSBmaXJzdCBhcmd1bWVudCwgYXMgZGVjaWRlZCBieSB5b3Ugd2l0aCB0aGVcclxuICogYGNhcHR1cmVgIHBhcmFtZXRlciBmb3IgdGhpcyBob29rLCBpcyB0aGUgXCJzYXZlZFwiIGluZm9ybWF0aW9uIGZyb20gdGhlXHJcbiAqIGV2ZW50LiAgRm9yIGV4YW1wbGUsIHRoZSBldmVudCdzIGN1cnJlbnRUYXJnZXQncyBgdmFsdWVgLCB3aGljaCBtYXkgaGF2ZVxyXG4gKiBjaGFuZ2VkIGJ5IHRoZSB0aW1lIHRoZSBoYW5kbGVyIGlzICphY3R1YWxseSogY2FsbGVkLiAgVGhlIHNlY29uZCBhcmd1bWVudFxyXG4gKiBpcyB0aGUgb3JpZ2luYWwgZXZlbnQsIHdoaWNoIG1pZ2h0IHN0aWxsIGhhdmUgc29tZSB1c2VmdWwgZmllbGRzIG9uIGl0XHJcbiAqIGxpa2UgYG1vdXNlWGAgb3Igc29tZXRoaW5nLCBidXQgaXMgc3RhbGUgYXQgbGVhc3QgaW4gcmVnYXJkcyB0byB0aGVcclxuICogZWxlbWVudCBpdCByZWZlcmVuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzeW5jSGFuZGxlcigpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoeyBjYXB0dXJlLCBkZWJvdW5jZSB9KSB7XHJcbiAgICAgICAgLy8gQWx3YXlzIHJlcHJlc2VudHMgd2hhdGV2ZXIgcHJvbWlzZSBpcyBjdXJyZW50bHkgYmVpbmcgd2FpdGVkIG9uLCBvciBudWxsIGlmIG5vbmUuXHJcbiAgICAgICAgY29uc3QgW3Byb21pc2UsIHNldFByb21pc2UsIGdldFByb21pc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gS2VlcCB0cmFjayBvZiBob3cgbWFueSB0aW1lcyB3ZSd2ZSBhY3R1YWxseSBjYWxsZWQgdGhlIGFzeW5jIGhhbmRsZXJcclxuICAgICAgICBjb25zdCBbcnVuQ291bnQsIHNldFJ1bkNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgIGNvbnN0IFtyZXNvbHZlQ291bnQsIHNldFJlc29sdmVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICBjb25zdCBbcmVqZWN0Q291bnQsIHNldFJlamVjdENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIGNvbnN0IFtjdXJyZW50VHlwZSwgc2V0Q3VycmVudFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gSWYgd2UncmUgc2V0IHRvIHVzZSBhIGRlYm91bmNlLCB0aGVuIHdoZW4gdGhlIHRpbWVvdXQgZmluaXNoZXMsXHJcbiAgICAgICAgLy8gdGhlIHByb21pc2UgZnJvbSB0aGlzIHN0YXRlIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCBvdmVyIHRvIGVpdGhlciBcclxuICAgICAgICAvLyB0aGUgY3VycmVudCBwcm9taXNlIG9yIHRoZSBwZW5kaW5nIHByb21pc2UuXHJcbiAgICAgICAgY29uc3QgW2RlYm91bmNlZFByb21pc2VTdGFydGVyLCBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlciwgZ2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gV2hlbiB3ZSB3YW50IHRvIHN0YXJ0IGEgbmV3IHByb21pc2UsIHdlIHdvbid0IGFsbG93IGl0IHRvIHN0YXJ0IGlmIG9uZSBpcyBzdGlsbCBydW5uaW5nLlxyXG4gICAgICAgIC8vIEluIHRoYXQgY2FzZSwgd2Ugc3RvcmUgdGhlIHByb21pc2UgKG9yIHJhdGhlciwgYSB3YXkgdG8gc3RhcnQgdGhlIHByb21pc2UpIGluIHN0YXRlLlxyXG4gICAgICAgIGNvbnN0IFtwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIsIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlciwgZ2V0UGVuZGluZ1Byb21pc2VTdGFydGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGB1bmRlZmluZWRgIGFuZCBcIm5vIGVycm9yIGhhcyBiZWVuIHRocm93blwiLlxyXG4gICAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3IsIGdldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvciwgZ2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIC8vIFNhbWUgdGhpbmcsIHdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIFwibm90aGluZyBjYXB0dXJlZCB5ZXRcIiBhbmQgXCJgdW5kZWZpbmVkYCB3YXMgY2FwdHVyZWRcIlxyXG4gICAgICAgIGNvbnN0IFtjdXJyZW50Q2FwdHVyZSwgc2V0Q3VycmVudENhcHR1cmUsIGdldEN1cnJlbnRDYXB0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW2hhc0NhcHR1cmUsIHNldEhhc0NhcHR1cmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIGRlYm91bmNlIHRpbWVyIGlzIHVwIChvciB3ZSBtYW51YWxseSByZXF1ZXN0IHRoZSBkZWJvdW5jZSB0byBlbmQpXHJcbiAgICAgICAgLy8gcnVuIHRoZSBub3JtYWwgXCJwbGVhc2UgY29uc2lkZXIgcnVubmluZyB0aGlzIHByb21pc2VcIiByb3V0aW5lIHRoYXQgd2Ugd291bGRcclxuICAgICAgICAvLyBoYXZlIGp1c3QgcnVuIGltbWVkaWF0ZWx5IGlmIHdlIHdlcmVuJ3QgZGVib3VuY2luZyBvdXIgcHJvbWlzZXMuXHJcbiAgICAgICAgY29uc3Qgb25EZWJvdW5jZVRpbWVVcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIgPSBnZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcigpO1xyXG4gICAgICAgICAgICBpZiAoZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIpXHJcbiAgICAgICAgICAgICAgICB3YW50VG9TdGFydEFOZXdQcm9taXNlKGRlYm91bmNlZFByb21pc2VTdGFydGVyKTtcclxuICAgICAgICAgICAgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIobnVsbCk7XHJcbiAgICAgICAgfSwgW3dhbnRUb1N0YXJ0QU5ld1Byb21pc2UsIHNldERlYm91bmNlZFByb21pc2VTdGFydGVyXSk7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBkZWJvdW5jZS4gTG9naWNhbGx5IHRoaXMgaGFwcGVucyBiZWZvcmUgdGhlIG1haW4gc3RlcCBhcyBhIHNvcnQgb2Ygc3RlcCAwLlxyXG4gICAgICAgIC8vIFJlc2V0cyB0aGUgdGltZW91dCBhbnkgdGltZSB0aGUgaGFuZGxlciB3YXMgcmVxdWVzdGVkIHRvIGJlIGNhbGxlZCBhZ2FpblxyXG4gICAgICAgIC8vIGFuZCB3aGVuIGl0IGZpbmlzaGVzLCBhY3R1YWxseSBjYWxsIHRoZSBoYW5kbGVyIChvciBzZXQgaXQgYXMgdGhlIHBlbmRpbmcgcHJvbWlzZSlcclxuICAgICAgICB1c2VUaW1lb3V0KHtcclxuICAgICAgICAgICAgdGltZW91dDogZGVib3VuY2UgPz8gbnVsbCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG9uRGVib3VuY2VUaW1lVXAsXHJcbiAgICAgICAgICAgIHRyaWdnZXJJbmRleDogZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBTZWUgaWYgd2Ugc2hvdWxkIHNldCBvdXIgY3VycmVudCBwcm9taXNlIHRvIGJlIHdoYXRldmVyIHRoZSBwZW5kaW5nIHByb21pc2UgaXNcclxuICAgICAgICAvLyAodXN1YWxseSBiZWNhdXNlIHRoZSBjdXJyZW50IHByb21pc2UgZmluaXNoZWQgYW5kIGJlY2FtZSBudWxsKS5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBPdXIgY3VycmVudCBwcm9taXNlIGp1c3QgZmluaXNoZWQgYW5kIHRoZXJlJ3Mgb25lIHdhaXRpbmc/XHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlID09IG51bGwgJiYgcGVuZGluZ1Byb21pc2VTdGFydGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2UocGVuZGluZ1Byb21pc2VTdGFydGVyKTtcclxuICAgICAgICAgICAgICAgIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlcihudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtwcm9taXNlLCBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXJdKTtcclxuICAgICAgICAvLyBDYWxsZWQgYW55IHRpbWUgdGhlIGFzeW5jIGhhbmRsZXIgaXMgYWJvdXQgdG8gYmUgY2FsbGVkIGZvciB3aGF0ZXZlciByZWFzb24sXHJcbiAgICAgICAgLy8gZXhjZXB0IGZvciBkZWJvdW5jZSwgd2hpY2ggY29tZXMgZmlyc3QsIGFzIGEgc29ydCBvZiBcInN0ZXAgMFwiLlxyXG4gICAgICAgIC8vIEhhbmRsZXMgYWxsIHRoZSBuZWNlc3NhcnkgYm9pbGVycGxhdGUgcmVsYXRlZCB0byBjaG9vc2luZyB3aGV0aGVyIHRvXHJcbiAgICAgICAgLy8gcnVuIG9yIHNldCBhcyBwZW5kaW5nLCByZXNldHRpbmcgc3RhdGUgdmFyaWFibGVzLCBldGMuXHJcbiAgICAgICAgZnVuY3Rpb24gd2FudFRvU3RhcnRBTmV3UHJvbWlzZShzdGFydFByb21pc2UpIHtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlSdW5uaW5nUHJvbWlzZSA9IChnZXRQcm9taXNlKCkgIT0gbnVsbCk7XHJcbiAgICAgICAgICAgIC8vIEJvaWxlcnBsYXRlIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBwcm9taXNlIHN0YXJ0ZXJcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UHJvbWlzZVdpdGhCb2lsZXJwbGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc3RhcnRzLCBub3RpZnkgdGhlIGNhbGxlclxyXG4gICAgICAgICAgICAgICAgc2V0UnVuQ291bnQociA9PiArK3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBjb21wbGV0ZXMsIG5vdGlmeSB0aGUgY2FsbGVyXHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGZhaWxzLCBzYXZlIHRoZSBlcnJvciBhbmQgbm90aWZ5IHRoZSBjYWxsZXJcclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc2V0dGxlcywgcmVzZXQgb3VyIHN0YXRlIHNvIHdlIGNhbiBydW4gYSBwZW5kaW5nIHByb21pc2UgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvblRoZW4gPSAoKSA9PiB7IHNldFJlc29sdmVDb3VudChjID0+ICsrYyk7IH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkNhdGNoID0gKGV4KSA9PiB7IHNldEVycm9yKGV4KTsgc2V0SGFzRXJyb3IodHJ1ZSk7IHNldFJlamVjdENvdW50KGMgPT4gKytjKTsgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uRmluYWxseSA9ICgpID0+IHsgc2V0UHJvbWlzZShudWxsKTsgfTtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBoYW5kbGVyIGlzIHN5bmNocm9ub3VzXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdGFydFByb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCByZXR1cm5lZCBzdWNjZXNzZnVsbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRoZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlKFwic3luY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChcInRoZW5cIiBpbiByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBzeW5jaHJvbm91cyAob3IgYXN5bmNocm9ub3VzIGJ1dCBkaWRuJ3QgYXdhaXQgYW55dGhpbmcgeWV0KSBhbmQgdGhyZXcgYW4gZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYXRjaChleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGUoXCJzeW5jXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBoYW5kbGVyIGlzIGFzeW5jaHJvbm91c1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGUoXCJhc3luY1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4geyBhd2FpdCByZXN1bHQ7IH0pKCkudGhlbihvblRoZW4pLmNhdGNoKG9uQ2F0Y2gpLmZpbmFsbHkob25GaW5hbGx5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFhbHJlYWR5UnVubmluZ1Byb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9taXNlIGltbWVkaWF0ZWx5LCBiZWNhdXNlIHRoZXJlIHdhc24ndCBvbmUgcnVubmluZyBhbHJlYWR5LlxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQcm9taXNlID0gc3RhcnRQcm9taXNlV2l0aEJvaWxlcnBsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFByb21pc2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZCBvbiEgVGhlIGhhbmRsZXIgd2FzIGFjdHVhbGx5IHN5bmNocm9ub3VzLCBhbmQgYWxyZWFkeSBmaW5pc2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBCYWlsIG91dCBlYXJseS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzRXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb21pc2UobmV4dFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3Qgc3RhcnQgdGhlIHByb21pc2UgeWV0LCBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBhbGxvdyBpdCB0byBzdGFydCBpbiB0aGUgZnV0dXJlIGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIoXyA9PiBzdGFydFByb21pc2VXaXRoQm9pbGVycGxhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIGdldFN5bmNIYW5kbGVyLFxyXG4gICAgICAgICAgICBnZXRDdXJyZW50Q2FwdHVyZSxcclxuICAgICAgICAgICAgY2FsbENvdW50OiBydW5Db3VudCxcclxuICAgICAgICAgICAgY3VycmVudENhcHR1cmUsXHJcbiAgICAgICAgICAgIGhhc0NhcHR1cmUsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IChwcm9taXNlICE9IG51bGwpLFxyXG4gICAgICAgICAgICBoYXNFcnJvcixcclxuICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlLFxyXG4gICAgICAgICAgICBmbHVzaERlYm91bmNlZFByb21pc2U6IG9uRGVib3VuY2VUaW1lVXAsXHJcbiAgICAgICAgICAgIHJlc29sdmVDb3VudCxcclxuICAgICAgICAgICAgcmVqZWN0Q291bnQsXHJcbiAgICAgICAgICAgIHNldHRsZUNvdW50OiByZWplY3RDb3VudCArIHJlc29sdmVDb3VudFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTeW5jSGFuZGxlcihhc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3luY0hhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhmdW5jdGlvbiBzeW5jSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFzeW5jSGFuZGxlciA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbW9zdCBzaWduaWZpY2FudCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBldmVudCBhdCB0aGlzIHRpbWUsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBuZWNlc3Nhcnkgc2luY2UgdGhlIHByb21pc2UgY291bGQgYWN0dWFsbHkgYmUgY2FsbGVkIG11Y2ggbGF0ZXJcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGVsZW1lbnQncyB2YWx1ZSAoZXRjLikgaGFzIGNoYW5nZWQuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXB0dXJlZCA9IGNhcHR1cmUoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENhcHR1cmUoY2FwdHVyZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzQ2FwdHVyZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9ICgpID0+IGFzeW5jSGFuZGxlcihjYXB0dXJlZCwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlYm91bmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YW50VG9TdGFydEFOZXdQcm9taXNlKHN0YXJ0UHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcihfID0+IHN0YXJ0UHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXN5bmNIYW5kbGVyID09IG51bGwgPyB1bmRlZmluZWQgOiBzeW5jSGFuZGxlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hc3luYy1oYW5kbGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbi8qKlxyXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcclxuICogdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdGhlIGFycm93IGtleXMuXHJcbiAqXHJcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGluZWFyTmF2aWdhdGlvbih7IGluZGV4LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGlvbkRpcmVjdGlvbiwgZGlzYWJsZUFycm93S2V5cywgZGlzYWJsZUhvbWVFbmRLZXlzIH0pIHtcclxuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFiYmFibGUgaW5kZXggbmV2ZXIgZXNjYXBlcyB0aGUgYm91bmRzIG9mIGFsbCBhdmFpbGFibGUgY2hpbGRyZW5cclxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpbmRleCwgY2hpbGRDb3VudCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdF0pO1xyXG4gICAgLy8gVGhlc2UgYWxsb3cgdXMgdG8gbWFuaXB1bGF0ZSB3aGF0IG91ciBjdXJyZW50IHRhYmJhYmxlIGNoaWxkIGlzLlxyXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KChpOiBudW1iZXIgfCBudWxsKSA9PiBpID09PSBudWxsPyBudWxsISA6IGkgPj0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDE/IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxIDogKytpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KChpOiBudW1iZXIgfCBudWxsKSA9PiBpID09PSBudWxsPyBudWxsISA6IGkgPCAwPyAwIDogLS1pKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9FbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgtMSk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTsqL1xyXG4gICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKHsgaW5kZXggfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBlbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgZ2V0SW5kZXggPSB1c2VTdGFibGVHZXR0ZXIoaW5kZXgpO1xyXG4gICAgICAgIC8vIFByZWZlciB0aGUgcGFyZW50IGVsZW1lbnQncyBkaXJlY3Rpb24gc28gdGhhdCB3ZSdyZSBub3QgY2FsbGluZyBnZXRDb21wdXRlZFN0eWxlXHJcbiAgICAgICAgLy8gb24gZXZlcnkgc2luZ2xlIGluZGl2aWR1YWwgY2hpbGQsIHdoaWNoIGlzIGxpa2VseSByZWR1bmRhbnQuXHJcbiAgICAgICAgY29uc3QgeyBjb252ZXJ0RWxlbWVudFNpemUsIGdldExvZ2ljYWxEaXJlY3Rpb24gfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oZWxlbWVudD8ucGFyZW50RWxlbWVudCA/PyBlbGVtZW50KTtcclxuICAgICAgICBjb25zdCB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBnZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgcHJvcHMpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtuYXZpZ2F0aW9uRGlyZWN0aW9uLCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsICEhZGlzYWJsZUFycm93S2V5cywgISFkaXNhYmxlSG9tZUVuZEtleXNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGZvciB0aGUgc2VsZWN0aW9uIG9mIGEgbWFuYWdlZCBjaGlsZCBieSB0eXBpbmcgdGhlIGdpdmVuIHRleHQgYXNzb2NpYXRlZCB3aXRoIGl0LlxyXG4gKlxyXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcclxuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXHJcbiAgICAvLyBhbmQgYWxzbyBjbGVhciBpdCBldmVyeSAxMDAwIG1zIHNpbmNlIHRoZSBsYXN0IHRpbWUgaXQgY2hhbmdlZC5cclxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cclxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXHJcbiAgICBjb25zdCBbY3VycmVudFR5cGVhaGVhZCwgc2V0Q3VycmVudFR5cGVhaGVhZCwgZ2V0Q3VycmVudFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcclxuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2ludmFsaWRUeXBlYWhlYWQsIHNldEludmFsaWRUeXBlYWhlYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxyXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxyXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB3YWl0aW5nIGZvciBhIENvbXBvc2l0aW9uRW5kIGV2ZW50XHJcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXHJcbiAgICAvLyAoYnV0IHdpdGhpbiB0aGUgc2FtZSB0YXNrLCB3aGljaCwgVE9ETywgY291bGQgYmUgYnJvd3Nlci1kZXBlbmRlbnQpLFxyXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cclxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XHJcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xyXG4gICAgY29uc3QgY29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xyXG4gICAgICAgIGxldCBjb21wYXJlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGhzID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaHMudGV4dCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHR5cGVhaGVhZCwgb25seSBjb21wYXJlIGEgc3RyaW5nIG9mIHRoZSBzYW1lIHNpemUgYXMgb3VyIGN1cnJlbnRseSB0eXBlZCBzdHJpbmcuXHJcbiAgICAgICAgICAgIC8vIEJ5IG5vcm1hbGl6aW5nIHRoZW0gZmlyc3QsIHdlIGVuc3VyZSB0aGlzIGJ5dGUtYnktYnl0ZSBoYW5kbGluZyBvZiByYXcgY2hhcmFjdGVyIGRhdGEgd29ya3Mgb3V0IG9rYXkuXHJcbiAgICAgICAgICAgIGxldCBzYWZlTGhzID0gbGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcclxuICAgICAgICAgICAgbGV0IHNhZmVSaHMgPSByaHMudGV4dC5ub3JtYWxpemUoXCJORkRcIikuc3Vic3RyKDAsIHNhZmVMaHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxhdG9yKVxyXG4gICAgICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xyXG4gICAgfSk7XHJcbiAgICAvLyBIYW5kbGUgY2hhbmdlcyBpbiB0eXBlYWhlYWQgdGhhdCBjYXVzZSBjaGFuZ2VzIHRvIHRoZSB0YWJiYWJsZSBpbmRleFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3J0ZWRUeXBlYWhlYWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyAob3IgbW9yZSBzcGVjaWZpY2FsbHkgXCJmb3Igd2hpY2ggdGhlcmUgaXMgbm8gZW50cnkgdGhhdCBzdGFydHMgd2l0aCB0aGF0IGlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICBXZSBrbm93IHJvdWdobHkgd2hlcmUsIGluIHRoZSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncywgb3VyIG5leHQgdHlwZWFoZWFkIGxvY2F0aW9uIGlzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cclxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgdGhhdCBtYXRjaGVzIHVzICphbmQqIChpZiBhbnkgc3VjaCBleGlzdCkgaXMgKmFmdGVyKiBvdXIgY3VycmVudCBzZWxlY3Rpb24uXHJcblxyXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24gaXMgaWYgdGhlIG9ubHkgb3RoZXIgb3B0aW9uIGlzIGJlaGluZCB1cy5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xyXG4gICAgICAgICAgICAgICAgICBUaG91Z2ggdGhlcmUncyBhbHNvIGEgY2FzZSBmb3IganVzdCBnb2luZyB1cHdhcmRzIHRvIHRoZSBuZWFyZXN0IHRvIHByZXZlbnQganVtcGluZXNzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxyXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxyXG5cclxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcclxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgIHdlIGNhbiBmaW5kIHRoZSBvbmUgd2hvc2UgYHVuc29ydGVkSW5kZXhgIGlzIHRoZSBsb3dlc3QgYW1vbmdzdCBhbGwgb3RoZXIgZXF1YWwgc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxyXG5cclxuICAgICAgICAgICAgICAgICAgVE9ETzogVGhlIGJpbmFyeSBzZWFyY2ggc3RhcnRzIHRoaXMgb2ZmIHdpdGggYSBzb2xpZCBPKGxvZyBuKSwgYnV0IG9uZS1jaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcclxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cclxuICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uIGZvciBvbmUtY2hhcmFjdGVyIHN0cmluZ3MsIGJ1dCB0aGF0J3MganVzdCBraWNraW5nIHRoZSBjYW4gZG93blxyXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBjYW5kaWRhdGVzJyBwb3NpdGlvbnMgaW4gYm90aCBvdXIgc29ydGVkIGFycmF5IGFuZCB0aGUgdW5zb3J0ZWQgRE9NLlxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSB0d28gYXJlIG9ubHkgc2V0IGZvciBlbGVtZW50cyB0aGF0IGFyZSBhaGVhZCBvZiB1cywgYnV0IHRoZSBwcmluY2lwbGUncyB0aGUgc2FtZSBvdGhlcndpc2VcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCZXN0Rml0ID0gKHUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2xvd2VzdFNvcnRlZEluZGV4TmV4dF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xyXG4gICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKHsgdGV4dCwgLi4uaSB9KSA9PiB7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgd2hlcmUgdG8gaW5zZXJ0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcclxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgdGV4dCwgY29tcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2UoLXNvcnRlZEluZGV4IC0gMSwgMCwgeyB0ZXh0LCB1bnNvcnRlZEluZGV4OiBpLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHVubW91bnRpbmcsIGZpbmQgd2hlcmUgd2Ugd2VyZSBhbmQgcmVtb3ZlIG91cnNlbHZlcy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4ID49IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGV4dF0pO1xyXG4gICAgICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uU3RhcnQgPSAoZSkgPT4geyBzZXRJbWVBY3RpdmUodHJ1ZSk7IH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25FbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEltZUFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWVBY3RpdmUgPSBnZXRJbWVBY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleTtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxyXG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUgJiYgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd2F5IHRoYXQgZG9lc24ndCBzcGxpdCBVVEYtMTYgc3Vycm9nYXRlcy5cclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHQgPT4gdCA9PT0gbnVsbCA/IG51bGwgOiBbLi4udF0ucmV2ZXJzZSgpLnNsaWNlKDEpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUga2V5IHByb3BlcnR5IHJlcHJlc2VudHMgdGhlIHR5cGVkIGNoYXJhY3RlciBPUiB0aGUgXCJuYW1lZCBrZXkgYXR0cmlidXRlXCIgb2YgdGhlIGtleSBwcmVzc2VkLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUncyBubyBkZWZpbml0ZSB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSwgYnV0IGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXNcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBubyBvbmUtY2hhcmFjdGVyIG5hbWVzLCBhbmQgdGhlcmUgYXJlIG5vIG5vbi1BU0NJSS1hbHBoYSBuYW1lcy5cclxuICAgICAgICAgICAgICAgIC8vIFRodXMsIGFueSBvbmUtY2hhcmFjdGVyIG9yIG5vbi1BU0NJSSB2YWx1ZSBmb3IgYGtleWAgaXMgKmFsbW9zdCBjZXJ0YWlubHkqIGEgdHlwZWQgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDaGFyYWN0ZXJLZXkgPSAoa2V5Lmxlbmd0aCA9PT0gMSB8fCAhL15bQS1aYS16XS8udGVzdChrZXkpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NoYXJhY3RlcktleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCIgXCIgJiYgKGdldEN1cnJlbnRUeXBlYWhlYWQoKSA/PyBcIlwiKS50cmltKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgYmVjYXVzZSBhIHNwYWNlYmFyIGNhbid0IGV2ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYXRlIGEgdHlwZWFoZWFkLCBvbmx5IGNvbnRpbnVlIG9uZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKFNwZWNpZmljYWxseSwgbGV0IHRoZSBldmVudCBjb250aW51ZSBwcm9wYWdhdGlvbiBpbiB0aGlzIGNhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IFdvbid0IGJlIHRydWUgZm9yIHRoZSBmaXJzdCBrZXlkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJlZm9yZSB1c2VMYXlvdXRFZmZlY3QgaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGFjdHVhbGx5IGFwcGx5IHRoZSBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0pLCBwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wc1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXHJcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcclxuICogQHBhcmFtIHdhbnRlZCBUaGUgdmFsdWUgeW91J2QgbGlrZSB0byBmaW5kXHJcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxyXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXHJcbiAqIFRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGlzIG51bWJlciwgbWludXMgb25lLCBpcyB3aGVyZSBgd2FudGVkYCAqd291bGQqIGJlIGZvdW5kIGlmIGl0ICp3YXMqIGluIGBhcnJheWBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xyXG4gICAgdmFyIGZpcnN0SW5kZXggPSAwO1xyXG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICB2YXIgdGVzdEluZGV4ID0gKGxhc3RJbmRleCArIGZpcnN0SW5kZXgpID4+IDE7XHJcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSB0ZXN0SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSB0ZXN0SW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRlc3RJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLWZpcnN0SW5kZXggLSAxO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cclxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cclxuICpcclxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxyXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxyXG4gKiB0byB1c2U6IGB1c2VNYW5hZ2VkQ2hpbGRgLiAgSXQncyBzdGFibGUgYWNyb3NzIHJlbmRlcnMsIHNvIGp1c3RcclxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXHJcbiAqIGl0IHdpdGggYW55IHJlcXVlc3RlZCBpbmZvcm1hdGlvbiwgYnV0IGRvZXNuJ3QgZG8gYW55dGhpbmcgZWxzZVxyXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZE1hbmFnZXIoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXHJcbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXHJcbiAgICAvLyB3ZSBhbHNvIHJlLXJlbmRlci5cclxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWxDaGlsZHJlblVub3VudGVkLCBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xyXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xyXG4gICAgY29uc3QgbW91bnRlZENoaWxkcmVuID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGRlbGV0ZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaW5kaWNlcyB0aGF0IGhhdmUgXCJvdmVyLW1vdW50ZWRcIiBhbmQgYnkgaG93IG11Y2guXHJcbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XHJcbiAgICAvLyBcIm92ZXJtb3VudHNcIiBvdmVyIGFub3RoZXIgd2hpY2ggdGhlbiwgY29ycmVjdGx5LCBzd2l0Y2hlcyAqaXRzZWxmKiB0byBzb21ldGhpbmcgZWxzZS5cclxuICAgIC8vIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIHdoZW4gY29tcG9uZW50cyBhcmUgc3dhcHBpbmcgYmV0d2VlbiBpbmRpY2VzLlxyXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxyXG4gICAgLy8gaXQncyBva2F5IHRvIGFjdHVhbGx5IHJ1biB0aGUgdW5tb3VudCBjb2RlLlxyXG4gICAgLy8gXHJcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcclxuICAgIC8vIFwiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJ3cml0ZSB0aGlzIGNoaWxkJ3MgaW5kZXghXCIgYXNzZXJ0aW9uLlxyXG4gICAgLy8gTmFtZWx5LCBpcyB0aGlzIG1hcCBhbGwgMHMgd2hlbiB0aGUgcGFyZW50IGVsZW1lbnQgcmUtcmVuZGVycz8gXHJcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XHJcbiAgICBjb25zdCBvdmVybW91bnRDb3VudCA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBnZXRUb3RhbENoaWxkcmVuTW91bnRlZCgpO1xyXG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcclxuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcclxuICAgICAgICAgICAgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgLy8gQXMgc29vbiBhcyB0aGUgY29tcG9uZW50IG1vdW50cywgbm90aWZ5IHRoZSBwYXJlbnQgYW5kIHJlcXVlc3QgYSByZXJlbmRlci5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYsIGNoYW5nZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm8uaW5kZXggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbZWxlbWVudCwgaW5mby5pbmRleF0pO1xyXG4gICAgICAgIC8vIEFueSB0aW1lIG91ciBjaGlsZCBwcm9wcyBjaGFuZ2UsIG1ha2UgdGhhdCBpbmZvcm1hdGlvbiBhdmFpbGFibGUgZ2VuZXJhbGx5LlxyXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxyXG4gICAgICAgIC8vIGluZmluaXRlIGxvb3AgZXZlcnkgdGltZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gaXMgcGFzc2VkLlxyXG4gICAgICAgIC8vIEl0IGNvbWVzIGluIGZyb20gdGhlIHByb3BzIHNvIHRoZSBjaGlsZCB3YXMgYWxyZWFkeSB1cGRhdGVkIGJ5IGl0IC0tXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcclxuICAgICAgICAvLyBcIm9uQ2xpY2tcIiB1cGRhdGVzIG9yIHdoYXRldmVyLiAgVGhlIHJlbGV2YW50IGNoaWxkIGFscmVhZHkga25vd3MsXHJcbiAgICAgICAgLy8gYW5kIHRoYXQncyB3aGF0IG1hdHRlcnMuXHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XHJcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xyXG4gICAgICAgIHJldHVybiB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTWFuYWdlZENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQ6IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxyXG4gICAgICAgIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZENoaWxkcmVuLmN1cnJlbnQsXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudDogaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LFxyXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxyXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZCxcclxuICAgICAgICBnZXRNb3VudEluZGV4LFxyXG4gICAgICAgIGRlbGV0ZWRJbmRpY2VzOiBkZWxldGVkSW5kaWNlcy5jdXJyZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxldHRpbmcgY2hpbGRyZW4ga25vdyB3aGVuIHRoZXkgYXJlIG9yIGFyZSBub3QgdGhlXHJcbiAqIGN1cnJlbnQgc2VsZWN0ZWQvZXhwYW5kZWQvZm9jdXNlZC93aGF0ZXZlciBjaGlsZC5cclxuICpcclxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIHdoZW4gY2hpbGRyZW4gYXJlIG1vdW50ZWQgJiB1bm1vdW50ZWQgYW5kIHN1Y2guXHJcbiAqXHJcbiAqIFdoaWxlIGl0IHdpbGwgYmUgY2FsbGVkIG9uY2UgZm9yIGV2ZXJ5IGNoaWxkIG9uIG1vdW50LCBhZnRlciB0aGF0IHNldEZsYWdcclxuICogaXMgZ3VhcmFudGVlZCB0byBvbmx5IGJlIGNhbGxlZCBvbmNlIG9uIGFjdGl2YXRpb24gYW5kIG9uY2Ugb24gZGVhY3RpdmF0aW9uLFxyXG4gKiBzbyBpdCdzIGdlbmVyYWxseSBzYWZlIHRvIHB1dCBzaWRlIGVmZmVjdHMgaW5zaWRlIGlmIG5lY2Vzc2FyeS5cclxuICogSXQncyBhbHNvIHNhZmUgdG8gbWFrZSBpdCBub24tc3RhYmxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gYWN0aXZhdGVkSW5kZXggV2hhdCBpbmRleCB0aGUgY3VycmVudCBzZWxlY3RlZCAoZXRjLikgY2hpbGQgaXNcclxuICogQHBhcmFtIGxlbmd0aCBIb3cgbWFueSBjaGlsZHJlbiBleGlzdCAoYXMgbWFuYWdlZENoaWxkcmVuLmxlbmd0aClcclxuICogQHBhcmFtIHNldEZsYWcgQSBmdW5jdGlvbiB0aGF0IHByb2JhYmx5IGxvb2tzIGxpa2UgKGksIGZsYWcpID0+IG1hbmFnZWRDaGlsZHJlbltpXS5zZXRBY3RpdmUoZmxhZylcclxuICogQHBhcmFtIHVzZUVmZmVjdCBXaGljaCB2ZXJzaW9uIG9mIHVzZUVmZmVjdCB0byB1c2UuIERlZmF1bHQgaXMgYHVzZUxheW91dEVmZmVjdGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXgsIGNsb3Nlc3RGaXQsIG1hbmFnZWRDaGlsZHJlbiwgc2V0Q2hpbGRGbGFnLCBnZXRDaGlsZEZsYWcsIHVzZUVmZmVjdCB9KSB7XHJcbiAgICB1c2VFZmZlY3QgPz89IHVzZUxheW91dEVmZmVjdDtcclxuICAgIGlmIChjbG9zZXN0Rml0KVxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBhY3RpdmF0ZWRJbmRleCA9PSBcIm51bWJlclwiIHx8IGFjdGl2YXRlZEluZGV4ID09IG51bGwpO1xyXG4gICAgLy8gV2hlbmV2ZXIgd2UgcmUtcmVuZGVyLCBtYWtlIHN1cmUgdGhhdCBhbnkgY2hpbGRyZW4gdGhhdCBoYXZlIG1vdW50ZWRcclxuICAgIC8vIGhhdmUgdGhlaXIgZmxhZ3MgcHJvcGVybHkgc2V0LiAgV2Uga25vdyBpdCdzIHVuc2V0IGlmIGl0IHdhcyBudWxsLFxyXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IHNldCBpdCB0byB0cnVlIG9yIGZhbHNlLlxyXG4gICAgLy9cclxuICAgIC8vIEFuZCwgSSBtZWFuLCBhcyBsb25nIGFzIHdlJ3JlIGFscmVhZHkgaXRlcmF0aW5nIHRocm91Z2ggZXZlcnkgY2hpbGRcclxuICAgIC8vIG9uIGV2ZXJ5IHJlbmRlciB0byBjaGVjayBmb3IgbmV3bHkgbW91bnRlZCBjaGlsZHJlbiwgbWlnaHQgYXMgd2VsbFxyXG4gICAgLy8ganVzdCBoYW5kbGUgY2hhbmdlZCBpbiB0aGUgYWN0aXZhdGVkSW5kZXggaGVyZSB0b28uXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRPRE86IFdlIGhhdmUgbGltaXRlZCBpbmZvcm1hdGlvbiBhYm91dCB3aGVuIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzXHJcbiAgICAgICAgLy8gYW5kIHNvIHdlIGRvbid0IGtub3cgd2hlcmUgdG8gbG9vayBmb3IgYW55IG51bGwgZW50cmllcyB0aGF0IG5lZWQgY2hhbmdpbmcuXHJcbiAgICAgICAgLy8gV2Uga25vdyB3aGVuIGFjdGl2YXRlZEluZGV4IGNoYW5nZXMgYW5kIHdoYXQgaXQgd2FzLCBidXQgbm90IG11Y2ggZWxzZS5cclxuICAgICAgICAvLyBMb29waW5nIG92ZXIgZXZlcnkgY2hpbGQgKndvcmtzKiwgYW5kIGl0J3Mgbm90IGFuIGV4cGVuc2l2ZSBsb29wIGJ5IGFueSBtZWFucyxcclxuICAgICAgICAvLyBidXQsIGxpa2UsIGV1Z2guXHJcbiAgICAgICAgLy8gQWxzbywgYmVmb3JlIHdlIGRvIGFueXRoaW5nLCBzZWUgaWYgd2UgbmVlZCB0byBcImNvcnJlY3RcIiBhY3RpdmF0ZWRJbmRleC5cclxuICAgICAgICAvLyBJdCBjb3VsZCBiZSBwb2ludGluZyB0byBhIGNoaWxkIHRoYXQgZG9lc24ndCBleGlzdCwgYW5kIGlmIGNsb3Nlc3RGaXQgaXMgZ2l2ZW4sXHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byBhZGp1c3QgYWN0aXZhdGVkSW5kZXggdG8gcG9pbnQgdG8gYSB2YWxpZCBjaGlsZC5cclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2YXRlZEluZGV4ID09IFwibnVtYmVyXCIgJiYgQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pICYmIG1hbmFnZWRDaGlsZHJlblthY3RpdmF0ZWRJbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBPaCBkZWFyLiBBcmUgd2UgYWN0aXZlbHkgY29ycmVjdGluZyB0aGlzP1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VzdEZpdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gT2ggZGVhci5cclxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCB1cCBhbmQgZG93biB0aGUgbGlzdCBvZiBjaGlsZHJlbiBmb3IgYW55IHRoYXQgYWN0dWFsbHkgZXhpc3QuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoSGlnaCA9IGFjdGl2YXRlZEluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hMb3cgPSBhY3RpdmF0ZWRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddID09IG51bGwpIHx8IChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICArK3NlYXJjaEhpZ2g7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1zZWFyY2hMb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoTG93ID49IDAgJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaExvd10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoTG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaEhpZ2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBkb25lIHRoYXQsIGlmIGFueSB2YWxpZCBjaGlsZHJlbiBleGlzdCwgd2UndmUgcmVzZXQgYWN0aXZhdGVkSW5kZXggdG8gcG9pbnQgdG8gaXQgaW5zdGVhZC5cclxuICAgICAgICAgICAgICAgIC8vIE5vdyB3ZSdsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGZvciBsb29wIHNldCBhbmQgdW5zZXQgb3VyIGZsYWdzIGJhc2VkIG9uIHRoaXMgXCJjb3JyZWN0ZWRcIiB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBjb3JyZWN0IGl0IG9yIHNhdmUgaXQgYW55d2hlcmUgYmVjYXVzZSB3ZSdkIHZlcnkgbXVjaCBsaWtlIHRvIHJldHVybiB0byBpdFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoaWxkIHJlbW91bnRzIGl0c2VsZi5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRGbGFnKGksIHNob3VsZEJlU2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFuYWdlZENoaWxkcmVuKS5mb3JFYWNoKChbaSwgaW5mb10pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRDaGlsZEZsYWcoaSkgIT0gc2hvdWxkQmVTZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZEZsYWcoaSwgc2hvdWxkQmVTZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hpbGQtbWFuYWdlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCwgd2hlbiBjYWxsZWQsIGZvcmNlIHRoZSBjb21wb25lbnRcclxuICogdGhhdCB1c2VzIHRoaXMgaG9vayB0byByZS1yZW5kZXIgaXRzZWxmLlxyXG4gKlxyXG4gKiBJdCdzIGEgYml0IHNtZWxseSwgc28gYmVzdCB0byB1c2Ugc3BhcmluZ2x5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xyXG4gICAgY29uc3QgWywgc2V0XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgcmV0dXJuIHVzZVJlZigoKSA9PiBzZXQoaSA9PiArK2kpKS5jdXJyZW50O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb3JjZS11cGRhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxyXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXHJcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xyXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcclxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXHJcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxyXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxyXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcclxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXHJcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcclxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxyXG4gKlxyXG4gKiBgc2hvdWxkRm9jdXNPbkNoYW5nZWAgc2hvdWxkIHJldHVybiB0cnVlIGlmIGZvY3VzIGlzXHJcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cclxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBgYGBcclxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcclxuICogY29uc3QgZm9jdXNPbkNoYW5nZSA9IChmb2N1c2VkSW5uZXIgIT0gZmFsc2UpO1xyXG4gKiBgYGBcclxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XHJcbiAqIGFueXRoaW5nIGFib3V0IHRoZSBjb250YWluZXIgZWxlbWVudCwgb25seSBjaGlsZHJlbiBlbGVtZW50cy5cclxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXHJcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xyXG4gICAgY29uc3QgW3JlcmVuZGVyQW5kRm9jdXMsIHNldFJlcmVuZGVyQW5kRm9jdXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBnZXRTaG91bGRGb2N1c09uQ2hhbmdlID0gdXNlU3RhYmxlR2V0dGVyKGZvYyk7XHJcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xyXG4gICAgY29uc3QgcHJldlRhYmJhYmxlID0gdXNlUmVmKC1JbmZpbml0eSk7XHJcbiAgICAvLyBDYWxsIHRoZSBob29rIHRoYXQgYWxsb3dzIHVzIHRvIGNvbGxlY3QgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlbiB3aG8gcHJvdmlkZSBpdFxyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGNoaWxkQ291bnQsIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCwgLi4ucmVzdCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcyxcclxuICAgIC8vIG5vdGlmeSB0aGUgcHJldmlvdXMgY2hpbGQgdGhhdCBpdCdzIG5vIGxvbmdlciB0YWJiYWJsZSxcclxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cclxuICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IHRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGNsb3Nlc3RGaXQ6IHRydWUsXHJcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaW5kZXgsIHRhYmJhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2luZGV4XT8uc2V0VGFiYmFibGUodGFiYmFibGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaW5kZXgpID0+IChtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5nZXRUYWJiYWJsZSgpID8/IG51bGwpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZvY3VzU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBudWxsKVxyXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bdGFiYmFibGVJbmRleF0uc2V0VGFiYmFibGUodHJ1ZSk7XHJcbiAgICB9LCBbdGFiYmFibGVJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3JyYWZJbmRleCwgc2V0UnJhZkluZGV4XSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgICAgIGNvbnN0IHJlcmVuZGVyQW5kRm9jdXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFJyYWZJbmRleChpID0+ICsraSk7IH0sIFtdKTtcclxuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlLCBnZXRUYWJiYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBsZXQgbmV3SW5mbyA9IHtcclxuICAgICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgICAgcmVyZW5kZXJBbmRGb2N1cyxcclxuICAgICAgICAgICAgc2V0VGFiYmFibGU6IHVzZUNhbGxiYWNrKCh0YWJiYWJsZSkgPT4geyBzZXRUYWJiYWJsZSh0YWJiYWJsZSk7IH0sIFtdKSxcclxuICAgICAgICAgICAgZ2V0VGFiYmFibGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVyZW5kZXJBbmRGb2N1cyhfID0+IHJlcmVuZGVyQW5kRm9jdXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXNPbkNoYW5nZSA9IGdldFNob3VsZEZvY3VzT25DaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1c09uQ2hhbmdlKCkgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2VsZW1lbnQsIHRhYmJhYmxlLCBycmFmSW5kZXhdKTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyB0YWJJbmRleCB9LCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlTWFuYWdlZENoaWxkUHJvcHMoeyB0YWJJbmRleCB9KSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLFxyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcclxuICAgICAgICAgICAgdGFiYmFibGVcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgZm9jdXNDdXJyZW50OiByZXJlbmRlckFuZEZvY3VzLFxyXG4gICAgICAgIC4uLnJlc3RcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJvdmluZy10YWJpbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIgfSBmcm9tIFwiLi91c2UtY2hpbGQtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcmNlVXBkYXRlIH0gZnJvbSBcIi4vdXNlLWZvcmNlLXVwZGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuZnVuY3Rpb24gaWRlbnRpdHkodCkgeyByZXR1cm4gdDsgfVxyXG5mdW5jdGlvbiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENlbGxzLCBpbml0aWFsLCB0YXJnZXQsIHNlYXJjaERpcmVjdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcikge1xyXG4gICAgZnVuY3Rpb24gaGVscGVyKCkge1xyXG4gICAgICAgIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgPj0gMCAmJiAobWFuYWdlZENlbGxzW3RhcmdldF0gPT0gbnVsbCB8fCAhIW1hbmFnZWRDZWxsc1t0YXJnZXRdPy5oaWRkZW4pKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKHRhcmdldCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA8IDAgPyBpbml0aWFsIDogdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA8IG1hbmFnZWRDZWxscy5sZW5ndGggJiYgbWFuYWdlZENlbGxzW3RhcmdldF0gPT0gbnVsbCB8fCAhIW1hbmFnZWRDZWxsc1t0YXJnZXRdPy5oaWRkZW4pXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIodGFyZ2V0KSArIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID49IG1hbmFnZWRDZWxscy5sZW5ndGggPyBpbml0aWFsIDogdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChoZWxwZXIoKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdyaWROYXZpZ2F0aW9uKHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XHJcbiAgICBpbmRleE1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAgY29uc3QgZ2V0Rm9jdXNDZWxsT25Sb3dDaGFuZ2UgPSB1c2VTdGFibGVDYWxsYmFjayhzaG91bGRGb2N1c09uQ2hhbmdlKTtcclxuICAgIC8vIEtlZXAgdHJhY2sgb2Ygb3VyIGN1cnJlbnRseSB0YWJiYWJsZSByb3cgYW5kIGNvbHVtbi5cclxuICAgIC8vIFRoZXNlIGFyZSBtYW5nbGVkLCBhbmQgc28gcmVsYXRpdmUgdG8gdGhlIERPTSBvcmRlciwgbm90IGNvbXBvbmVudCBvcmRlci5cclxuICAgIC8vIEFueSBvcGVyYXRpb25zIGRvbmUgb24gdGhlc2UgbnVtYmVycyBuZWVkIHRvIGJlIGRlbWFuZ2xlZCBmaXJzdCxcclxuICAgIC8vIG90aGVyd2lzZSB0aGV5J2xsIGJlIGluY29ycmVjdC5cclxuICAgIGNvbnN0IFtjdXJyZW50Um93LCBzZXRDdXJyZW50Um93MiwgZ2V0Q3VycmVudFJvd10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Q29sdW1uLCBzZXRDdXJyZW50Q29sdW1uMiwgZ2V0Q3VycmVudENvbHVtbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIC8vIEZ1bmN0aW9ucyB1c2VkIGZvciBuYXZpZ2F0aW5nIHRvIGRpZmZlcmVudCByb3dzLlxyXG4gICAgLy8gRWFjaCByb3cgaGFzIGl0cyBvd24gdXNlUm92aW5nVGFiSW5kZXggLS0gaWYgaXQncyBub3QgdGhlIFxyXG4gICAgLy8gY3VycmVudCByb3csIHRoZW4gYWxsIG9mIGl0cyBjaGlsZHJlbiBhcmUgbm9uLXRhYmJhYmxlLlxyXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyB0YWJiYWJsZSwgd2l0aCB0aGUgdGFiYmFibGUgY2VsbCBiZWluZyBjdXJyZW50Q29sdW1uLlxyXG4gICAgLy8gVGhpcyBoYXBwZW5zIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGVzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cclxuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdFJvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0Q3VycmVudFJvdzIoYyA9PiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZFJvd3MsIGMgPz8gMCwgMCwgMSwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcikpOyB9LCBbaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcl0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3RSb3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEN1cnJlbnRSb3cyKGMgPT4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRSb3dzLCBjID8/IDAsIG1hbmFnZWRSb3dzLmxlbmd0aCAtIDEsIC0xLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldlJvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0Q3VycmVudFJvdzIoYyA9PiB7IHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZFJvd3MsIGMgPz8gMCwgaW5kZXhNYW5nbGVyKE1hdGgubWF4KDAsIGluZGV4RGVtYW5nbGVyKGMgPz8gMCkgLSAxKSksIC0xLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKTsgfSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dFJvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0Q3VycmVudFJvdzIoYyA9PiB7IHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZFJvd3MsIGMgPz8gMCwgaW5kZXhNYW5nbGVyKE1hdGgubWluKChtYW5hZ2VkUm93cy5sZW5ndGggLSAxKSwgaW5kZXhEZW1hbmdsZXIoYyA/PyAwKSArIDEpKSwgMSwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcik7IH0pOyB9LCBbaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcl0pO1xyXG4gICAgLy8gVHJhY2sgY2hpbGQgcm93cyBhbmQgbWFuYWdlIGtleWJvYXJkIG5hdmlnYXRpb24gYW1vbmcgdGhlbS5cclxuICAgIGNvbnN0IHsgY2hpbGRDb3VudCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUm93cywgaW5kaWNlc0J5RWxlbWVudDogcm93SW5kaWNlc0J5RWxlbWVudCwgZ2V0TW91bnRJbmRleDogZ2V0Um93TW91bnRJbmRleCwgbW91bnRlZENoaWxkcmVuOiBtb3VudGVkUm93cywgdG90YWxDaGlsZHJlbk1vdW50ZWQ6IHRvdGFsUm93c01vdW50ZWQsIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZDogdG90YWxSb3dzVW5tb3VudGVkLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRSb3cgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQ6IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFJvdyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7XHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUm93cyxcclxuICAgICAgICBpbmRleDogaW5kZXhNYW5nbGVyKGdldEN1cnJlbnRSb3coKSA/PyAwKSxcclxuICAgICAgICBuYXZpZ2F0ZVRvRmlyc3Q6IG5hdmlnYXRlVG9GaXJzdFJvdyxcclxuICAgICAgICBuYXZpZ2F0ZVRvTGFzdDogbmF2aWdhdGVUb0xhc3RSb3csXHJcbiAgICAgICAgbmF2aWdhdGVUb05leHQ6IG5hdmlnYXRlVG9OZXh0Um93LFxyXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2OiBuYXZpZ2F0ZVRvUHJldlJvdyxcclxuICAgICAgICBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBcImJsb2NrXCJcclxuICAgIH0pO1xyXG4gICAgLy8gQWN0dWFsbHkgaGFuZGxlIG5vdGlmeWluZyB0aGUgcmVsZXZhbnQgcm93cyB3aGVuIHRoZXlcclxuICAgIC8vIGNoYW5nZSBmcm9tIHVudGFiYmFibGUgdG8gdGFiYmFibGUgb3IgdmljZS12ZXJzYS5cclxuICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGN1cnJlbnRSb3csXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUm93cyxcclxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpbmRleCwgdGFiYmFibGUpID0+IHsgbWFuYWdlZFJvd3NbaW5kZXhdPy5zZXRJc1RhYmJhYmxlUm93KHRhYmJhYmxlKTsgfSxcclxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpbmRleCkgPT4gKG1hbmFnZWRSb3dzW2luZGV4XT8uZ2V0SXNUYWJiYWJsZVJvdygpID8/IG51bGwpLFxyXG4gICAgICAgIHVzZUVmZmVjdDogdXNlRWZmZWN0XHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwsIGJ1dCBwcm92aWRlcyB0eXBlYWhlYWQgZm9yIGVhY2ggY29sdW1uIGluIHRoZSB0YWJsZS5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW4gPSB1c2VDYWxsYmFjaygoe30pID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGdldEluZGV4OiBnZXRDdXJyZW50Um93LCBzZXRJbmRleDogc2V0Q3VycmVudFJvdzIgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW5DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IGluZGV4OiByb3dJbmRleCwgdGV4dCwgaGlkZGVuIH0pID0+IHtcclxuICAgICAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkKHsgaW5kZXg6IHJvd0luZGV4LCB0ZXh0OiBoaWRkZW4gPyBudWxsIDogdGV4dCB9KTtcclxuICAgICAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW5DaGlsZCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gTGFzdCB0aGluZyBiZWZvcmUgd2UgcmV0dXJuIC0tIGhlcmUncyB0aGUgaG9vayBmb3IgaW5kaXZpZHVhbCByb3dzIGFuZCB0aGVpciBjZWxscy5cclxuICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uUm93ID0gdXNlQ2FsbGJhY2soKHsgaW5kZXg6IHJvd0luZGV4LCBoaWRkZW4sIC4uLmluZm8gfSkgPT4ge1xyXG4gICAgICAgIC8vIFdoZW4gd2UgY2hhbmdlIHRoZSBjdXJyZW50IGNvbHVtbiwgd2Ugc2VuZCB0aGF0IGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gdG8gdGhlIHBhcmVudCB2aWEgc2V0U3RhdGUsIGJ1dCB0aGF0IGRvZXNuJ3QgZG8gYW55dGhpbmdcclxuICAgICAgICAvLyBmb3IgdXMuICBUaGUgcGFyZW50IGRvZXNuJ3QgZXZlciBtYW5hZ2Ugcm93cycgY2VsbHMgZm9yIHRoZW0uXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gU28gdG8gZ2V0IHVzIHRvIGFsc28gdXBkYXRlIGFsb25nc2lkZSB0aGUgcGFyZW50LFxyXG4gICAgICAgIC8vIHdlIGp1c3QgdXNlIGZvcmNlVXBkYXRlLlxyXG4gICAgICAgIC8vIFdlIGNvdWxkIGFsc28ga2VlcCBhIGNvcHkgb2YsIGxpa2UsIFwid2hhdCB0aGlzIHJvdyB0aGlua3NcclxuICAgICAgICAvLyB0aGUgY3VycmVudCBjb2x1bW4gaXNcIiB0aGF0ICpzaG91bGQqIGFsd2F5cyBiZSBrZXB0IGluLVxyXG4gICAgICAgIC8vIHN5bmMgd2l0aCBcImdldEN1cnJlbnRDb2x1bW4oKVwiIGFzIGEgc3RhdGUgdmFyaWFibGUsXHJcbiAgICAgICAgLy8gYnV0IGl0ICpqdXN0KiBiZWluZyB1c2VkIGZvciB0aGF0IGlzIGFyZ3VhYmx5ICptb3JlKiBjb25mdXNpbmcuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBCYXNpY2FsbHksIGluZm9ybWF0aW9uIHJlZ2FyZGluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbHVtblxyXG4gICAgICAgIC8vIFwiYmVsb25nc1wiIHRvICpib3RoKiB0aGlzIHJvdyBhbmQgdGhlIHBhcmVudCwgY29uY2VwdHVhbGx5LFxyXG4gICAgICAgIC8vIGJ1dCBmb3IgY2xlYW5saW5lc3MnIHNha2UsIGp1c3Qgb25lIG9mIHRoZW0gZ2V0cyBpdCxcclxuICAgICAgICAvLyBhbmQgdGhlIG90aGVyIGlzIG1hbnVhbGx5IHVwZGF0ZWQgd2hlbmV2ZXIgaXQgY2hhbmdlcy5cclxuICAgICAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy8gXCJTaG9ydGN1dFwiIGZvciBhbnkgZ2l2ZW4gcm93IHRvIGtub3cgdGhhdCBpdCBzaG91bGQgb3Igc2hvdWxkIG5vdFxyXG4gICAgICAgIC8vIGNvbnNpZGVyIG9uZSBvZiBpdHMgY2VsbHMgdGFiYmFibGUuICBBbHNvIHVzZWQgdG8gZGV0ZXJtaW5lXHJcbiAgICAgICAgLy8gaWYgYSBjaGFuZ2UgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgY2VsbCBzaG91bGQgYWxzb1xyXG4gICAgICAgIC8vIHRyaWdnZXIgZm9jdXNpbmcgdGhhdCBjZWxsLlxyXG4gICAgICAgIGNvbnN0IFtpc1RhYmJhYmxlUm93LCBzZXRJc1RhYmJhYmxlUm93LCBnZXRJc1RhYmJhYmxlUm93XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIC8vIElmIHdlJ3JlIG5vdCB0aGUgdGFiYmFibGUgcm93LCB0aGVuIGZvciB0aGUgcHVycG9zZXMgb2YgdGFiSW5kZXhcclxuICAgICAgICAvLyBjYWxjdWxhdGlvbnMsIHdlIGRvbid0IGhhdmUgYSB0YWJiYWJsZSBjaGlsZCBjZWxsLlxyXG4gICAgICAgIGxldCBjdXJyZW50Q29sdW1uID0gaXNUYWJiYWJsZVJvdyA/IGdldEN1cnJlbnRDb2x1bW4oKSA6IG51bGw7XHJcbiAgICAgICAgLy8gVHJhY2sgY2hpbGQgY2VsbHMgYW5kIG1hbmFnZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGFtb25nIHRoZW0uXHJcbiAgICAgICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDZWxscywgdXNlUm92aW5nVGFiSW5kZXhDaGlsZDogdXNlUm92aW5nVGFiSW5kZXhDZWxsLCBjaGlsZENvdW50OiBjZWxsQ291bnQgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHtcclxuICAgICAgICAgICAgc2hvdWxkRm9jdXNPbkNoYW5nZTogdXNlQ2FsbGJhY2soKCkgPT4geyByZXR1cm4gISFnZXRGb2N1c0NlbGxPblJvd0NoYW5nZSgpICYmICEhZ2V0SXNUYWJiYWJsZVJvdygpOyB9LCBbXSksXHJcbiAgICAgICAgICAgIHRhYmJhYmxlSW5kZXg6IGN1cnJlbnRDb2x1bW5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBNb3JlIG5hdmlnYXRpb24gc3R1ZmZcclxuICAgICAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3RDb2x1bW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4yKHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIDAsIDAsIDEsIGlkZW50aXR5LCBpZGVudGl0eSkpO1xyXG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdENvbHVtbiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0Q3VycmVudENvbHVtbjIodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDZWxscywgbWFuYWdlZENlbGxzLmxlbmd0aCwgbWFuYWdlZENlbGxzLmxlbmd0aCwgLTEsIGlkZW50aXR5LCBpZGVudGl0eSkpOyBmb3JjZVVwZGF0ZSgpOyB9LCBbXSk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGVUb1ByZXZDb2x1bW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4yKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIGMsIGMgLSAxLCAtMSwgaWRlbnRpdHksIGlkZW50aXR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0Q29sdW1uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uMihjID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENlbGxzLCBjLCBjICsgMSwgMSwgaWRlbnRpdHksIGlkZW50aXR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkOiB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRDZWxsIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHtcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2VsbHMsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgIGluZGV4OiBjdXJyZW50Q29sdW1uID8/IDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVIb21lRW5kS2V5czogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0OiBuYXZpZ2F0ZVRvRmlyc3RDb2x1bW4sXHJcbiAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0OiBuYXZpZ2F0ZVRvTGFzdENvbHVtbixcclxuICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXY6IG5hdmlnYXRlVG9QcmV2Q29sdW1uLFxyXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dDogbmF2aWdhdGVUb05leHRDb2x1bW5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBOb3RpZnkgdGhlIHJlbGV2YW50IGNoaWxkIGNlbGxzIHdoZW4gdGhleSBzaG91bGQvc2hvdWxkIG5vdCBiZSB0YWJiYWJsZVxyXG4gICAgICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4OiBjdXJyZW50Q29sdW1uLFxyXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDZWxscyxcclxuICAgICAgICAgICAgc2V0Q2hpbGRGbGFnOiAoY2VsbEluZGV4LCBjZWxsSXNUYWJiYWJsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmRleCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDZWxsc1tjZWxsSW5kZXhdPy5zZXRUYWJiYWJsZShjZWxsSXNUYWJiYWJsZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldENoaWxkRmxhZzogKGNlbGxJbmRleCkgPT4gKG1hbmFnZWRDZWxsc1tjZWxsSW5kZXhdPy5nZXRUYWJiYWJsZSgpID8/IG51bGwpLFxyXG4gICAgICAgICAgICB1c2VFZmZlY3RcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBBbnkgdGltZSB3ZSBiZWNvbWUgdGhlIGN1cnJlbnRseSB0YWJiYWJsZSByb3csXHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgd2UncmUgaW4gYSB2YWxpZCBjZWxsLCBhbmQgc2hpZnQgbGVmdC9yaWdodCBpZiBub3QgdG8gZmluZCBvbmUuXHJcbiAgICAgICAgLy8gVE9ETzogU2VlbXMga2luZGEgamFua3k/IElzIHRoZXJlIG5vIGNsZWFuZXIgd2F5IHRvIGFjY29tcGxpc2ggdGhpcyxcclxuICAgICAgICAvLyBlc3BlY2lhbGx5IHNpbmNlIGl0J3Mgc2ltaWxhciB0byBvdGhlciBjb2RlP1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1RhYmJhYmxlUm93KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbEluZGV4ID0gZ2V0Q3VycmVudENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNlbGxJbmRleCA+PSAwICYmIG1hbmFnZWRDZWxsc1tjZWxsSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWNlbGxJbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4ID0gZ2V0Q3VycmVudENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjZWxsSW5kZXggPCBtYW5hZ2VkQ2VsbHMubGVuZ3RoICYmIG1hbmFnZWRDZWxsc1tjZWxsSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKytjZWxsSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPT0gbWFuYWdlZENlbGxzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4ID0gZ2V0Q3VycmVudENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmRleCAhPSBnZXRDdXJyZW50Q29sdW1uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbjIoY2VsbEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtpc1RhYmJhYmxlUm93XSk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlTWFuYWdlZFJvd1Byb3BzIH0gPSB1c2VNYW5hZ2VkUm93KHtcclxuICAgICAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxyXG4gICAgICAgICAgICBzZXRJc1RhYmJhYmxlUm93LFxyXG4gICAgICAgICAgICBnZXRJc1RhYmJhYmxlUm93OiBnZXRJc1RhYmJhYmxlUm93LFxyXG4gICAgICAgICAgICBoaWRkZW4sXHJcbiAgICAgICAgICAgIC4uLmluZm9cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzOiB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRSb3dQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUm93KGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uUm93UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1hbmFnZWRSb3dQcm9wcyh1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRSb3dQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgaGlkZGVuOiAhIWhpZGRlbiwgXCJkYXRhLWluZGV4XCI6IHJvd0luZGV4IH0sIHByb3BzKSkpLCBbdXNlTWFuYWdlZFJvd1Byb3BzLCAhIWhpZGRlbl0pO1xyXG4gICAgICAgIGNvbnN0IGdldFJvd0luZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHJvd0luZGV4KTtcclxuICAgICAgICBjb25zdCB1c2VHcmlkTmF2aWdhdGlvbkNlbGwgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2VsbCh7IC4uLmluZm8sIHNldFRhYmJhYmxlIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzOiB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRDZWxsUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZENlbGwoaW5mbyk7XHJcbiAgICAgICAgICAgIC8vIEFueSB0aW1lIHdlIGludGVyYWN0IHdpdGggdGhpcyBjZWxsLCBzZXQgaXQgdG8gYmVcclxuICAgICAgICAgICAgLy8gb3VyIFwiY3VycmVudGx5IHRhYmJhYmxlXCIgY2VsbCwgcmVnYXJkbGVzcyBvZlxyXG4gICAgICAgICAgICAvLyBhbnkgcHJldmlvdXNseSBzZWxlY3RlZCByb3cvY29sdW1uLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBNb3VzZXVwL2Rvd24gbWlnaHQgYmUgcHJlZmVyYWJsZSxcclxuICAgICAgICAgICAgLy8gYnV0IGl0IGRvZXNuJ3QgZmlyZSBvbiBsYWJlbCBlbGVtZW50cyBoZXJlPz8/Pz9cclxuICAgICAgICAgICAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRSb3cyKGdldFJvd0luZGV4KCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbjIoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uQ2VsbFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHModXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkQ2VsbFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbkNsaWNrIH0sIHByb3BzKSkpLCBbdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkQ2VsbFByb3BzXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRhYmJhYmxlLCB1c2VHcmlkTmF2aWdhdGlvbkNlbGxQcm9wcyB9O1xyXG4gICAgICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRDZWxsXSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudENvbHVtbixcclxuICAgICAgICAgICAgdXNlR3JpZE5hdmlnYXRpb25Sb3dQcm9wcyxcclxuICAgICAgICAgICAgdXNlR3JpZE5hdmlnYXRpb25DZWxsLFxyXG4gICAgICAgICAgICBjZWxsQ291bnQsXHJcbiAgICAgICAgICAgIGlzVGFiYmFibGVSb3csXHJcbiAgICAgICAgICAgIG1hbmFnZWRDZWxsczogbWFuYWdlZENlbGxzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRSb3csIHVzZU1hbmFnZWRSb3csIGluZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlR3JpZE5hdmlnYXRpb25Sb3csXHJcbiAgICAgICAgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW4sXHJcbiAgICAgICAgcm93Q291bnQ6IGNoaWxkQ291bnQsXHJcbiAgICAgICAgY2VsbEluZGV4OiBjdXJyZW50Q29sdW1uLFxyXG4gICAgICAgIHJvd0luZGV4OiBjdXJyZW50Um93LFxyXG4gICAgICAgIG1hbmFnZWRSb3dzXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ncmlkLW5hdmlnYXRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfSkge1xyXG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcclxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2sgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cclxuICAgICAgICAgICAgY29uc3QgcmFmQ2FsbGJhY2sgPSAobXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaGFzQ2FsbGJhY2tdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xyXG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZywgZ2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xhc3REcm9wRWZmZWN0LCBzZXRMYXN0RHJvcEVmZmVjdCwgZ2V0TGFzdERyb3BFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IChlZmZlY3RBbGxvd2VkID8/IFwiYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdJbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbWltZVR5cGUsIGRhdGFdIG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25EcmFnRW5kID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoe1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQsXHJcbiAgICAgICAgICAgIHJlZlxyXG4gICAgICAgIH0pLCBwKTtcclxuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxyXG4gICAgICAgIGRyYWdnaW5nLFxyXG4gICAgICAgIGdldERyYWdnaW5nLFxyXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cclxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXHJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG47XHJcbjtcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUZpbGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGZpbGVOYW1lO1xyXG4gICAgZXJyb3JUeXBlO1xyXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUsIGJhc2UpIHtcclxuICAgICAgICBzdXBlcihiYXNlPy5tZXNzYWdlID8/IFwiQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQgcmVhZGluZyB0aGUgZmlsZS5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gYmFzZT8ubmFtZTtcclxuICAgIH1cclxufVxyXG4vL01lcmdlZFByb3BzPFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RSwgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJvbkRyYWdFbnRlclwiIHwgXCJvbkRyYWdMZWF2ZVwiIHwgXCJvbkRyYWdPdmVyXCIgfCBcIm9uRHJvcFwiPj4sIFA+O1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHBhYmxlKHsgZWZmZWN0IH0pIHtcclxuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbiwgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZEZpbGVzLCBzZXREcm9wcGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BFcnJvciwgc2V0RHJvcEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBBbGwgdGhlIHByb21pc2VzIGdlbmVyYXRlZCBmcm9tIHRoZSBkcm9wIGV2ZW50cy5cclxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXHJcbiAgICBjb25zdCBkcm9wUHJvbWlzZXNSZWYgPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQcm9taXNlSW5kZXgsIHNldEN1cnJlbnRQcm9taXNlSW5kZXgsIGdldEN1cnJlbnRQcm9taXNlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxyXG4gICAgLy8gSWYgdGhlcmUgaXMgb25lLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIHNpbmNlIGl0IHJ1bnMgdGhlIHNhbWUgY2hlY2suXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb21pc2VDb3VudF0pO1xyXG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXHJcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxyXG4gICAgLy8gRmluYWxseSwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnltb3JlIHByb21pc2VzLlxyXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXHJcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXHJcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcclxuICAgICAgICAgICAgY3VycmVudFByb21pc2UudGhlbigoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkb25lLCBhcmUgdGhlcmUgbW9yZSBwcm9taXNlcyBpbiB0aGUgcXVldWU/XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgcmVmID0gdXNlUmVmPEU+KG51bGwpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cclxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gKGVmZmVjdCA/PyBcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWltZVR5cGVzLmFkZCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7IHR5cGU6IGl0ZW0udHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obmV3RmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcclxuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXHJcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRmlsZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wUHJvbWlzZXNSZWYuY3VycmVudC5wdXNoKFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoeyBvbkRyYWdFbnRlciwgb25EcmFnTGVhdmUsIG9uRHJhZ092ZXIsIG9uRHJvcCB9KSwgcCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VEcm9wcGFibGVQcm9wcyxcclxuICAgICAgICBmaWxlc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgZHJvcHBlZEZpbGVzLFxyXG4gICAgICAgIGRyb3BwZWRTdHJpbmdzLFxyXG4gICAgICAgIGRyb3BFcnJvcixcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG4vKipcclxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbikuXHJcbiAqXHJcbiAqIFRvIGNvbXBlbnNhdGUgZm9yIHRoaXMsIHlvdSBzaG91bGQgcGFzcyBhIGB1c2VFZmZlY3RgLWVzcXVlIGNhbGxiYWNrIHRoYXQgaXMgcnVuIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSnVzdCBsaWtlIGB1c2VFZmZlY3RgLCB0aGlzIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQncyBydW4gYmVmb3JlIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSWYgeW91IHdvdWxkIGxpa2UgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKG9yLCBzYXksIHdoZW4gdGhlIHZhbHVlIG1lZXRzIHNvbWUgY3JpdGVyaWEpLCB0aGlzIGlzIHdoZXJlIHlvdSdsbCB3YW50IHRvIHB1dCBpbiBhIGNhbGwgdG8gYSBgc2V0U3RhdGVgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxyXG4gKlxyXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcclxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXHJcbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcclxuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcclxuICpcclxuICogTm90ZSB0aGF0IHdoaWxlIGNhbGxpbmcgYHNldFN0YXRlYCBkb2Vzbid0IGNhdXNlIGFueSByZS1yZW5kZXJzLCB5b3UgY2FuIGRvIHRoYXQgd2l0aGluIHlvdXIgYG9uQ2hhbmdlYCBmdW5jdGlvbiwgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzIHZpYSB0aGF0IGBzZXRTdGF0ZWAuXHJcbiAqXHJcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSBpbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZShvbkNoYW5nZSwgaW5pdGlhbFZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCA/IFVuc2V0IDogaW5pdGlhbFZhbHVlKTtcclxuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXHJcbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQsIFtdKTtcclxuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZVN0YWJsZUNhbGxiYWNrKChhcmcpID0+IHtcclxuICAgICAgICBjb25zdCBwcmV2RGVwID0gdmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGRlcCA9IGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHByZXZEZXApIDogYXJnO1xyXG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oZGVwLCBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGVwO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gSGFuZGxlIHJ1bm5pbmcgb24gbW91bnQvdW5tb3VudFxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9uU2hvdWxkQ2xlYW5VcDtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXTtcclxufVxyXG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxyXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcclxuICpcclxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXHJcbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cclxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxyXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXHJcbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxyXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cclxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXHJcbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cclxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxyXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqXHJcbiAqXHJcbiAqIEluIHN1bW1hcnk6XHJcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cclxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXHJcbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cclxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cclxuICpcclxuICpcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IDA7XHJcbmNvbnN0IGFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBTZXQoKTtcclxuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBTZXQoKTtcclxuY29uc3Qgd2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5sZXQgd2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbmZ1bmN0aW9uIGZvY3Vzb3V0KGUpIHtcclxuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgYWN0aXZlRWxlbWVudFVwZGF0ZXJzKVxyXG4gICAgICAgICAgICBmPy4obnVsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBKdXN0IHdhaXQgZm9yIHRoZSBmb2N1c2luIGV2ZW50LlxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvY3VzaW4oZSkge1xyXG4gICAgbGV0IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQgbGFzdEZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZm9yRWFjaChmID0+IGY/LihjdXJyZW50bHlGb2N1c2VkRWxlbWVudCkpO1xyXG4gICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKGxhc3RGb2N1c2VkRWxlbWVudCkpO1xyXG59XHJcbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKCkge1xyXG4gICAgd2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZm9yRWFjaChmID0+IGY/Lih3aW5kb3dGb2N1c2VkKSk7XHJcbn1cclxuZnVuY3Rpb24gd2luZG93Qmx1cigpIHtcclxuICAgIHdpbmRvd0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKHdpbmRvd0ZvY3VzZWQpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlZCB9KSB7XHJcbiAgICBjb25zdCBbZ2V0QWN0aXZlRWxlbWVudCwgc2V0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25BY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2dldExhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtnZXRXaW5kb3dGb2N1c2VkLCBzZXRXaW5kb3dGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbldpbmRvd0ZvY3VzZWRDaGFuZ2VkLCB3aW5kb3dGb2N1c2VkKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIHRoZW0gZXZlbiBpZiB0aGV5J3JlIHVuZGVmaW5lZCB0byBtb3JlIGVhc2lseVxyXG4gICAgICAgIC8vIG1hbmFnZSB0aGUgXCI+MCBtZWFucyBkb24ndCBhZGQgaGFuZGxlcnNcIiBsb2dpYy5cclxuICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldExhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuYWRkKHNldFdpbmRvd0ZvY3VzZWQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5kZWxldGUoc2V0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZGVsZXRlKHNldExhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmRlbGV0ZShzZXRXaW5kb3dGb2N1c2VkKTtcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4geyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQgfSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIHVzZUFjdGl2ZUVsZW1lbnQoe1xyXG4gICAgICAgIG9uQWN0aXZlRWxlbWVudENoYW5nZTogbm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBvbkZvY3VzZWRDaGFuZ2VkPy4oZWxlbWVudCA9PSBub2RlICYmIGVsZW1lbnQgIT0gbnVsbCk7XHJcbiAgICAgICAgICAgIG9uRm9jdXNlZElubmVyQ2hhbmdlZD8uKCEhZWxlbWVudD8uY29udGFpbnMobm9kZSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZTogbm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBvbkxhc3RGb2N1c2VkQ2hhbmdlZD8uKGVsZW1lbnQgPT0gbm9kZSAmJiBlbGVtZW50ICE9IG51bGwpO1xyXG4gICAgICAgICAgICBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkPy4oISFlbGVtZW50Py5jb250YWlucyhub2RlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpOyB9LCBbdXNlUmVmRWxlbWVudFByb3BzXSk7XHJcbiAgICByZXR1cm4geyB1c2VIYXNGb2N1c1Byb3BzLCBlbGVtZW50LCBnZXRFbGVtZW50IH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWhhcy1mb2N1cy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJ2YWwoeyBpbnRlcnZhbCwgY2FsbGJhY2sgfSkge1xyXG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcclxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xyXG4gICAgY29uc3QgZ2V0SW50ZXJ2YWwgPSB1c2VTdGFibGVHZXR0ZXIoaW50ZXJ2YWwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgIGxldCBsYXN0RGVsYXlVc2VkID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgaWYgKGludGVydmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgLy8gdGhhdCBjbGVhcnMgYW5kIHJlc2V0cyB0aGUgaW50ZXJ2YWwgaWYgaXQgY2hhbmdlcy5cclxuICAgICAgICBjb25zdCBhZGp1c3RhYmxlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnRlcnZhbCA9IGdldEludGVydmFsKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbGFzdERlbGF5VXNlZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgbGFzdERlbGF5VXNlZCA9IGN1cnJlbnRJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGludGVydmFsKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnZhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbiB9IGZyb20gXCIuL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3ZpbmdUYWJJbmRleCB9IGZyb20gXCIuL3VzZS1yb3ZpbmctdGFiaW5kZXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqXHJcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxyXG4gKiBidXQgaXQncyBub3QgYmFkIGZvciBhIGNvbGxhdGlvbiBjcmFzaCBjb3Vyc2UgYW5kIEkgbWlnaHQgdXNlIGl0IGFnYWluLlxyXG4gKiBFdmVuIGp1c3QgYXMgYSBcInRoaXMgaXMgd2h5IGl0J3MgaW1wb3J0YW50IGFuZCBnb29kIHRvIHVzZSB0aGVzZSB0aGluZ3NcIiB0aGluZy5cclxuICpcclxuICogfExhbmcufFRhcmdldHxVc2VyIGlucHV0fGBiYXNlYHxgYWNjZW50YHxgY2FzZWB8YHZhcmlhbnRgfFxyXG4gKiB8LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXxcclxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcclxuICogfEVOfEhpfO+8qO+9iXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxFTnxIaXxoaXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxyXG4gKiB8RU58SGl8QnllfOKdjHzinYx84p2MfOKdjHxcclxuICogfERBfMOlfGFhfOKchXzinIV84pyFfOKdjHxcclxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcclxuICogfERBfMOlfEFhfOKchXzinIV84p2MfOKdjHxcclxuICogfEVOfMOlfGFhfOKdjHzinYx84p2MfOKdjHxcclxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcclxuICogfEVOfMOlfGF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8REF8w6V8YXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcclxuICogfEpQfOOCq3zvvbZ84pyFfOKchXzinIV84pyFfFxyXG4gKiB8SlB844KrfOOBi3zinIV84pyFfOKchXzinYx8XHJcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcclxuICogfEpQfOOCq3zji5V84pyFfOKchXzinYx84p2MfFxyXG4gKiB8SlB844KrfOOCrHzinIV84p2MfOKdjHzinYx8XHJcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcclxuICogfFpIfOe0hXznuqJ84p2MfOKdjHzinYx84p2MfFxyXG4gKlxyXG4gKlxyXG4gKiAoTm90ZSB0byBzZWxmOiBBdCBzb21lIHBvaW50LCB0aGlzIGZpbGUgd2lsbCBwcm9iYWJseSBiZSBub3JtYWxpemVkXHJcbiAqIGJ5IHNvbWVib2R5IGFuZCDvqqogd2lsbCB0dXJuIGJhY2sgaW50byDnnYAuKVxyXG4gKlxyXG4gKi9cclxuY29uc3QgZHVtbXkgPSBudWxsO1xyXG47XHJcbmZ1bmN0aW9uIGlkZW50aXR5KHQpIHsgcmV0dXJuIHQ7IH1cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgcHJvcGVyIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGNvbXBvbmVudHMgbGlrZSBsaXN0Ym94ZXMsIGJ1dHRvbiBncm91cHMsIG1lbnVzLCBldGMuXHJcbiAqXHJcbiAqIEluIHRoZSBkb2N1bWVudCBvcmRlciwgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBcImZvY3VzZWRcIiBvciBcInRhYmJhYmxlXCIgZWxlbWVudCwgbWFraW5nIGl0IGFjdCBtb3JlIGxpa2Ugb25lIGNvbXBsZXRlIHVuaXQgaW4gY29tcGFyaXNvbiB0byBldmVyeXRoaW5nIGFyb3VuZCBpdC5cclxuICogTmF2aWdhdGluZyBmb3J3YXJkcy9iYWNrd2FyZHMgY2FuIGJlIGRvbmUgd2l0aCB0aGUgYXJyb3cga2V5cywgSG9tZS9FbmQga2V5cywgb3IgYW55IGFueSB0ZXh0IGZvciB0eXBlYWhlYWQgdG8gZm9jdXMgdGhlIG5leHQgaXRlbSB0aGF0IG1hdGNoZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGlzdE5hdmlnYXRpb24oeyBpbml0aWFsSW5kZXgsIHNob3VsZEZvY3VzT25DaGFuZ2UsIGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyIH0pIHtcclxuICAgIGluZGV4TWFuZ2xlciA/Pz0gaWRlbnRpdHk7XHJcbiAgICBpbmRleERlbWFuZ2xlciA/Pz0gaWRlbnRpdHk7XHJcbiAgICBrZXlOYXZpZ2F0aW9uID8/PSBcImVpdGhlclwiO1xyXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aHJlZSB0aGluZ3MgcmVsYXRlZCB0byB0aGUgY3VycmVudGx5IHRhYmJhYmxlIGVsZW1lbnQncyBpbmRleDpcclxuICAgIC8vIFdoYXQgaXQgaXMsIGFuZCB3aGV0aGVyLCB3aGVuIHdlIHJlbmRlciB0aGlzIGNvbXBvbmVudCBhbmQgaXQncyBjaGFuZ2VkLCB0byBhbHNvIGZvY3VzIHRoZSBlbGVtZW50IHRoYXQgd2FzIG1hZGUgdGFiYmFibGUuXHJcbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZShpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBpbml0aWFsSW5kZXgpO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzQ3VycmVudCwgLi4ucmVzdCB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlLCB0YWJiYWJsZUluZGV4IH0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGkpID0+IHsgc2V0VGFiYmFibGVJbmRleChpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlcigwKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlcihtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcihpID8/IDApIC0gMSkpOyB9LCBbaW5kZXhEZW1hbmdsZXIsIGluZGV4TWFuZ2xlcl0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIoaSA/PyAwKSArIDEpKTsgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuICAgIGNvbnN0IHNldEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChpbmRleCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XHJcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XHJcbiAgICAgICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHModXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMoeyBvbkNsaWNrOiByb3ZlVG9TZWxmIH0pKSksIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyxcclxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIG5hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcclxuICAgICAgICB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxyXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxyXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdCxcclxuICAgICAgICBuYXZpZ2F0ZVRvTGFzdCxcclxuICAgICAgICBmb2N1c0N1cnJlbnQsXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMVxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIGZvcm0gZmllbGRzIChuZXN0ZWQpIGluc2lkZSBhIGRpc2FibGVkIGZpZWxkc2V0IGFyZSBub3QgZm9jdXNhYmxlL3RhYmJhYmxlXG4vLyAgdW5sZXNzIHRoZXkgYXJlIGluIHRoZSBfZmlyc3RfIDxsZWdlbmQ+IGVsZW1lbnQgb2YgdGhlIHRvcC1tb3N0IGRpc2FibGVkXG4vLyAgZmllbGRzZXRcblxuXG52YXIgaXNEaXNhYmxlZEZyb21GaWVsZHNldCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkge1xuICBpZiAoaXNJbnB1dChub2RlKSB8fCBub2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBub2RlLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0ZJRUxEU0VUJyAmJiBwYXJlbnROb2RlLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIGxvb2sgZm9yIHRoZSBmaXJzdCA8bGVnZW5kPiBhcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2YgdGhlIGRpc2FibGVkXG4gICAgICAgIC8vICA8ZmllbGRzZXQ+OiBpZiB0aGUgbm9kZSBpcyBpbiB0aGF0IGxlZ2VuZCwgaXQnbGwgYmUgZW5hYmxlZCBldmVuXG4gICAgICAgIC8vICB0aG91Z2ggdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkOyBvdGhlcndpc2UsIHRoZSBub2RlIGlzIGluIGFcbiAgICAgICAgLy8gIHNlY29uZGFyeS9zdWJzZXF1ZW50IGxlZ2VuZCwgb3Igc29tZXdoZXJlIGVsc2Ugd2l0aGluIHRoZSBmaWVsZHNldFxuICAgICAgICAvLyAgKGhvd2V2ZXIgZGVlcCBuZXN0ZWQpIGFuZCBpdCdsbCBiZSBkaXNhYmxlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0xFR0VORCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWlucyhub2RlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIHRoZSBmaXJzdCBsZWdlbmQgKGluIGRvYyBvcmRlciksIHNvIG5vIG1hdHRlclxuICAgICAgICAgICAgLy8gIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gYSBsZWdlbmQsIHNvIG5vIG1hdHRlciB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gLy8gZWxzZSwgbm9kZSdzIHRhYmJhYmxlL2ZvY3VzYWJsZSBzdGF0ZSBzaG91bGQgbm90IGJlIGFmZmVjdGVkIGJ5IGEgZmllbGRzZXQnc1xuICAvLyAgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKG5vZGUuZGlzYWJsZWQgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zLmRpc3BsYXlDaGVjaykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIGNhbmRpZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FuZGlkYXRlLCBpKSB7XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcblxuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGEubm9kZTtcbiAgfSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn07XG5cbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc1RhYmJhYmxlID0gZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcblxudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuZXhwb3J0IHsgZm9jdXNhYmxlLCBpc0ZvY3VzYWJsZSwgaXNUYWJiYWJsZSwgdGFiYmFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgXCJ3aWNnLWluZXJ0XCI7XHJcbmltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuY29uc3QgYmxvY2tpbmdFbGVtZW50cyA9IGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzO1xyXG4vKipcclxuICogQWxsb3dzIGFuIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBieSBhcHBseWluZyB0aGUgXCJpbmVydFwiIGF0dHJpYnV0ZSB0byBhbGwgc2libGluZywgYXVudCwgYW5kIHVuY2xlIG5vZGVzLlxyXG4gKlxyXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cclxuICogKHNwZWNpZmljYWxseSB2aWEgYGJsb2NraW5nRWxlbWVudHNgLCB3aXRoIGEgc21hbGwgcG9seWZpbGwgYmVjYXVzZSBJJ20gbm90IHN1cmUgaG93IGxvbmdcclxuICogaXQnbGwgdGFrZSB0byBmaW5kIGl0cyB3YXkgaW50byB0aGUgc3BlYywgaWYgZXZlcilcclxuICogQHBhcmFtIHRhcmdldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJsb2NraW5nRWxlbWVudCh0YXJnZXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUHVzaC9wb3AgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmdFbGVtZW50cyBzdGFjay5cclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGFyZ2V0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFyZ2V0XSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gYmxvY2tpbmdFbGVtZW50cy50b3A7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBpc0ZvY3VzYWJsZSB9IGZyb20gXCJ0YWJiYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmNvbnN0IGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIC8vY29uc3QgW2xhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGU8Tm9kZSB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7fSk7XHJcbiAgICAvLyBXaGVuIHRoZSB0cmFwIGJlY29tZXMgYWN0aXZlLCBiZWZvcmUgd2UgbGV0IHRoZSBibG9ja2luZ0VsZW1lbnRzIGhvb2sgcnVuLFxyXG4gICAgLy8ga2VlcCB0cmFjayBvZiB3aGF0ZXZlcidzIGN1cnJlbnRseSBmb2N1c2VkIGFuZCBzYXZlIGl0LlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnRcclxuICAgICAgICAgICAgLy8gdG8gd2hhdGV2ZXIncyBjdXJyZW50bHkgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLnNldChnZXRUb3BFbGVtZW50KCksIGdldExhc3RBY3RpdmVFbGVtZW50KCkgPz8gZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcclxuICAgIHVzZUJsb2NraW5nRWxlbWVudCh0cmFwQWN0aXZlID8gZWxlbWVudCA6IG51bGwpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbnkgdGltZSB3ZSBhY3RpdmF0ZSBvciBkZWFjdGl2YXRlIHRoZSB0cmFwLFxyXG4gICAgICogY2hhbmdlIGZvY3VzIHRvIHNvbWV0aGluZyBlbHNlIChzb21ldGhpbmcgaW5cclxuICAgICAqIHRoZSB0cmFwIGlmIGl0J3MgYWN0aXZlLCBvciB3aGF0ZXZlciB3ZSd2ZVxyXG4gICAgICogdHJhY2tlZCBpbiBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gaWYgbm90KVxyXG4gICAgICovXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIGV4dHJhIHF1ZXVlTWljcm90YXNrIGlzIG5lZWRlZCBmb3JcclxuICAgICAgICAgICAgICAgIC8vIC4uLnJlYXNvbnM/XHJcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpPy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXMgdG8gdGhlIGVsZW1lbnRcclxuICAgICAgICAgICAgLy8gdGhhdCBoYXMgcmV0dXJuZWQgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLmdldChnZXRUb3BFbGVtZW50KCkpPy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcclxuICAgIGNvbnN0IHVzZUZvY3VzVHJhcFByb3BzID0gKChwcm9wcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLW1vZGFsXCI6IHRyYXBBY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9LCB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VGb2N1c1RyYXBQcm9wcyxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW4gdGhlIGdpdmVuIG5vZGUsIG9yIG51bGwgaWYgbm9uZSBhcmUgZm91bmQuXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7IGFjY2VwdE5vZGU6IChub2RlKSA9PiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgaXNGb2N1c2FibGUobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQKSB9KTtcclxuICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID0gdHJlZVdhbGtlci5maXJzdENoaWxkKCk7XHJcbiAgICByZXR1cm4gZmlyc3RGb2N1c2FibGU7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWZvY3VzLXRyYXAuanMubWFwIixudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsibCIsInUiLCJ0IiwibyIsInIiLCJmIiwiZSIsImMiLCJzIiwiYSIsImgiLCJ2IiwieSIsImQiLCJfIiwiayIsImIiLCJtIiwiZyIsImoiLCJ3IiwieCIsIlAiLCJNIiwiQSIsIkMiLCJIIiwiJCIsIlQiLCJPIiwiTCIsIlMiLCJuIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZVAiLCJ1c2VSZWYiLCJVbnNldCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsImlkZW50aXR5IiwidGhpcyIsIlJhbmRvbVdvcmRzIiwiY3JlYXRlQ29udGV4dCIsIm1lbW8iLCJ1c2VDb250ZXh0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7QUFBRyxRQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQyxHQUFDLENBQUdDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLG9FQUFvRSxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU9DLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBU0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFWCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUVELEdBQUMsQ0FBQyxLQUFLLEVBQUVBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFtQyxTQUFTYSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU9BLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVmLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ2dCLEdBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRWQsR0FBQyxHQUFHSixHQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDSSxHQUFDLENBQUNKLEdBQUMsQ0FBQyxpQkFBaUIsR0FBR0csR0FBQyxFQUFFZSxHQUFDLEVBQUMsQ0FBQyxTQUFTQSxHQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDaEIsR0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ1UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQ0osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRWIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0QsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNPLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUViLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDZSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQ1AsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDUSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBU0csR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRW5CLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBU2tCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEdBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUzRCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEdBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbkIsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSWMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDZSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDcEIsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1QsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUNTLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBR0ksR0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQ08sR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUNVLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOUIsR0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTOEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRXhCLEdBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEdBQUdtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDTCxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUVMLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVMLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRWdCLEdBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0gsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3ZCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsR0FBQyxDQUFDLE9BQU8sRUFBRUEsR0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFdUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDdkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRVUsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsU0FBU21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQy9CLEdBQUMsQ0FBQyxFQUFFLEVBQUVBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUNSLEdBQUMsQ0FBQ0UsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFUCxHQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUErTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQ0QsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNZLEdBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1YsR0FBQyxDQUFDLEtBQUssQ0FBQ1AsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUF1RGEsR0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNMLEdBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNHLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUNILEdBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDRCxHQUFDLENBQUNYLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQ2UsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNiLEdBQUMsQ0FBQyxDQUFDOztJQ0FsaFQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDMkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBU1IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBNE4sU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQ2EsR0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxHQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDZCxHQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDYyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLHFCQUFxQixDQUFDLFNBQVNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQ0FyNEQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUlDLEdBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLEdBQUcsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFxVixJQUEyTSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxJQUFJQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQXFMLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUQsR0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUVELEdBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDTCxHQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQXVuQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUosR0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGtPQUFrTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBK0tGLEdBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDQSxHQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBSSxJQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENB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Q0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxLQUFLLENBQUM7SUFDTixDQUFDO0lBQ0Q7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUN2UUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDdkM7SUFDQSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUdDLENBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxJQUFJLE1BQU0sR0FBRyxHQUFHQyxDQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUI7SUFDQTtJQUNBLElBQUksTUFBTSxRQUFRLEdBQUdGLEdBQVcsQ0FBQyxLQUFLLElBQUk7SUFDMUMsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTtJQUN6QyxZQUFZLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQyxZQUFZLFNBQVMsQ0FBQyxTQUFTLElBQUk7SUFDbkMsZ0JBQWdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDeEMsZ0JBQWdCLE9BQU8sU0FBUyxDQUFDO0lBQ2pDLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLFlBQVksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLFNBQVM7SUFDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxJQUFJLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ25ELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDOztJQzVCQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLGFBQWEsR0FBRztJQUNoQztJQUNBLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdEO0lBQ0E7SUFDQSxJQUFJLE1BQU0sS0FBSyxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUs7SUFDckMsUUFBUSxJQUFJLENBQUM7SUFDYixZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLElBQUksTUFBTSxrQkFBa0IsR0FBR0EsR0FBVyxDQUFDLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25HO0lBQ0E7SUFDQSxJQUFJLE9BQU87SUFDWCxRQUFRLGtCQUFrQjtJQUMxQixRQUFRLE9BQU87SUFDZixRQUFRLFVBQVU7SUFDbEIsS0FBSyxDQUFDO0lBQ047O0lDNUJBLE1BQU1HLE9BQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLGVBQWUsQ0FBQyxLQUFLLEVBQUU7SUFDdkMsSUFBSSxNQUFNLEdBQUcsR0FBR0QsQ0FBTSxDQUFDQyxPQUFLLENBQUMsQ0FBQztJQUM5QixJQUFJQyxDQUFtQixDQUFDLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQzFDLElBQUksT0FBT0osR0FBVyxDQUFDLE1BQU07SUFDN0IsUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUtHLE9BQUssRUFBRTtJQUNuQyxZQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztJQUMvRyxTQUFTO0lBQ1QsUUFBUSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDM0IsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1g7O0lDdEJBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUU7SUFDdEMsSUFBSSxNQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RCxJQUFJLE9BQU9ILEdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLO0lBQ3BDLFFBQVEsT0FBTyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEQsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1g7O0lDZE8sU0FBUyxjQUFjLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDeEQsSUFBSSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQ3hFLElBQUksTUFBTSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsSUFBSUssQ0FBUyxDQUFDLE1BQU07SUFDcEIsUUFBUSxJQUFJLE9BQU8sRUFBRTtJQUNyQixZQUFZLE1BQU0sWUFBWSxHQUFHLE1BQU07SUFDdkMsZ0JBQWdCLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUN6TCxnQkFBZ0IsYUFBYSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hMLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxFQUFFLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxFQUFFO0lBQy9DLGdCQUFnQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLGdCQUFnQixPQUFPLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQixNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLGdCQUFnQixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELGdCQUFnQixPQUFPLE1BQU0sUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25ELGFBQWE7SUFDYixTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBSSxPQUFPO0lBQ1gsUUFBUSxPQUFPO0lBQ2YsUUFBUSxVQUFVO0lBQ2xCLFFBQVEsbUJBQW1CLEVBQUUsa0JBQWtCO0lBQy9DLEtBQUssQ0FBQztJQUNOOztJQzNCQSxTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDekIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ2xELENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO0lBQzdDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBR0MsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBR0EsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHQSxDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsSUFBSSxNQUFNLGNBQWMsR0FBR0osQ0FBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLElBQUksTUFBTSxZQUFZLEdBQUdBLENBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxJQUFJLE1BQU0sa0JBQWtCLEdBQUdBLENBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RCxJQUFJSyxDQUFlLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEYsSUFBSUEsQ0FBZSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlFLElBQUlBLENBQWUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2hHO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUlBLENBQWUsQ0FBQyxNQUFNO0lBQzFCLFFBQVEsSUFBSSxPQUFPLEVBQUU7SUFDckIsWUFBWSxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEUsWUFBWSxNQUFNLENBQUMsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ2pELFlBQVksTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUNyRCxZQUFZLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDL0MsWUFBWSxjQUFjLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDO0lBQ2pELFlBQVksWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNyQyxZQUFZLGtCQUFrQixDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztJQUM3QyxTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQixJQUFJLE1BQU0sbUJBQW1CLEdBQUdQLEdBQVcsQ0FBQyxNQUFNO0lBQ2xELFFBQVEsSUFBSSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNqRCxRQUFRLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDN0MsUUFBUSxJQUFJLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7SUFDekQsUUFBUSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsZUFBZTtJQUMxRCxZQUFZLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLFFBQVEsSUFBSSxlQUFlLElBQUksU0FBUztJQUN4QyxZQUFZLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDOUIsUUFBUSxPQUFPO0lBQ2YsWUFBWSxHQUFHLFlBQVksQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztJQUMvRSxTQUFTLENBQUM7SUFDVixLQUFLLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLE1BQU0sMkJBQTJCLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsS0FBSztJQUN2RixRQUFRLFNBQVMsS0FBSyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVDLFFBQVEsSUFBSSxTQUFTLEVBQUUsaUJBQWlCLEtBQUssa0JBQWtCO0lBQy9ELFlBQVksT0FBTyxRQUFRLENBQUM7SUFDNUIsUUFBUSxPQUFPLE9BQU8sQ0FBQztJQUN2QixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLDRCQUE0QixHQUFHQSxHQUFXLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEtBQUs7SUFDeEYsUUFBUSxTQUFTLEtBQUssbUJBQW1CLEVBQUUsQ0FBQztJQUM1QyxRQUFRLElBQUksa0JBQWtCLElBQUksUUFBUSxFQUFFO0lBQzVDLFlBQVksSUFBSSxTQUFTLEVBQUUsaUJBQWlCLElBQUksWUFBWTtJQUM1RCxnQkFBZ0IsT0FBTyxZQUFZLENBQUM7SUFDcEMsWUFBWSxPQUFPLFVBQVUsQ0FBQztJQUM5QixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVksSUFBSSxTQUFTLEVBQUUsZ0JBQWdCLElBQUksVUFBVTtJQUN6RCxnQkFBZ0IsT0FBTyxVQUFVLENBQUM7SUFDbEMsWUFBWSxPQUFPLFlBQVksQ0FBQztJQUNoQyxTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQUksTUFBTSxrQkFBa0IsR0FBR0EsR0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLFNBQVMsS0FBSztJQUN2RSxRQUFRLFNBQVMsS0FBSyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVDLFFBQVEsSUFBSSxTQUFTLEVBQUU7SUFDdkIsWUFBWSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBQ3pGO0lBQ0EsWUFBWSxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsWUFBWSxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLFlBQVksSUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLFlBQVksSUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixZQUFZLElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRixZQUFZLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEY7SUFDQTtJQUNBLFlBQVksU0FBUyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUs7SUFDaEYsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtJQUM5QyxZQUFZLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEtBQUssS0FBSztJQUNwRSxnQkFBZ0IsT0FBTyxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxLQUFLO0lBQ2pELGdCQUFnQixPQUFPLFFBQVEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7SUFDL0MsWUFBWSxNQUFNLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzRCxZQUFZLE1BQU0sRUFBRSxHQUFHLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELFlBQVksTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsWUFBWSxNQUFNLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RCxZQUFZLElBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hJLFlBQVksSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEksWUFBWSxJQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoSSxZQUFZLElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ILFlBQVksSUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0gsWUFBWSxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvSCxZQUFZLE9BQU87SUFDbkIsZ0JBQWdCLGdCQUFnQjtJQUNoQyxnQkFBZ0IsZ0JBQWdCO0lBQ2hDLGdCQUFnQixnQkFBZ0I7SUFDaEMsZ0JBQWdCLGVBQWU7SUFDL0IsZ0JBQWdCLGVBQWU7SUFDL0IsZ0JBQWdCLGVBQWU7SUFDL0IsZ0JBQWdCLGlCQUFpQjtJQUNqQyxnQkFBZ0IsaUJBQWlCO0lBQ2pDLGdCQUFnQixpQkFBaUI7SUFDakMsZ0JBQWdCLGdCQUFnQjtJQUNoQyxnQkFBZ0IsZ0JBQWdCO0lBQ2hDLGdCQUFnQixnQkFBZ0I7SUFDaEMsYUFBYSxDQUFDO0lBQ2QsU0FBUztJQUNULFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsS0FBSyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQUksT0FBTztJQUNYLFFBQVEsbUJBQW1CO0lBQzNCLFFBQVEsa0JBQWtCO0lBQzFCLFFBQVEsMkJBQTJCO0lBQ25DLFFBQVEsNEJBQTRCO0lBQ3BDLEtBQUssQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRztJQUN4QixJQUFJLGVBQWUsRUFBRSxLQUFLO0lBQzFCLElBQUksY0FBYyxFQUFFLEtBQUs7SUFDekIsSUFBSSxpQkFBaUIsRUFBRSxZQUFZO0lBQ25DLElBQUksZ0JBQWdCLEVBQUUsVUFBVTtJQUNoQyxJQUFJLFVBQVUsRUFBRSxPQUFPO0lBQ3ZCLElBQUksU0FBUyxFQUFFLFFBQVE7SUFDdkIsSUFBSSxrQkFBa0IsRUFBRSxLQUFLO0lBQzdCLElBQUksa0JBQWtCLEVBQUUsS0FBSztJQUM3QixDQUFDLENBQUM7SUFDRixNQUFNLGVBQWUsR0FBRztJQUN4QixJQUFJLEdBQUcsZUFBZTtJQUN0QixJQUFJLGVBQWUsRUFBRSxLQUFLO0lBQzFCLENBQUMsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHO0lBQ3RCLElBQUksZUFBZSxFQUFFLEtBQUs7SUFDMUIsSUFBSSxjQUFjLEVBQUUsS0FBSztJQUN6QixJQUFJLGlCQUFpQixFQUFFLFVBQVU7SUFDakMsSUFBSSxnQkFBZ0IsRUFBRSxZQUFZO0lBQ2xDLElBQUksVUFBVSxFQUFFLFFBQVE7SUFDeEIsSUFBSSxTQUFTLEVBQUUsT0FBTztJQUN0QixJQUFJLGtCQUFrQixFQUFFLEtBQUs7SUFDN0IsSUFBSSxrQkFBa0IsRUFBRSxLQUFLO0lBQzdCLENBQUMsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHO0lBQ3RCLElBQUksR0FBRyxhQUFhO0lBQ3BCLElBQUksZUFBZSxFQUFFLEtBQUs7SUFDMUIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQzNDLE1BQU0sYUFBYSxHQUFHLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUMzQyxNQUFNLGFBQWEsR0FBRztJQUN0QixJQUFJLEdBQUcsYUFBYTtJQUNwQixJQUFJLGNBQWMsRUFBRSxLQUFLO0lBQ3pCLENBQUMsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHO0lBQ3RCLElBQUksR0FBRyxhQUFhO0lBQ3BCLElBQUksY0FBYyxFQUFFLEtBQUs7SUFDekIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUc7SUFDdEIsSUFBSSxHQUFHLGFBQWE7SUFDcEIsSUFBSSxlQUFlLEVBQUUsS0FBSztJQUMxQixJQUFJLGtCQUFrQixFQUFFLEtBQUs7SUFDN0IsSUFBSSxrQkFBa0IsRUFBRSxLQUFLO0lBQzdCLENBQUMsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHO0lBQ3RCLElBQUksR0FBRyxhQUFhO0lBQ3BCLElBQUksZUFBZSxFQUFFLEtBQUs7SUFDMUIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxZQUFZLEdBQUc7SUFDckIsSUFBSSxHQUFHLEVBQUUsZUFBZTtJQUN4QixJQUFJLEdBQUcsRUFBRSxlQUFlO0lBQ3hCLENBQUMsQ0FBQztJQUNGLE1BQU0sVUFBVSxHQUFHO0lBQ25CLElBQUksR0FBRyxFQUFFLGFBQWE7SUFDdEIsSUFBSSxHQUFHLEVBQUUsYUFBYTtJQUN0QixDQUFDLENBQUM7SUFDRixNQUFNLFVBQVUsR0FBRztJQUNuQixJQUFJLEdBQUcsRUFBRSxhQUFhO0lBQ3RCLElBQUksR0FBRyxFQUFFLGFBQWE7SUFDdEIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBQUc7SUFDbkIsSUFBSSxHQUFHLEVBQUUsYUFBYTtJQUN0QixJQUFJLEdBQUcsRUFBRSxhQUFhO0lBQ3RCLENBQUMsQ0FBQztJQUNGLE1BQU0sVUFBVSxHQUFHO0lBQ25CLElBQUksR0FBRyxFQUFFLGFBQWE7SUFDdEIsSUFBSSxHQUFHLEVBQUUsYUFBYTtJQUN0QixDQUFDLENBQUM7SUFDRixNQUFNLFlBQVksR0FBRztJQUNyQixJQUFJLGVBQWUsRUFBRSxZQUFZO0lBQ2pDLElBQUksYUFBYSxFQUFFLFVBQVU7SUFDN0IsSUFBSSxhQUFhLEVBQUUsVUFBVTtJQUM3QixJQUFJLGFBQWEsRUFBRSxVQUFVO0lBQzdCLElBQUksYUFBYSxFQUFFLFVBQVU7SUFDN0IsQ0FBQzs7SUMvTUQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBR1EsQ0FBZSxFQUFFO0lBQ2xFLElBQUksTUFBTSxVQUFVLEdBQUdOLENBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxJQUFJLE1BQU0sT0FBTyxHQUFHLE1BQU07SUFDMUIsUUFBUSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDekIsUUFBUSxJQUFJLE1BQU0sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO0lBQzFDLFlBQVksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0lBQ3pGLGdCQUFnQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RCxvQkFBb0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hGLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxRQUFRLFVBQVUsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLFFBQVEsT0FBTyxHQUFHLENBQUM7SUFDbkIsS0FBSyxDQUFDO0lBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFCOztJQ3hCQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUNoRCxJQUFJLE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUVPLENBQXFCLENBQUMsQ0FBQztJQUM1RDs7SUNUTyxTQUFTLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUU7SUFDaEUsSUFBSSxNQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRyxJQUFJLE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRDtJQUNBO0lBQ0EsSUFBSSxNQUFNLFlBQVksR0FBR1AsQ0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLElBQUksTUFBTSxhQUFhLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzVDO0lBQ0E7SUFDQTtJQUNBLElBQUlHLENBQVMsQ0FBQyxNQUFNO0lBQ3BCLFFBQVEsSUFBSSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDbkMsUUFBUSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxRQUFRLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtJQUM3QixZQUFZLFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsWUFBWSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELFlBQVksT0FBTyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxNQUFNLGNBQWMsR0FBR0wsR0FBVyxDQUFDLE1BQU07SUFDN0MsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLElBQUksTUFBTSxnQkFBZ0IsR0FBR0EsR0FBVyxDQUFDLE1BQU07SUFDL0MsUUFBUSxNQUFNLE9BQU8sR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUNyQyxRQUFRLE9BQU8sT0FBTyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDaEYsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxPQUFPLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDaEQ7O0lDekJBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsZUFBZSxHQUFHO0lBQ2xDLElBQUksT0FBTyxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQzVDO0lBQ0EsUUFBUSxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakU7SUFDQSxRQUFRLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELFFBQVEsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsUUFBUSxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRDtJQUNBLFFBQVEsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0Q7SUFDQTtJQUNBO0lBQ0EsUUFBUSxNQUFNLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakg7SUFDQTtJQUNBLFFBQVEsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNHO0lBQ0EsUUFBUSxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsUUFBUSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckU7SUFDQSxRQUFRLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0YsUUFBUSxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RDtJQUNBO0lBQ0E7SUFDQSxRQUFRLE1BQU0sZ0JBQWdCLEdBQUdBLEdBQVcsQ0FBQyxNQUFNO0lBQ25ELFlBQVksTUFBTSx1QkFBdUIsR0FBRywwQkFBMEIsRUFBRSxDQUFDO0lBQ3pFLFlBQVksSUFBSSx1QkFBdUI7SUFDdkMsZ0JBQWdCLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDaEUsWUFBWSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFDakU7SUFDQTtJQUNBO0lBQ0EsUUFBUSxVQUFVLENBQUM7SUFDbkIsWUFBWSxPQUFPLEVBQUUsUUFBUSxJQUFJLElBQUk7SUFDckMsWUFBWSxRQUFRLEVBQUUsZ0JBQWdCO0lBQ3RDLFlBQVksWUFBWSxFQUFFLHVCQUF1QjtJQUNqRCxTQUFTLENBQUMsQ0FBQztJQUNYO0lBQ0E7SUFDQSxRQUFRLGVBQWUsQ0FBQyxNQUFNO0lBQzlCO0lBQ0EsWUFBWSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUkscUJBQXFCLElBQUksSUFBSSxFQUFFO0lBQ2xFLGdCQUFnQixzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzlELGdCQUFnQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxhQUFhO0lBQ2IsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUM3QztJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsU0FBUyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUU7SUFDdEQsWUFBWSxJQUFJLHFCQUFxQixJQUFJLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQy9EO0lBQ0EsWUFBWSxJQUFJLDJCQUEyQixHQUFHLE1BQU07SUFDcEQ7SUFDQSxnQkFBZ0IsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDO0lBQ0E7SUFDQTtJQUNBLGdCQUFnQixNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxnQkFBZ0IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZHLGdCQUFnQixNQUFNLFNBQVMsR0FBRyxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RDtJQUNBLGdCQUFnQixJQUFJLE1BQU0sQ0FBQztJQUMzQixnQkFBZ0IsSUFBSTtJQUNwQixvQkFBb0IsTUFBTSxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQzVDLG9CQUFvQixJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7SUFDN0M7SUFDQTtJQUNBLHdCQUF3QixNQUFNLEVBQUUsQ0FBQztJQUNqQyx3QkFBd0IsU0FBUyxFQUFFLENBQUM7SUFDcEMsd0JBQXdCLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyx3QkFBd0IsT0FBTztJQUMvQixxQkFBcUI7SUFDckIsb0JBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxFQUFFLEVBQUU7SUFDM0I7SUFDQTtJQUNBLG9CQUFvQixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsb0JBQW9CLFNBQVMsRUFBRSxDQUFDO0lBQ2hDLG9CQUFvQixjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0Msb0JBQW9CLE9BQU87SUFDM0IsaUJBQWlCO0lBQ2pCO0lBQ0EsZ0JBQWdCLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxnQkFBZ0IsT0FBTyxDQUFDLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RyxhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtJQUN4QztJQUNBLGdCQUFnQixJQUFJLFdBQVcsR0FBRywyQkFBMkIsRUFBRSxDQUFDO0lBQ2hFLGdCQUFnQixJQUFJLFdBQVcsSUFBSSxTQUFTLEVBQUUsQ0FHN0I7SUFDakIscUJBQXFCO0lBQ3JCLG9CQUFvQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsb0JBQW9CLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxvQkFBb0IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCO0lBQ0E7SUFDQSxnQkFBZ0Isd0JBQXdCLENBQUMsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLENBQUM7SUFDM0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLElBQUksR0FBRyxHQUFHO0lBQ2xCLFlBQVksY0FBYztJQUMxQixZQUFZLGlCQUFpQjtJQUM3QixZQUFZLFNBQVMsRUFBRSxRQUFRO0lBQy9CLFlBQVksY0FBYztJQUMxQixZQUFZLFVBQVU7SUFDdEIsWUFBWSxPQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQztJQUN0QyxZQUFZLFFBQVE7SUFDcEIsWUFBWSxLQUFLO0lBQ2pCLFlBQVksV0FBVztJQUN2QixZQUFZLHFCQUFxQixFQUFFLGdCQUFnQjtJQUNuRCxZQUFZLFlBQVk7SUFDeEIsWUFBWSxXQUFXO0lBQ3ZCLFlBQVksV0FBVyxFQUFFLFdBQVcsR0FBRyxZQUFZO0lBQ25ELFNBQVMsQ0FBQztJQUNWLFFBQVEsT0FBTyxHQUFHLENBQUM7SUFDbkIsUUFBUSxTQUFTLGNBQWMsQ0FBQyxZQUFZLEVBQUU7SUFDOUMsWUFBWSxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUU7SUFDOUUsZ0JBQWdCLElBQUksWUFBWSxJQUFJLElBQUk7SUFDeEMsb0JBQW9CLE9BQU87SUFDM0I7SUFDQTtJQUNBO0lBQ0EsZ0JBQWdCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxnQkFBZ0IsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsZ0JBQWdCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxnQkFBZ0IsTUFBTSxZQUFZLEdBQUcsTUFBTSxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pFLGdCQUFnQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7SUFDdEMsb0JBQW9CLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CLDBCQUEwQixDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQztJQUNsRSxpQkFBaUI7SUFDakIsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLE9BQU8sWUFBWSxJQUFJLElBQUksR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ2xFLFNBQVM7SUFDVCxLQUFLLENBQUM7SUFDTjs7SUMxS0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLEVBQUU7SUFDNUwsSUFBSSxtQkFBbUIsS0FBSyxRQUFRLENBQUM7SUFDckMsSUFBSSxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQzlDO0lBQ0E7SUFDQSxJQUFJLGVBQWUsQ0FBQyxNQUFNO0lBQzFCLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0lBQzVCLFlBQVksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBQzNCLGdCQUFnQixlQUFlLEVBQUUsQ0FBQztJQUNsQyxhQUFhO0lBQ2IsaUJBQWlCLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO0lBQzVELGdCQUFnQixjQUFjLEVBQUUsQ0FBQztJQUNqQyxhQUFhO0lBQ2IsU0FBUztJQUNULEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxNQUFNLHdCQUF3QixHQUFHQSxHQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQ2hFLFFBQVEsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQ2hFLFFBQVEsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hEO0lBQ0E7SUFDQSxRQUFRLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLElBQUksT0FBTyxDQUFDLENBQUM7SUFDbkgsUUFBUSxNQUFNLDZCQUE2QixHQUFHLENBQUMsS0FBSyxLQUFLO0lBQ3pELFlBQVksTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUs7SUFDckM7SUFDQSxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPO0lBQzFDLG9CQUFvQixPQUFPO0lBQzNCLGdCQUE0QixRQUFRLEdBQUc7SUFDdkMsZ0JBQWdCLE1BQU0sSUFBSSxHQUFHLG1CQUFtQixFQUFFLENBQUM7SUFDbkQsZ0JBQWdCLElBQUkscUJBQXFCLElBQUksbUJBQW1CLElBQUksT0FBTyxJQUFJLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxDQUFDO0lBQ2hILGdCQUFnQixJQUFJLHNCQUFzQixJQUFJLG1CQUFtQixJQUFJLFFBQVEsSUFBSSxtQkFBbUIsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUNsSCxnQkFBZ0IsUUFBUSxDQUFDLENBQUMsR0FBRztJQUM3QixvQkFBb0IsS0FBSyxTQUFTLEVBQUU7SUFDcEMsd0JBQXdCLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxnQkFBZ0IsS0FBSyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUN4SCx3QkFBd0IsTUFBTSxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRSxnQkFBZ0IsS0FBSyxVQUFVLEdBQUcscUJBQXFCLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ2pLLHdCQUF3QixJQUFJLGdCQUFnQixFQUFFO0lBQzlDLDRCQUE0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUU7SUFDNUQsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3Qiw0QkFBNEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9DLDRCQUE0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQseUJBQXlCO0lBQ3pCLHdCQUF3QixNQUFNO0lBQzlCLHFCQUFxQjtJQUNyQixvQkFBb0IsS0FBSyxXQUFXLEVBQUU7SUFDdEMsd0JBQXdCLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxnQkFBZ0IsS0FBSyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUN4SCx3QkFBd0IsTUFBTSxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRSxnQkFBZ0IsS0FBSyxVQUFVLEdBQUcscUJBQXFCLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ2pLLHdCQUF3QixJQUFJLGdCQUFnQixFQUFFO0lBQzlDLDRCQUE0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUU7SUFDNUQsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3Qiw0QkFBNEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9DLDRCQUE0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQseUJBQXlCO0lBQ3pCLHdCQUF3QixNQUFNO0lBQzlCLHFCQUFxQjtJQUNyQixvQkFBb0IsS0FBSyxXQUFXLEVBQUU7SUFDdEMsd0JBQXdCLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxpQkFBaUIsS0FBSyxZQUFZLEdBQUcsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztJQUMzSCx3QkFBd0IsTUFBTSxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRSxpQkFBaUIsS0FBSyxZQUFZLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3BLLHdCQUF3QixJQUFJLGdCQUFnQixFQUFFO0lBQzlDLDRCQUE0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUU7SUFDNUQsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3Qiw0QkFBNEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9DLDRCQUE0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQseUJBQXlCO0lBQ3pCLHdCQUF3QixNQUFNO0lBQzlCLHFCQUFxQjtJQUNyQixvQkFBb0IsS0FBSyxZQUFZLEVBQUU7SUFDdkMsd0JBQXdCLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRSxpQkFBaUIsS0FBSyxZQUFZLEdBQUcsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztJQUMzSCx3QkFBd0IsTUFBTSxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRSxpQkFBaUIsS0FBSyxZQUFZLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3BLLHdCQUF3QixJQUFJLGdCQUFnQixFQUFFO0lBQzlDLDRCQUE0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUU7SUFDNUQsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZ0NBQWdDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELDZCQUE2QjtJQUM3Qiw0QkFBNEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9DLDRCQUE0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQseUJBQXlCO0lBQ3pCLHdCQUF3QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0Msd0JBQXdCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1Qyx3QkFBd0IsTUFBTTtJQUM5QixxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssTUFBTTtJQUMvQix3QkFBd0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFO0lBQ2pELDRCQUE0QixlQUFlLEVBQUUsQ0FBQztJQUM5Qyw0QkFBNEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9DLDRCQUE0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQseUJBQXlCO0lBQ3pCLHdCQUF3QixNQUFNO0lBQzlCLG9CQUFvQixLQUFLLEtBQUs7SUFDOUIsd0JBQXdCLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtJQUNqRCw0QkFBNEIsY0FBYyxFQUFFLENBQUM7SUFDN0MsNEJBQTRCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQyw0QkFBNEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2hELHlCQUF5QjtJQUN6Qix3QkFBd0IsTUFBTTtJQUM5QixpQkFBaUI7SUFDakIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxPQUFPLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RSxTQUFTLENBQUM7SUFDVixRQUFRLE9BQU87SUFDZixZQUFZLDZCQUE2QjtJQUN6QyxTQUFTLENBQUM7SUFDVixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDekksSUFBSSxPQUFPO0lBQ1gsUUFBUSx3QkFBd0I7SUFDaEMsS0FBSyxDQUFDO0lBQ04sQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLHNCQUFzQixDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUMzRjtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hGLElBQUksVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixJQUFJLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDakssSUFBSSxNQUFNLG1CQUFtQixHQUFHRSxDQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEU7SUFDQTtJQUNBO0lBQ0EsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEU7SUFDQTtJQUNBO0lBQ0EsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsSUFBSSxlQUFlLENBQUMsTUFBTTtJQUMxQixRQUFRLElBQUksaUJBQWlCLEtBQUssSUFBSSxFQUFFO0lBQ3hDLFlBQVksbUJBQW1CLENBQUMsU0FBUyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDdEYsWUFBWSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQUksTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLO0lBQ3ZELFFBQVEsSUFBSSxPQUFPLENBQUM7SUFDcEIsUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQ3JFO0lBQ0E7SUFDQSxZQUFZLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsWUFBWSxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RSxZQUFZLElBQUksUUFBUTtJQUN4QixnQkFBZ0IsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdEO0lBQ0EsZ0JBQWdCLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRixZQUFZLE9BQU8sT0FBTyxDQUFDO0lBQzNCLFNBQVM7SUFDVCxRQUFRLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN6QixLQUFLLENBQUMsQ0FBQztJQUNQO0lBQ0EsSUFBSUcsQ0FBUyxDQUFDLE1BQU07SUFDcEIsUUFBUSxJQUFJLGdCQUFnQixJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7SUFDcEUsWUFBWSxJQUFJLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0csWUFBWSxJQUFJLG9CQUFvQixHQUFHLENBQUMsRUFBRTtJQUMxQztJQUNBO0lBQ0EsZ0JBQWdCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxnQkFBZ0IsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUM7SUFDbEQsZ0JBQWdCLElBQUksb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFDaEU7SUFDQSxnQkFBZ0IsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDbkQsZ0JBQWdCLElBQUkscUJBQXFCLEdBQUcsb0JBQW9CLENBQUM7SUFDakUsZ0JBQWdCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLO0lBQzdDLG9CQUFvQixJQUFJLHNCQUFzQixJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsc0JBQXNCLEVBQUU7SUFDdEYsd0JBQXdCLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUNuRCx3QkFBd0Isb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELHFCQUFxQjtJQUNyQixvQkFBb0IsSUFBSSxDQUFDLHVCQUF1QixJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsdUJBQXVCLEtBQUssQ0FBQyxJQUFJLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDM0gsd0JBQXdCLHVCQUF1QixHQUFHLENBQUMsQ0FBQztJQUNwRCx3QkFBd0IscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQztJQUNsQixnQkFBZ0IsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7SUFDN0MsZ0JBQWdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3BHLG9CQUFvQixhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hGLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztJQUN6QyxnQkFBZ0IsT0FBTyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3BJLG9CQUFvQixhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hGLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksdUJBQXVCLEtBQUssSUFBSTtJQUNwRCxvQkFBb0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9GLHFCQUFxQixJQUFJLHNCQUFzQixLQUFLLElBQUk7SUFDeEQsb0JBQW9CLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RixhQUFhO0lBQ2IsU0FBUztJQUNULEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJLE1BQU0sMkJBQTJCLEdBQUdMLEdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUs7SUFDeEUsUUFBUUssQ0FBUyxDQUFDLE1BQU07SUFDeEIsWUFBWSxJQUFJLElBQUksRUFBRTtJQUN0QjtJQUNBO0lBQ0E7SUFDQSxnQkFBZ0IsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUYsZ0JBQWdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELGdCQUFnQixJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7SUFDckMsb0JBQW9CLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUcsaUJBQWlCO0lBQ2pCLGdCQUFnQixPQUFPLE1BQU07SUFDN0I7SUFDQTtJQUNBLG9CQUFvQixJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRyxvQkFBb0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckQsb0JBQW9CLElBQUksV0FBVyxJQUFJLENBQUMsRUFBRTtJQUMxQyx3QkFBd0IsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UscUJBQXFCO0lBQ3JCLGlCQUFpQixDQUFDO0lBQ2xCLGFBQWE7SUFDYixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25CLFFBQVEsTUFBTSxnQ0FBZ0MsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUN6RSxZQUFZLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUNwRSxZQUFZLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RFLFlBQVksTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsS0FBSztJQUM1QyxnQkFBZ0Isb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLGdCQUFnQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSztJQUNyQyxnQkFBZ0IsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFLENBQUM7SUFDakQsZ0JBQWdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDaEM7SUFDQSxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPO0lBQzFDLG9CQUFvQixPQUFPO0lBQzNCLGdCQUFnQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ3pEO0lBQ0Esb0JBQW9CLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9HLG9CQUFvQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsb0JBQW9CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QyxvQkFBb0IsT0FBTztJQUMzQixpQkFBaUI7SUFDakI7SUFDQTtJQUNBO0lBQ0E7SUFDQSxnQkFBZ0IsTUFBTSxjQUFjLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEYsZ0JBQWdCLElBQUksY0FBYyxFQUFFO0lBQ3BDLG9CQUFvQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBSW5FO0lBQ3JCLHlCQUF5QjtJQUN6Qix3QkFBd0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNDLHdCQUF3QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUM7SUFDQTtJQUNBO0lBQ0Esd0JBQXdCLElBQUksQ0FBQyxTQUFTO0lBQ3RDLDRCQUE0QixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFlBQVksT0FBTyxjQUFjLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckgsU0FBUyxDQUFDO0lBQ1YsUUFBUSxPQUFPO0lBQ2YsWUFBWSxnQ0FBZ0M7SUFDNUMsU0FBUyxDQUFDO0lBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxPQUFPO0lBQ1gsUUFBUSwyQkFBMkI7SUFDbkMsUUFBUSxnQkFBZ0I7SUFDeEIsUUFBUSxnQkFBZ0I7SUFDeEIsS0FBSyxDQUFDO0lBQ04sQ0FBQztJQUNEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDeEQsSUFBSSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDdkIsSUFBSSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyQyxJQUFJLE9BQU8sVUFBVSxJQUFJLFNBQVMsRUFBRTtJQUNwQyxRQUFRLElBQUksU0FBUyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsS0FBSyxDQUFDLENBQUM7SUFDdEQsUUFBUSxJQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsUUFBUSxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRTtJQUNsQyxZQUFZLFVBQVUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLFNBQVM7SUFDVCxhQUFhLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO0lBQ3ZDLFlBQVksU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDdEMsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZLE9BQU8sU0FBUyxDQUFDO0lBQzdCLFNBQVM7SUFDVCxLQUFLO0lBQ0wsSUFBSSxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUMzQjs7SUMvVkE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxlQUFlLEdBQUc7SUFDbEM7SUFDQTtJQUNBO0lBQ0EsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBSSxNQUFNLENBQUMscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEcsSUFBSSxNQUFNLHdCQUF3QixHQUFHLG9CQUFvQixHQUFHLHFCQUFxQixDQUFDO0lBQ2xGLElBQUksTUFBTSxlQUFlLEdBQUdILENBQU0sQ0FBQyxFQUFFLGlGQUFpRixDQUFDO0lBQ3ZILElBQUksTUFBTSxlQUFlLEdBQUdBLENBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLE1BQU0sVUFBVSxHQUFHQSxDQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLElBQUksTUFBTSxnQkFBZ0IsR0FBR0EsQ0FBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvQyxJQUFJLE1BQU0sY0FBYyxHQUFHQSxDQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzdDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLE1BQU0sY0FBYyxHQUFHQSxDQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLElBQUksTUFBTSxhQUFhLEdBQUdGLEdBQVcsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLElBQUksTUFBTSxlQUFlLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLElBQUksS0FBSztJQUNsRCxRQUFRLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFDNUUsUUFBUSxlQUFlLENBQUMsTUFBTTtJQUM5QixZQUFZLElBQUksS0FBSyxHQUFHLHVCQUF1QixFQUFFLENBQUM7SUFDbEQsWUFBWSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELFlBQVksZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEQsWUFBWSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxZQUFZLE9BQU8sTUFBTTtJQUN6QixnQkFBZ0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELGdCQUFnQixlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN0RCxnQkFBZ0Isd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsYUFBYSxDQUFDO0lBQ2QsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekI7SUFDQSxRQUFRLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLEtBQUs7SUFDM0MsWUFBWSxJQUFJLE9BQU8sRUFBRTtJQUN6QixnQkFBZ0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLGdCQUFnQixjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsZ0JBQWdCLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxFQUFFO0lBQ3RFLG9CQUFvQixjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RyxpQkFBaUI7SUFDakIsZ0JBQWdCLG1CQUFtQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLGdCQUFnQixlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDbEUsZ0JBQWdCLE9BQU8sTUFBTTtJQUM3QixvQkFBb0IsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsb0JBQW9CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMzRSx3QkFBd0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEgscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qix3QkFBd0IsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSx3QkFBd0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELHdCQUF3QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDNUQsNEJBQTRCLE9BQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTO0lBQzlJLGdDQUFnQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDcEUseUJBQXlCO0lBQ3pCLHdCQUF3QixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQztJQUNsQixhQUFhO0lBQ2IsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxlQUFlLENBQUMsTUFBTTtJQUM5QixZQUFZLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUztJQUNoRSxnQkFBZ0IsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ2xFLFNBQVMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsUUFBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0lBQ2pGLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLElBQUksT0FBTztJQUNYLFFBQVEsZUFBZTtJQUN2QixRQUFRLFVBQVUsRUFBRSx3QkFBd0I7SUFDNUMsUUFBUSxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDaEQsUUFBUSxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDaEQsUUFBUSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO0lBQ2xELFFBQVEsb0JBQW9CO0lBQzVCLFFBQVEscUJBQXFCO0lBQzdCLFFBQVEsYUFBYTtJQUNyQixRQUFRLGNBQWMsRUFBRSxjQUFjLENBQUMsT0FBTztJQUM5QyxLQUFLLENBQUM7SUFDTixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLFlBQVksQ0FBQyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDckgsSUFBSSxTQUFTLEtBQUssZUFBZSxDQUFDO0lBQ2xDLElBQUksSUFBSSxVQUFVO0lBQ2xCLFFBQVEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLGNBQWMsSUFBSSxRQUFRLElBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3BGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxTQUFTLENBQUMsTUFBTTtJQUNwQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxJQUFJLE9BQU8sY0FBYyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDNUg7SUFDQSxZQUFZLElBQUksVUFBVSxFQUFFO0lBQzVCO0lBQ0E7SUFDQSxnQkFBZ0IsSUFBSSxVQUFVLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUNwRCxnQkFBZ0IsSUFBSSxTQUFTLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUNuRCxnQkFBZ0IsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7SUFDL0osb0JBQW9CLEVBQUUsVUFBVSxDQUFDO0lBQ2pDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQztJQUNoQyxpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO0lBQzFFLG9CQUFvQixjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQy9DLGlCQUFpQjtJQUNqQixxQkFBcUIsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ3JHLG9CQUFvQixjQUFjLEdBQUcsVUFBVSxDQUFDO0lBQ2hELGlCQUFpQjtJQUNqQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtJQUM1QyxZQUFZLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0lBQzdELGdCQUFnQixJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRTtJQUNwRCxvQkFBb0IsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWSxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLO0lBQ25FLGdCQUFnQixJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRTtJQUNwRCxvQkFBb0IsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRCxpQkFBaUI7SUFDakIsYUFBYSxDQUFDLENBQUM7SUFDZixTQUFTO0lBQ1QsS0FBSyxDQUFDLENBQUM7SUFDUDs7SUN2TEE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxjQUFjLEdBQUc7SUFDakMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUdNLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJLE9BQU9KLENBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQzs7SUNMQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRTtJQUMvRSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxJQUFJLE1BQU0sc0JBQXNCLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQTZCLGVBQWUsQ0FBQyxhQUFhLEVBQUU7SUFDNUQsSUFBeUJBLENBQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUMzQztJQUNBLElBQUksTUFBTSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDMUc7SUFDQTtJQUNBO0lBQ0EsSUFBSSxZQUFZLENBQUM7SUFDakIsUUFBUSxjQUFjLEVBQUUsYUFBYTtJQUNyQyxRQUFRLGVBQWU7SUFDdkIsUUFBUSxVQUFVLEVBQUUsSUFBSTtJQUN4QixRQUFRLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEtBQUs7SUFDM0MsWUFBWSxJQUFJLEtBQUssSUFBSSxJQUFJO0lBQzdCLGdCQUFnQixlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlELFNBQVM7SUFDVCxRQUFRLFlBQVksRUFBRSxDQUFDLEtBQUssTUFBTSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDO0lBQ2hGLEtBQUssQ0FBQyxDQUFDO0lBQ1AsSUFBc0JGLEdBQVcsQ0FBQyxNQUFNO0lBQ3hDLFFBQVEsSUFBSSxhQUFhLElBQUksSUFBSTtJQUNqQyxZQUFZLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUU7SUFDeEIsSUFBSSxNQUFNLHNCQUFzQixHQUFHQSxHQUFXLENBQUMsQ0FBQyxJQUFJLEtBQUs7SUFDekQsUUFBUSxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxRQUFRLE1BQU0sZ0JBQWdCLEdBQUdBLEdBQVcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRixRQUFRLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxRQUFRLElBQUksT0FBTyxHQUFHO0lBQ3RCLFlBQVksR0FBRyxJQUFJO0lBQ25CLFlBQVksZ0JBQWdCO0lBQzVCLFlBQVksV0FBVyxFQUFFQSxHQUFXLENBQUMsQ0FBQyxRQUFRLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNsRixZQUFZLFdBQVc7SUFDdkIsU0FBUyxDQUFDO0lBQ1YsUUFBUSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RixRQUFRSyxDQUFTLENBQUMsTUFBTTtJQUN4QixZQUFZLElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTtJQUNyQyxnQkFBZ0IsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLENBQUM7SUFDM0QsZ0JBQWdCLE1BQU0sbUJBQW1CLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUNyRSxnQkFBZ0IsSUFBSSxtQkFBbUIsRUFBRSxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7SUFDakUsb0JBQW9CLHFCQUFxQixDQUFDLE1BQU07SUFDaEQsd0JBQXdCLGNBQWMsQ0FBQyxNQUFNO0lBQzdDLDRCQUE0QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQixxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNDLFFBQVEsU0FBUyw2QkFBNkIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFO0lBQ3ZFLFlBQVksSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO0lBQ2xDLGdCQUFnQixJQUFJLFFBQVE7SUFDNUIsb0JBQW9CLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakM7SUFDQSxvQkFBb0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLGFBQWE7SUFDYixZQUFZLE9BQU8sY0FBYyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RCxTQUFTO0lBQ1QsUUFBUSxTQUFTLDJCQUEyQixDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUU7SUFDckUsWUFBWSxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7SUFDbEMsZ0JBQWdCLElBQUksUUFBUTtJQUM1QixvQkFBb0IsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQztJQUNBLG9CQUFvQixRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEMsYUFBYTtJQUNiLFlBQVksT0FBTyxjQUFjLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0UsU0FBUztJQUVULFFBQVEsT0FBTztJQUNmLFlBQVksMkJBQTJCO0lBQ3ZDLFlBQVksNkJBQTZCO0lBQ3pDLFlBQVksUUFBUTtJQUNwQixTQUFTLENBQUM7SUFDVixLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksT0FBTztJQUNYLFFBQVEsc0JBQXNCO0lBQzlCLFFBQVEsVUFBVTtJQUNsQixRQUFRLGVBQWU7SUFDdkIsUUFBUSxnQkFBZ0I7SUFDeEIsUUFBUSxZQUFZLEVBQUUsZ0JBQWdCO0lBQ3RDLFFBQVEsR0FBRyxJQUFJO0lBQ2YsS0FBSyxDQUFDO0lBQ047O0lDekdBLFNBQVNLLFVBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFO0lBQ2xDLFNBQVMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUU7SUFDMUcsSUFBSSxTQUFTLE1BQU0sR0FBRztJQUN0QixRQUFRLElBQUksZUFBZSxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBQ3BDLFlBQVksT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUM7SUFDbEcsZ0JBQWdCLE1BQU0sR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLFlBQVksT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDakQsU0FBUztJQUNULGFBQWEsSUFBSSxlQUFlLEtBQUssQ0FBQyxFQUFFO0lBQ3hDLFlBQVksT0FBTyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTTtJQUNqSCxnQkFBZ0IsTUFBTSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsWUFBWSxPQUFPLE1BQU0sSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDcEUsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZLE9BQU8sT0FBTyxDQUFDO0lBQzNCLFNBQVM7SUFDVCxLQUFLO0lBQ0wsSUFBSSxRQUFRLE1BQU0sRUFBRSxFQUFFO0lBQ3RCLENBQUM7SUFDTSxTQUFTLGlCQUFpQixDQUFDLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxFQUFFO0lBQ3pGLElBQUksWUFBWSxLQUFLQSxVQUFRLENBQUM7SUFDOUIsSUFBSSxjQUFjLEtBQUtBLFVBQVEsQ0FBQztJQUNoQyxJQUFJLE1BQU0sdUJBQXVCLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMzRTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxNQUFNLGtCQUFrQixHQUFHVixHQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4TCxJQUFJLE1BQU0saUJBQWlCLEdBQUdBLEdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3TSxJQUFJLE1BQU0saUJBQWlCLEdBQUdBLEdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeFAsSUFBSSxNQUFNLGlCQUFpQixHQUFHQSxHQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzlRO0lBQ0EsSUFBSSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ3BTLElBQUksTUFBTSxFQUFFLHdCQUF3QixFQUFFLDJCQUEyQixFQUFFLEdBQUcsbUJBQW1CLENBQUM7SUFDMUYsUUFBUSxlQUFlLEVBQUUsV0FBVztJQUNwQyxRQUFRLEtBQUssRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELFFBQVEsZUFBZSxFQUFFLGtCQUFrQjtJQUMzQyxRQUFRLGNBQWMsRUFBRSxpQkFBaUI7SUFDekMsUUFBUSxjQUFjLEVBQUUsaUJBQWlCO0lBQ3pDLFFBQVEsY0FBYyxFQUFFLGlCQUFpQjtJQUN6QyxRQUFRLG1CQUFtQixFQUFFLE9BQU87SUFDcEMsS0FBSyxDQUFDLENBQUM7SUFDUDtJQUNBO0lBQ0EsSUFBSSxZQUFZLENBQUM7SUFDakIsUUFBUSxjQUFjLEVBQUUsVUFBVTtJQUNsQyxRQUFRLGVBQWUsRUFBRSxXQUFXO0lBQ3BDLFFBQVEsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO0lBQzlGLFFBQVEsWUFBWSxFQUFFLENBQUMsS0FBSyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLElBQUksQ0FBQztJQUNqRixRQUFRLFNBQVMsRUFBRSxTQUFTO0lBQzVCLEtBQUssQ0FBQyxDQUFDO0lBQ1A7SUFDQTtJQUNBO0lBQ0EsSUFBSSxNQUFNLHVCQUF1QixHQUFHQSxHQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUs7SUFDeEQsUUFBUSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsMkJBQTJCLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbEssUUFBUSxNQUFNLDRCQUE0QixHQUFHQSxHQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLO0lBQ2hHLFlBQVksMkJBQTJCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekYsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDcEYsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1g7SUFDQSxJQUFJLE1BQU0sb0JBQW9CLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUUsS0FBSztJQUN2RjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQzdDO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25GO0lBQ0E7SUFDQSxRQUFRLElBQUksYUFBYSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQztJQUN0RTtJQUNBLFFBQVEsTUFBTSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLGlCQUFpQixDQUFDO0lBQzFJLFlBQVksbUJBQW1CLEVBQUVBLEdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3ZILFlBQVksYUFBYSxFQUFFLGFBQWE7SUFDeEMsU0FBUyxDQUFDLENBQUM7SUFDWDtJQUNBLFFBQVEsTUFBTSxxQkFBcUIsR0FBR0EsR0FBVyxDQUFDLE1BQU07SUFDeEQsWUFBWSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVVLFVBQVEsRUFBRUEsVUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RixZQUFZLFdBQVcsRUFBRSxDQUFDO0lBQzFCLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNmLFFBQVEsTUFBTSxvQkFBb0IsR0FBR1YsR0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFVSxVQUFRLEVBQUVBLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdE0sUUFBUSxNQUFNLG9CQUFvQixHQUFHVixHQUFXLENBQUMsTUFBTTtJQUN2RCxZQUFZLGlCQUFpQixDQUFDLENBQUMsSUFBSTtJQUNuQyxnQkFBZ0IsT0FBTyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUVVLFVBQVEsRUFBRUEsVUFBUSxDQUFDLENBQUM7SUFDMUYsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLFdBQVcsRUFBRSxDQUFDO0lBQzFCLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNmLFFBQVEsTUFBTSxvQkFBb0IsR0FBR1YsR0FBVyxDQUFDLE1BQU07SUFDdkQsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7SUFDbkMsZ0JBQWdCLE9BQU8sa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRVUsVUFBUSxFQUFFQSxVQUFRLENBQUMsQ0FBQztJQUN6RixhQUFhLENBQUMsQ0FBQztJQUNmLFlBQVksV0FBVyxFQUFFLENBQUM7SUFDMUIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsUUFBUSxNQUFNLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQztJQUMvRixZQUFZLGVBQWUsRUFBRSxZQUFZO0lBQ3pDLFlBQVksbUJBQW1CLEVBQUUsUUFBUTtJQUN6QyxZQUFZLEtBQUssRUFBRSxhQUFhLElBQUksQ0FBQztJQUNyQyxZQUFZLGtCQUFrQixFQUFFLElBQUk7SUFDcEMsWUFBWSxlQUFlLEVBQUUscUJBQXFCO0lBQ2xELFlBQVksY0FBYyxFQUFFLG9CQUFvQjtJQUNoRCxZQUFZLGNBQWMsRUFBRSxvQkFBb0I7SUFDaEQsWUFBWSxjQUFjLEVBQUUsb0JBQW9CO0lBQ2hELFNBQVMsQ0FBQyxDQUFDO0lBQ1g7SUFDQSxRQUFRLFlBQVksQ0FBQztJQUNyQixZQUFZLGNBQWMsRUFBRSxhQUFhO0lBQ3pDLFlBQVksZUFBZSxFQUFFLFlBQVk7SUFDekMsWUFBWSxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsY0FBYyxLQUFLO0lBQ3pELGdCQUFnQixJQUFJLFNBQVMsSUFBSSxJQUFJO0lBQ3JDLG9CQUFvQixZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pFLGFBQWE7SUFDYixZQUFZLFlBQVksRUFBRSxDQUFDLFNBQVMsTUFBTSxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDO0lBQ3pGLFlBQVksU0FBUztJQUNyQixTQUFTLENBQUMsQ0FBQztJQUNYO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxTQUFTLENBQUMsTUFBTTtJQUN4QixZQUFZLElBQUksYUFBYSxFQUFFO0lBQy9CLGdCQUFnQixJQUFJLFNBQVMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25ELGdCQUFnQixPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRTtJQUMxRSxvQkFBb0IsRUFBRSxTQUFTLENBQUM7SUFDaEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7SUFDbkMsb0JBQW9CLFNBQVMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25ELG9CQUFvQixPQUFPLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDL0Ysd0JBQXdCLEVBQUUsU0FBUyxDQUFDO0lBQ3BDLHFCQUFxQjtJQUNyQixvQkFBb0IsSUFBSSxTQUFTLElBQUksWUFBWSxDQUFDLE1BQU07SUFDeEQsd0JBQXdCLFNBQVMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZELGlCQUFpQjtJQUNqQixnQkFBZ0IsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEVBQUU7SUFDbkQsb0JBQW9CLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELGFBQWE7SUFDYixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzVCLFFBQVEsTUFBTSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxDQUFDO0lBQzNFLFlBQVksS0FBSyxFQUFFLFFBQVE7SUFDM0IsWUFBWSxnQkFBZ0I7SUFDNUIsWUFBWSxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDOUMsWUFBWSxNQUFNO0lBQ2xCLFlBQVksR0FBRyxJQUFJO0lBQ25CLFNBQVMsQ0FBQyxDQUFDO0lBQ1gsUUFBUSxNQUFNLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsR0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0SCxRQUFRLE1BQU0seUJBQXlCLEdBQUdWLEdBQVcsQ0FBQyxDQUFDLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5TixRQUFRLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxRQUFRLE1BQU0scUJBQXFCLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLElBQUksS0FBSztJQUM1RCxZQUFZLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELFlBQVksTUFBTSxFQUFFLDJCQUEyQixFQUFFLEdBQUcscUJBQXFCLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3BHLFlBQVksTUFBTSxFQUFFLDZCQUE2QixFQUFFLGlDQUFpQyxFQUFFLEdBQUcsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUg7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsWUFBWSxNQUFNLE9BQU8sR0FBR0EsR0FBVyxDQUFDLE1BQU07SUFDOUMsZ0JBQWdCLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLGdCQUFnQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0IsWUFBWSxNQUFNLDBCQUEwQixHQUFHQSxHQUFXLENBQUMsQ0FBQyxLQUFLLEtBQUssMkJBQTJCLENBQUMsaUNBQWlDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDak4sWUFBWSxPQUFPLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFLENBQUM7SUFDNUQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLFFBQVEsT0FBTztJQUNmLFlBQVksYUFBYTtJQUN6QixZQUFZLHlCQUF5QjtJQUNyQyxZQUFZLHFCQUFxQjtJQUNqQyxZQUFZLFNBQVM7SUFDckIsWUFBWSxhQUFhO0lBQ3pCLFlBQVksWUFBWSxFQUFFLFlBQVk7SUFDdEMsU0FBUyxDQUFDO0lBQ1YsS0FBSyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25GLElBQUksT0FBTztJQUNYLFFBQVEsb0JBQW9CO0lBQzVCLFFBQVEsdUJBQXVCO0lBQy9CLFFBQVEsUUFBUSxFQUFFLFVBQVU7SUFDNUIsUUFBUSxTQUFTLEVBQUUsYUFBYTtJQUNoQyxRQUFRLFFBQVEsRUFBRSxVQUFVO0lBQzVCLFFBQVEsV0FBVztJQUNuQixLQUFLLENBQUM7SUFDTjs7SUNwTk8sU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ2hEO0lBQ0EsSUFBSSxNQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLElBQUksTUFBTSxXQUFXLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzNDLElBQUlLLENBQVMsQ0FBQyxNQUFNO0lBQ3BCLFFBQVEsSUFBSSxXQUFXLEVBQUU7SUFDekI7SUFDQTtJQUNBLFlBQVksTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUs7SUFDeEMsZ0JBQWdCLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxnQkFBZ0IsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxNQUFNLEdBQUcscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsWUFBWSxPQUFPLE1BQU0sb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsU0FBUztJQUNULEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEI7O0lDZE8sU0FBUyxZQUFZLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3JHLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRixJQUFJLE1BQU0saUJBQWlCLEdBQUdMLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztJQUNqRCxRQUFRLE1BQU0sR0FBRyxHQUFHRSxDQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsUUFBUSxNQUFNLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFDaEUsUUFBUSxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSztJQUNuQztJQUNBLFlBQVksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLFlBQVksSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFO0lBQ2hDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxhQUFhLElBQUksS0FBSyxDQUFDLENBQUM7SUFDeEUsZ0JBQWdCLElBQUksU0FBUztJQUM3QixvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLGdCQUFnQixJQUFJLENBQUMsRUFBRSxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RyxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxnQkFBZ0IsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRTtJQUN4RCxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUyxDQUFDO0lBQ1YsUUFBUSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSztJQUNqQyxZQUFZLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQixZQUFZLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixZQUFZLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRTtJQUNoQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsSUFBSSxNQUFNLEVBQUU7SUFDekQsb0JBQW9CLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixvQkFBb0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTLENBQUM7SUFDVixRQUFRLE9BQU8sY0FBYyxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDbkQsWUFBWSxTQUFTLEVBQUUsSUFBSTtJQUMzQixZQUFZLFdBQVc7SUFDdkIsWUFBWSxTQUFTO0lBQ3JCLFlBQVksR0FBRztJQUNmLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHO0lBQ0E7SUFDQSxJQUFJLElBQUksR0FBRyxHQUFHO0lBQ2QsUUFBUSxpQkFBaUI7SUFDekIsUUFBUSxRQUFRO0lBQ2hCLFFBQVEsV0FBVztJQUNuQjtJQUNBO0lBQ0EsUUFBUSxjQUFjO0lBQ3RCO0lBQ0E7SUFDQTtJQUNBLFFBQVEsaUJBQWlCO0lBQ3pCLEtBQUssQ0FBQztJQUNOLElBQUksT0FBTyxHQUFHLENBQUM7SUFDZjs7SUNuRE8sTUFBTSxrQkFBa0IsU0FBUyxLQUFLLENBQUM7SUFDOUMsSUFBSSxRQUFRLENBQUM7SUFDYixJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDaEMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSSxpREFBaUQsQ0FBQyxDQUFDO0lBQ2xGLFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDakMsUUFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEMsS0FBSztJQUNMLENBQUM7SUFDRDtJQUNPLFNBQVMsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDekMsSUFBSSxNQUFNLENBQUMscUJBQXFCLEVBQUUsd0JBQXdCLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0UsSUFBSSxNQUFNLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakYsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRDtJQUNBO0lBQ0EsSUFBSSxNQUFNLGVBQWUsR0FBR0EsQ0FBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksTUFBTSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0YsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsSUFBSSxNQUFNLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQ3hFO0lBQ0E7SUFDQSxJQUFJRyxDQUFTLENBQUMsTUFBTTtJQUNwQixRQUFRLE1BQU0sbUJBQW1CLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUM3RCxRQUFRLE1BQU0sWUFBWSxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQy9DLFFBQVEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO0lBQzlCLFlBQVksSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxZQUFZLEVBQUU7SUFDMUQsZ0JBQWdCLHNCQUFzQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELGFBQWE7SUFDYixTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSUEsQ0FBUyxDQUFDLE1BQU07SUFDcEIsUUFBUSxJQUFJLG1CQUFtQixJQUFJLENBQUMsRUFBRTtJQUN0QyxZQUFZLE1BQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRixZQUFZLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUs7SUFDMUMsZ0JBQWdCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtJQUNuQyxvQkFBb0IsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDcEQsb0JBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxvQkFBb0IsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsaUJBQWlCO0lBQ2pCO0lBQ0EsZ0JBQWdCLE1BQU0sbUJBQW1CLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUNyRSxnQkFBZ0IsTUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDdkQsZ0JBQWdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksWUFBWSxFQUFFO0lBQzlEO0lBQ0E7SUFDQSxvQkFBb0Isc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULEtBQUssRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEtBQUs7SUFDckM7SUFDQTtJQUNBLFFBQVEsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUs7SUFDbkMsWUFBWSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsWUFBWSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7SUFDaEM7SUFDQSxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELGdCQUFnQixNQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQy9DLGdCQUFnQixNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzdDLGdCQUFnQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRTtJQUM5RCxvQkFBb0IsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDaEQsb0JBQW9CLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUMzQyx3QkFBd0IsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxxQkFBcUI7SUFDckIseUJBQXlCLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUM5Qyx3QkFBd0IsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQix3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxnQkFBZ0IsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsYUFBYTtJQUNiLFNBQVMsQ0FBQztJQUNWO0lBQ0EsUUFBUSxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSztJQUNuQyxZQUFZLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQixZQUFZLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLFlBQVksMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsU0FBUyxDQUFDO0lBQ1Y7SUFDQSxRQUFRLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLO0lBQ2xDLFlBQVksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLFNBQVMsQ0FBQztJQUNWO0lBQ0EsUUFBUSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSztJQUM5QixZQUFZLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQixZQUFZLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLFlBQVksMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsWUFBWSxJQUFJLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzFDLFlBQVksTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLFlBQVksTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUU7SUFDMUQsZ0JBQWdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzVDLGdCQUFnQixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7SUFDdkMsb0JBQW9CLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEksaUJBQWlCO0lBQ2pCLHFCQUFxQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDMUMsb0JBQW9CLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsRCxvQkFBb0IsSUFBSSxJQUFJLEVBQUU7SUFDOUIsd0JBQXdCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxLQUFLO0lBQzFFLDRCQUE0QixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQzFELDRCQUE0QixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLO0lBQ25ELGdDQUFnQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxnQ0FBZ0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMzRCxnQ0FBZ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDbEosNkJBQTZCLENBQUM7SUFDOUIsNEJBQTRCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSCw0QkFBNEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pILDRCQUE0QixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQzVCLHdCQUF3QixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO0lBQzdFLGdCQUFnQixlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsZ0JBQWdCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxnQkFBZ0IsT0FBTztJQUN2QixvQkFBb0IsT0FBTyxFQUFFLFFBQVE7SUFDckMsb0JBQW9CLEtBQUssRUFBRSxRQUFRO0lBQ25DLGlCQUFpQixDQUFDO0lBQ2xCLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUk7SUFDM0IsZ0JBQWdCLFNBQVM7SUFDekIsZ0JBQWdCLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxnQkFBZ0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLGdCQUFnQixPQUFPLElBQUksQ0FBQztJQUM1QixhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLFNBQVMsQ0FBQztJQUNWLFFBQVEsT0FBTyxjQUFjLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekcsS0FBSyxDQUFDO0lBQ04sSUFBSSxPQUFPO0lBQ1gsUUFBUSxpQkFBaUI7SUFDekIsUUFBUSxxQkFBcUI7SUFDN0IsUUFBUSx1QkFBdUI7SUFDL0IsUUFBUSxZQUFZO0lBQ3BCLFFBQVEsY0FBYztJQUN0QixRQUFRLFNBQVM7SUFDakIsUUFBUSxPQUFPO0lBQ2YsUUFBUSxVQUFVO0lBQ2xCLEtBQUssQ0FBQztJQUNOOztJQzNKQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFO0lBQ3hELElBQUksTUFBTSxRQUFRLEdBQUdILENBQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQztJQUMvRSxJQUFJLE1BQU0sa0JBQWtCLEdBQUdBLENBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRDtJQUNBLElBQUksTUFBTSxlQUFlLEdBQUdGLEdBQVcsQ0FBQyxNQUFNO0lBQzlDLFFBQVEsSUFBSSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0lBQ3pELFFBQVEsSUFBSSxlQUFlO0lBQzNCLFlBQVksZUFBZSxFQUFFLENBQUM7SUFDOUIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxNQUFNLFFBQVEsR0FBR0EsR0FBVyxDQUFDLE1BQU0sUUFBUSxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEc7SUFDQSxJQUFJLE1BQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBRyxLQUFLO0lBQ2hELFFBQVEsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDbEYsUUFBUSxNQUFNLEdBQUcsR0FBRyxHQUFHLFlBQVksUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDakUsUUFBUSxJQUFJLEdBQUcsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO0lBQ3RDLFlBQVksZUFBZSxFQUFFLENBQUM7SUFDOUIsWUFBWSxrQkFBa0IsQ0FBQyxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztJQUNqRixZQUFZLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ25DLFNBQVM7SUFDVCxLQUFLLENBQUMsQ0FBQztJQUNQO0lBQ0EsSUFBSU8sQ0FBZSxDQUFDLE1BQU07SUFDMUIsUUFBUSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7SUFDeEMsWUFBWSxrQkFBa0IsQ0FBQyxPQUFPLElBQUksUUFBUSxHQUFHLFlBQVksRUFBRSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztJQUM1RixZQUFZLFFBQVEsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQzVDLFNBQVM7SUFDVCxRQUFRLE9BQU8sZUFBZSxDQUFDO0lBQy9CLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFOztJQ1R0QixNQUFNLHFCQUFxQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDeEMsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzVDLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN4QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDekIsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0lBQ3JCLElBQUksSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtJQUNqQyxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUkscUJBQXFCO0lBQzNDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RCLEtBR0s7SUFDTCxDQUFDO0lBQ0QsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0lBQ3BCLElBQUksSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNDLElBQUksSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxTQUFTLFdBQVcsR0FBRztJQUN2QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDekIsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxTQUFTLFVBQVUsR0FBRztJQUN0QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUIsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTSxTQUFTLGdCQUFnQixDQUFDLEVBQUUscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsRUFBRTtJQUMvRyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN4RyxJQUFJQSxDQUFlLENBQUMsTUFBTTtJQUMxQixRQUFRLElBQUkscUJBQXFCLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtJQUM5QyxZQUFZLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0UsWUFBWSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLFlBQVksTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RSxZQUFZLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0UsU0FBUztJQUNUO0lBQ0E7SUFDQSxRQUFRLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELFFBQVEseUJBQXlCLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDNUQsUUFBUSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxRQUFRLE9BQU8sTUFBTTtJQUNyQixZQUFZLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNELFlBQVkseUJBQXlCLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbkUsWUFBWSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxZQUFZLElBQUkscUJBQXFCLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtJQUNsRCxnQkFBZ0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxnQkFBZ0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRSxnQkFBZ0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRSxnQkFBZ0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRCxhQUFhO0lBQ2IsU0FBUyxDQUFDO0lBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4RTs7SUM5Rk8sU0FBUyxXQUFXLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxFQUFFO0lBQzFILElBQUksTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUN4RSxJQUFJLGdCQUFnQixDQUFDO0lBQ3JCLFFBQVEscUJBQXFCLEVBQUUsSUFBSSxJQUFJO0lBQ3ZDLFlBQVksU0FBUztJQUNyQixZQUFZLGdCQUFnQixHQUFHLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ25FLFlBQVkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRCxTQUFTO0lBQ1QsUUFBUSx5QkFBeUIsRUFBRSxJQUFJLElBQUk7SUFDM0MsWUFBWSxTQUFTO0lBQ3JCLFlBQVksb0JBQW9CLEdBQUcsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdkUsWUFBWSx5QkFBeUIsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25FLFNBQVM7SUFDVCxLQUFLLENBQUMsQ0FBQztJQUNQLElBQUksTUFBTSxnQkFBZ0IsR0FBR1AsR0FBVyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDakgsSUFBSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3JEOztJQ2hCTyxTQUFTLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUNwRDtJQUNBLElBQUksTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsSUFBSSxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsSUFBSUssQ0FBUyxDQUFDLE1BQU07SUFDcEIsUUFBUSxJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxRQUFRLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQztJQUNyQyxRQUFRLElBQUksUUFBUSxJQUFJLElBQUk7SUFDNUIsWUFBWSxPQUFPO0lBQ25CO0lBQ0E7SUFDQSxRQUFRLE1BQU0sa0JBQWtCLEdBQUcsTUFBTTtJQUN6QyxZQUFZLGNBQWMsRUFBRSxDQUFDO0lBQzdCLFlBQVksTUFBTSxlQUFlLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDbEQsWUFBWSxJQUFJLGVBQWUsSUFBSSxhQUFhLEVBQUU7SUFDbEQsZ0JBQWdCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxnQkFBZ0IsSUFBSSxlQUFlLElBQUksSUFBSTtJQUMzQyxvQkFBb0IsTUFBTSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDOUYsYUFBYTtJQUNiLFNBQVMsQ0FBQztJQUNWLFFBQVEsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELFFBQVEsT0FBTyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWDs7SUNlQSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFO0lBQ2xDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsaUJBQWlCLENBQUMsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUU7SUFDaEksSUFBSSxZQUFZLEtBQUssUUFBUSxDQUFDO0lBQzlCLElBQUksY0FBYyxLQUFLLFFBQVEsQ0FBQztJQUNoQyxJQUFJLGFBQWEsS0FBSyxRQUFRLENBQUM7SUFDL0I7SUFDQTtJQUNBLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUN4SCxJQUFJLE1BQU0sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzNKLElBQUksTUFBTSxlQUFlLEdBQUdMLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RSxJQUFJLE1BQU0sZUFBZSxHQUFHQSxHQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRixJQUFJLE1BQU0sY0FBYyxHQUFHQSxHQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILElBQUksTUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkosSUFBSSxNQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuSixJQUFJLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxLQUFLLEtBQUs7SUFDNUMsUUFBUSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxJQUFJLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSwyQkFBMkIsRUFBRSxHQUFHLHNCQUFzQixDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuTCxJQUFJLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxHQUFHLG1CQUFtQixDQUFDLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2TixJQUFJLE1BQU0sc0JBQXNCLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLElBQUksS0FBSztJQUN6RCxRQUFRLE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRSxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZGLFFBQVEsTUFBTSxFQUFFLDZCQUE2QixFQUFFLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakYsUUFBUSxNQUFNLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEgsUUFBUSxNQUFNLDJCQUEyQixHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFO0lBQ3BFLFlBQVksT0FBTyxjQUFjLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsSyxTQUFTLENBQUM7SUFDVixRQUFRLE1BQU0sVUFBVSxHQUFHQSxHQUFXLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLFFBQVEsT0FBTztJQUNmLFlBQVksMkJBQTJCO0lBQ3ZDLFlBQVksNkJBQTZCLEVBQUUsNkJBQTZCO0lBQ3hFLFlBQVksUUFBUTtJQUNwQixTQUFTLENBQUM7SUFDVixLQUFLLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLElBQUksT0FBTztJQUNYLFFBQVEsc0JBQXNCO0lBQzlCLFFBQVEsZ0JBQWdCO0lBQ3hCLFFBQVEsZ0JBQWdCO0lBQ3hCLFFBQVEsYUFBYTtJQUNyQixRQUFRLGdCQUFnQjtJQUN4QixRQUFRLGVBQWU7SUFDdkIsUUFBUSxnQkFBZ0I7SUFDeEIsUUFBUSxlQUFlO0lBQ3ZCLFFBQVEsY0FBYztJQUN0QixRQUFRLGNBQWM7SUFDdEIsUUFBUSxlQUFlO0lBQ3ZCLFFBQVEsY0FBYztJQUN0QixRQUFRLFlBQVk7SUFDcEIsUUFBUSxHQUFHLElBQUk7SUFDZixLQUFLLENBQUM7SUFDTjs7SUNoR0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLGtCQUFrQixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsa0RBQWtELEVBQUUsK0JBQStCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFbE8sSUFBSSxPQUFPLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxHQUFHLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztBQTZDNUs7SUFDQSxJQUFJLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDckMsRUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztBQUNGO0lBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2pELEVBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDakQsQ0FBQyxDQUFDO0FBQ0Y7SUFDQSxJQUFJLG9CQUFvQixHQUFHLFNBQVMsb0JBQW9CLENBQUMsSUFBSSxFQUFFO0lBQy9ELEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUU7SUFDekcsSUFBSSxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxDQUFDO0lBQ0wsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztBQThDRjtJQUNBLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7SUFDckQsRUFBRSxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7SUFDdEQsSUFBSSxPQUFPLElBQUksQ0FBQztJQUNoQixHQUFHO0FBQ0g7SUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDNUUsRUFBRSxJQUFJLGdCQUFnQixHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUNyRTtJQUNBLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDLEVBQUU7SUFDL0QsSUFBSSxPQUFPLElBQUksQ0FBQztJQUNoQixHQUFHO0FBQ0g7SUFDQSxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxLQUFLLE1BQU0sRUFBRTtJQUNoRCxJQUFJLE9BQU8sSUFBSSxFQUFFO0lBQ2pCLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO0lBQ3JELFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsT0FBTztBQUNQO0lBQ0EsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxLQUFLO0lBQ0wsR0FBRyxNQUFNLElBQUksWUFBWSxLQUFLLGVBQWUsRUFBRTtJQUMvQyxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFO0lBQzVELFFBQVEsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEtBQUs7SUFDM0MsUUFBUSxNQUFNLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDO0FBQzlDO0lBQ0EsSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQztJQUN2QyxHQUFHO0FBQ0g7SUFDQSxFQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBQ0Y7SUFDQTtBQUNBO0FBQ0E7SUFDQSxJQUFJLHNCQUFzQixHQUFHLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFO0lBQ25FLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7SUFDOUcsSUFBSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3hDO0lBQ0EsSUFBSSxPQUFPLFVBQVUsRUFBRTtJQUN2QixNQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sS0FBSyxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtJQUNwRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0QsVUFBVSxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRDtJQUNBLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtJQUMxQyxZQUFZLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN0QyxjQUFjLE9BQU8sS0FBSyxDQUFDO0lBQzNCLGFBQWE7SUFDYjtBQUNBO0FBQ0E7SUFDQSxZQUFZLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLFdBQVc7SUFDWCxTQUFTO0FBQ1Q7QUFDQTtJQUNBLFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsT0FBTztBQUNQO0lBQ0EsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUM1QyxLQUFLO0lBQ0wsR0FBRztJQUNIO0FBQ0E7QUFDQTtJQUNBLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDRjtJQUNBLElBQUksK0JBQStCLEdBQUcsU0FBUywrQkFBK0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzlGLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDbEYsRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUM5RCxJQUFJLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLEdBQUc7QUFDSDtJQUNBLEVBQUUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFxREY7SUFDQSxJQUFJLDBCQUEwQixrQkFBa0Isa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5RjtJQUNBLElBQUksV0FBVyxHQUFHLFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDdEQsRUFBRSxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMxQjtJQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtJQUNiLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hDLEdBQUc7QUFDSDtJQUNBLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSwwQkFBMEIsQ0FBQyxLQUFLLEtBQUssRUFBRTtJQUNoRSxJQUFJLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLEdBQUc7QUFDSDtJQUNBLEVBQUUsT0FBTywrQkFBK0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7Ozs7OztJQ25RRCxDQUFDLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUM1QixFQUFpRSxPQUFPLEVBQUUsQ0FFN0QsQ0FBQztJQUNkLENBQUMsQ0FBQ1csY0FBSSxHQUFHLFlBQVksQ0FDckI7SUFDQSxFQUFFLElBQUksWUFBWSxHQUFHLFlBQVksRUFBRSxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUN0akI7SUFDQSxFQUFFLFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxZQUFZLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUMzSjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQSxFQUFFLENBQUMsWUFBWTtJQUNmO0lBQ0EsSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUN2QyxNQUFNLE9BQU87SUFDYixLQUFLO0FBQ0w7SUFDQTtJQUNBO0lBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUN0QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0FBQ25GO0lBQ0E7SUFDQSxJQUFJLElBQUksd0JBQXdCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeFA7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsSUFBSSxJQUFJLFNBQVMsR0FBRyxZQUFZO0lBQ2hDO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsTUFBTSxTQUFTLFNBQVMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFO0lBQ3BELFFBQVEsZUFBZSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6QztJQUNBO0lBQ0EsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztBQUMxQztJQUNBO0lBQ0EsUUFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUN4QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdkM7SUFDQTtJQUNBLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUMzRDtJQUNBLFVBQVUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hGLFNBQVMsTUFBTTtJQUNmLFVBQVUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUN2QyxTQUFTO0lBQ1QsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUQ7SUFDQTtJQUNBLFFBQVEsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4RDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNFLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RyxPQUFPO0FBQ1A7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQSxNQUFNLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixRQUFRLEdBQUcsRUFBRSxZQUFZO0lBQ3pCLFFBQVEsS0FBSyxFQUFFLFNBQVMsVUFBVSxHQUFHO0lBQ3JDLFVBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0QztJQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0lBQ2pDLFlBQVksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO0lBQ2hELGNBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25GLGFBQWEsTUFBTTtJQUNuQixjQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9ELGFBQWE7SUFDYixXQUFXO0FBQ1g7SUFDQSxVQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUyxFQUFFO0lBQzFELFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25CO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsVUFBVSxJQUFJLENBQUMsU0FBUyxtQkFBbUIsSUFBSSxDQUFDO0lBQ2hELFVBQVUsSUFBSSxDQUFDLFlBQVksbUJBQW1CLElBQUksQ0FBQztJQUNuRCxVQUFVLElBQUksQ0FBQyxhQUFhLG1CQUFtQixJQUFJLENBQUM7SUFDcEQsVUFBVSxJQUFJLENBQUMsYUFBYSxtQkFBbUIsSUFBSSxDQUFDO0lBQ3BELFNBQVM7QUFDVDtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUseUJBQXlCO0FBQ3RDO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLEtBQUssRUFBRSxTQUFTLHVCQUF1QixDQUFDLFNBQVMsRUFBRTtJQUMzRCxVQUFVLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUM1QjtJQUNBLFVBQVUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsSUFBSSxFQUFFO0lBQ3RELFlBQVksT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLFdBQVcsQ0FBQyxDQUFDO0FBQ2I7SUFDQSxVQUFVLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7QUFDckQ7SUFDQSxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUNsRDtJQUNBLFlBQVksSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ2pDO0lBQ0EsWUFBWSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7SUFDakMsWUFBWSxPQUFPLElBQUksRUFBRTtJQUN6QixjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7SUFDakUsZ0JBQWdCLElBQUksNkJBQTZCLElBQUksQ0FBQztJQUN0RCxnQkFBZ0IsTUFBTTtJQUN0QixlQUFlO0lBQ2YsY0FBYyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxhQUFhO0lBQ2IsWUFBWSxJQUFJLElBQUksRUFBRTtJQUN0QixjQUFjLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2pELGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7SUFDakQsWUFBWSxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakM7SUFDQTtJQUNBO0lBQ0EsWUFBWSxJQUFJLGFBQWEsS0FBSyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBQzFELGNBQWMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7QUFDVDtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUsWUFBWTtJQUN6QixRQUFRLEtBQUssRUFBRSxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUU7SUFDekMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUNuRCxZQUFZLE9BQU87SUFDbkIsV0FBVztJQUNYLFVBQVUsSUFBSSxPQUFPLDBCQUEwQixJQUFJLENBQUM7QUFDcEQ7SUFDQTtJQUNBO0lBQ0EsVUFBVSxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDOUUsWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLFdBQVc7QUFDWDtJQUNBLFVBQVUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7SUFDbkcsWUFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLFdBQVc7SUFDWCxTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUsYUFBYTtJQUMxQixRQUFRLEtBQUssRUFBRSxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7SUFDMUMsVUFBVSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUsZUFBZTtJQUM1QixRQUFRLEtBQUssRUFBRSxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDNUMsVUFBVSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsVUFBVSxJQUFJLFNBQVMsRUFBRTtJQUN6QixZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsV0FBVztJQUNYLFNBQVM7QUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxrQkFBa0I7SUFDL0IsUUFBUSxLQUFLLEVBQUUsU0FBUyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7SUFDcEQsVUFBVSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDNUI7SUFDQSxVQUFVLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLElBQUksRUFBRTtJQUN0RCxZQUFZLE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxXQUFXLENBQUMsQ0FBQztJQUNiLFNBQVM7QUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxpQkFBaUI7SUFDOUIsUUFBUSxLQUFLLEVBQUUsU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFO0lBQzlDLFVBQVUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkU7SUFDQTtJQUNBO0lBQ0EsVUFBVSxJQUFJLENBQUMsWUFBWSxFQUFFO0lBQzdCLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELFlBQVksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLFdBQVc7QUFDWDtJQUNBLFVBQVUsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxjQUFjLEVBQUU7SUFDdEUsWUFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkIsU0FBUztBQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUsYUFBYTtJQUMxQixRQUFRLEtBQUssRUFBRSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ25ELFVBQVUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU0sRUFBRTtJQUM1QyxZQUFZLElBQUksTUFBTSwwQkFBMEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5RCxZQUFZLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7SUFDN0M7SUFDQSxjQUFjLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRTtJQUNwRSxnQkFBZ0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QjtJQUNBO0lBQ0EsY0FBYyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUU7SUFDdEUsZ0JBQWdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkIsYUFBYSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7SUFDckQsY0FBYyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO0lBQ3ZEO0lBQ0EsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZUFBZSxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUMzSDtJQUNBO0lBQ0EsZ0JBQWdCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsZ0JBQWdCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLGdCQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFdBQVcsRUFBRTtJQUNsRSxrQkFBa0IsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN6RCxvQkFBb0IsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsbUJBQW1CO0lBQ25CLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkIsU0FBUztJQUNULE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLGNBQWM7SUFDM0IsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDNUIsVUFBVSxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxTQUFTO0FBQ1Q7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUsb0JBQW9CO0lBQ2pDLFFBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0lBQzVCLFVBQVUsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDO0lBQ2hELFNBQVM7QUFDVDtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxpQkFBaUI7SUFDOUIsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFO0lBQ3RDLFVBQVUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztJQUM3QyxTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0EsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDNUIsVUFBVSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2QyxTQUFTO0lBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNWO0lBQ0EsTUFBTSxPQUFPLFNBQVMsQ0FBQztJQUN2QixLQUFLLEVBQUUsQ0FBQztBQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQSxJQUFJLElBQUksU0FBUyxHQUFHLFlBQVk7SUFDaEM7SUFDQTtJQUNBO0lBQ0E7SUFDQSxNQUFNLFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDMUMsUUFBUSxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDO0lBQ0E7SUFDQSxRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQzFCO0lBQ0E7SUFDQSxRQUFRLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7QUFDMUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDaEQ7SUFDQTtJQUNBLFFBQVEsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDbkM7SUFDQTtJQUNBLFFBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDaEM7SUFDQTtJQUNBLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDaEMsT0FBTztBQUNQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0EsTUFBTSxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsUUFBUSxHQUFHLEVBQUUsWUFBWTtJQUN6QixRQUFRLEtBQUssRUFBRSxTQUFTLFVBQVUsR0FBRztJQUNyQyxVQUFVLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ25DO0lBQ0EsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUN2RSxZQUFZLElBQUksT0FBTywwQkFBMEIsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM1RCxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7SUFDOUMsY0FBYyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEUsYUFBYSxNQUFNO0lBQ25CLGNBQWMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxhQUFhO0FBQ2I7SUFDQTtJQUNBLFlBQVksSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7SUFDM0MsY0FBYyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbkMsYUFBYTtJQUNiLFdBQVc7QUFDWDtJQUNBO0lBQ0EsVUFBVSxJQUFJLENBQUMsS0FBSyxtQkFBbUIsSUFBSSxDQUFDO0lBQzVDLFVBQVUsSUFBSSxDQUFDLFdBQVcsbUJBQW1CLElBQUksQ0FBQztJQUNsRCxVQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLFNBQVM7QUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxtQkFBbUI7QUFDaEM7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsS0FBSyxFQUFFLFNBQVMsaUJBQWlCLEdBQUc7SUFDNUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDOUIsWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDcEUsV0FBVztJQUNYLFNBQVM7QUFDVDtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxrQkFBa0I7QUFDL0I7QUFDQTtJQUNBO0lBQ0EsUUFBUSxLQUFLLEVBQUUsU0FBUyxnQkFBZ0IsR0FBRztJQUMzQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUN4RCxZQUFZLE9BQU87SUFDbkIsV0FBVztJQUNYLFVBQVUsSUFBSSxPQUFPLDBCQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pELFVBQVUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxFQUFFO0lBQy9ELFlBQVksZ0NBQWdDLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0lBQzlGLGNBQWMsT0FBTztJQUNyQixhQUFhO0FBQ2I7SUFDQSxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUNsRCxjQUFjLElBQUksQ0FBQyxjQUFjLDhCQUE4QixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2hGLGFBQWE7SUFDYixZQUFZLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELFlBQVksSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7SUFDeEQsY0FBYyxPQUFPLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQzdDLGNBQWMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUMvQyxhQUFhO0lBQ2IsV0FBVyxNQUFNLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUN2RCxZQUFZLElBQUksQ0FBQyxjQUFjLDhCQUE4QixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzlFLFlBQVksT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxXQUFXO0lBQ1gsU0FBUztBQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBLE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLGNBQWM7SUFDM0IsUUFBUSxLQUFLLEVBQUUsU0FBUyxZQUFZLENBQUMsU0FBUyxFQUFFO0lBQ2hELFVBQVUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbkMsVUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBLE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLGlCQUFpQjtJQUM5QixRQUFRLEtBQUssRUFBRSxTQUFTLGVBQWUsQ0FBQyxTQUFTLEVBQUU7SUFDbkQsVUFBVSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuQyxVQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtJQUMzQyxZQUFZLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLFdBQVc7SUFDeEIsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDNUIsVUFBVSxpQ0FBaUMsSUFBSSxDQUFDLFVBQVU7SUFDMUQsWUFBWTtJQUNaLFNBQVM7SUFDVCxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxrQkFBa0I7SUFDL0IsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDNUIsVUFBVSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDO0lBQzlDLFNBQVM7QUFDVDtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxNQUFNO0lBQ25CLFFBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0lBQzVCLFVBQVUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbkMsVUFBVSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUIsU0FBUztBQUNUO0lBQ0E7QUFDQTtJQUNBLE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLGVBQWU7SUFDNUIsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ3BDLFVBQVUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbkMsVUFBVSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUN6QyxTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0EsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDNUIsVUFBVSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuQyxVQUFVLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQyxTQUFTO0lBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNWO0lBQ0EsTUFBTSxPQUFPLFNBQVMsQ0FBQztJQUN2QixLQUFLLEVBQUUsQ0FBQztBQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBLElBQUksSUFBSSxZQUFZLEdBQUcsWUFBWTtJQUNuQztJQUNBO0lBQ0E7SUFDQSxNQUFNLFNBQVMsWUFBWSxDQUFDLFFBQVEsRUFBRTtJQUN0QyxRQUFRLGVBQWUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDNUM7SUFDQSxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7SUFDdkIsVUFBVSxNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7SUFDL0YsU0FBUztBQUNUO0lBQ0E7SUFDQSxRQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ2xDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN2QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDckM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDOUU7SUFDQTtJQUNBLFFBQVEsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEY7SUFDQTtJQUNBLFFBQVEsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtJQUMvQyxVQUFVLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0YsU0FBUyxNQUFNO0lBQ2YsVUFBVSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuQyxTQUFTO0lBQ1QsT0FBTztBQUNQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQSxNQUFNLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxRQUFRLEdBQUcsRUFBRSxVQUFVO0lBQ3ZCLFFBQVEsS0FBSyxFQUFFLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDOUMsVUFBVSxJQUFJLEtBQUssRUFBRTtJQUNyQixZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDNUM7SUFDQSxjQUFjLE9BQU87SUFDckIsYUFBYTtBQUNiO0lBQ0EsWUFBWSxJQUFJLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzQyxZQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRDtJQUNBO0lBQ0EsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3JELGNBQWMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQyxjQUFjLE9BQU8sTUFBTSxFQUFFO0lBQzdCLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO0lBQzVDLGtCQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUMzQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVcsTUFBTTtJQUNqQixZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUM3QztJQUNBLGNBQWMsT0FBTztJQUNyQixhQUFhO0FBQ2I7SUFDQSxZQUFZLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELFlBQVksVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BDLFlBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxZQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsV0FBVztJQUNYLFNBQVM7QUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBLE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLGNBQWM7SUFDM0IsUUFBUSxLQUFLLEVBQUUsU0FBUyxZQUFZLENBQUMsT0FBTyxFQUFFO0lBQzlDLFVBQVUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQSxPQUFPLEVBQUU7SUFDVCxRQUFRLEdBQUcsRUFBRSxVQUFVO0lBQ3ZCLFFBQVEsS0FBSyxFQUFFLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbEQsVUFBVSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxVQUFVLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtJQUN2QztJQUNBLFlBQVksU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxXQUFXLE1BQU07SUFDakIsWUFBWSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELFdBQVc7QUFDWDtJQUNBLFVBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2xEO0lBQ0EsVUFBVSxPQUFPLFNBQVMsQ0FBQztJQUMzQixTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBLE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLFlBQVk7SUFDekIsUUFBUSxLQUFLLEVBQUUsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNwRCxVQUFVLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELFVBQVUsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUMxQixZQUFZLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLFdBQVc7QUFDWDtJQUNBLFVBQVUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxVQUFVLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUNuQyxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsV0FBVztBQUNYO0lBQ0EsVUFBVSxPQUFPLFNBQVMsQ0FBQztJQUMzQixTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBLE9BQU8sRUFBRTtJQUNULFFBQVEsR0FBRyxFQUFFLG1CQUFtQjtJQUNoQyxRQUFRLEtBQUssRUFBRSxTQUFTLGlCQUFpQixHQUFHO0lBQzVDO0lBQ0EsVUFBVSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRixVQUFVLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxZQUFZLEVBQUU7SUFDeEQsWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkI7SUFDQTtJQUNBLFVBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUksU0FBUztBQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0EsT0FBTyxFQUFFO0lBQ1QsUUFBUSxHQUFHLEVBQUUsZ0JBQWdCO0lBQzdCLFFBQVEsS0FBSyxFQUFFLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDdEQsVUFBVSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDM0IsVUFBVSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsTUFBTSxFQUFFO0lBQzVDLFlBQVksUUFBUSxNQUFNLENBQUMsSUFBSTtJQUMvQixjQUFjLEtBQUssV0FBVztJQUM5QixnQkFBZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFO0lBQ3RFLGtCQUFrQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUMzRCxvQkFBb0IsT0FBTztJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsa0JBQWtCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUU7SUFDckQsb0JBQW9CLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsbUJBQW1CO0lBQ25CLGtCQUFrQixhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsWUFBWSxFQUFFO0lBQ2hFLG9CQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixnQkFBZ0IsTUFBTTtJQUN0QixjQUFjLEtBQUssWUFBWTtJQUMvQixnQkFBZ0IsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLE9BQU8sRUFBRTtJQUN0RCxrQkFBa0IsT0FBTztJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksTUFBTSwwQkFBMEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsRSxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxnQkFBZ0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsZ0JBQWdCLE1BQU07SUFDdEIsYUFBYTtJQUNiLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQixTQUFTO0lBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNWO0lBQ0EsTUFBTSxPQUFPLFlBQVksQ0FBQztJQUMxQixLQUFLLEVBQUUsQ0FBQztBQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0EsSUFBSSxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7SUFDbEUsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtJQUM5QyxRQUFRLElBQUksT0FBTywwQkFBMEIsSUFBSSxDQUFDO0lBQ2xELFFBQVEsSUFBSSxRQUFRLEVBQUU7SUFDdEIsVUFBVSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsU0FBUztBQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLElBQUksVUFBVSw4QkFBOEIsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUN2RSxRQUFRLElBQUksVUFBVSxFQUFFO0lBQ3hCLFVBQVUsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFFBQW9CLENBQUMsQ0FBQztJQUM3RCxVQUFVLE9BQU87SUFDakIsU0FBUztBQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO0lBQzVDLFVBQVUsSUFBSSxPQUFPLHFDQUFxQyxPQUFPLENBQUM7SUFDbEU7SUFDQSxVQUFVLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNsRyxVQUFVLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUQsWUFBWSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUE0QixDQUFDLENBQUM7SUFDaEYsV0FBVztJQUNYLFVBQVUsT0FBTztJQUNqQixTQUFTO0FBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxNQUFNLEVBQUU7SUFDekMsVUFBVSxJQUFJLElBQUksa0NBQWtDLE9BQU8sQ0FBQztJQUM1RDtJQUNBLFVBQVUsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEcsVUFBVSxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2hFLFlBQVksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBNEIsQ0FBQyxDQUFDO0lBQ2xGLFdBQVc7SUFDWCxVQUFVLE9BQU87SUFDakIsU0FBUztJQUNULE9BQU87QUFDUDtJQUNBO0lBQ0E7SUFDQSxNQUFNLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDbEMsTUFBTSxPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7SUFDNUIsUUFBUSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBNEIsQ0FBQyxDQUFDO0lBQzlELFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDbEMsT0FBTztJQUNQLEtBQUs7QUFDTDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDakMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMscUNBQXFDLENBQUMsRUFBRTtJQUNyRSxRQUFRLE9BQU87SUFDZixPQUFPO0lBQ1AsTUFBTSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUMsTUFBTSxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxhQUFhLEdBQUcsMkJBQTJCLEdBQUcsc0JBQXNCLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyx3QkFBd0IsR0FBRyxnQ0FBZ0MsR0FBRyw2QkFBNkIsR0FBRyw0QkFBNEIsR0FBRyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDclIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLEtBQUs7QUFDTDtJQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3BEO0lBQ0EsTUFBTSxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwRDtJQUNBLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUN4RCxRQUFRLFVBQVUsRUFBRSxJQUFJO0lBQ3hCO0lBQ0EsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDNUIsVUFBVSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsU0FBUztJQUNUO0lBQ0EsUUFBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFO0lBQ2pDLFVBQVUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsU0FBUztJQUNULE9BQU8sQ0FBQyxDQUFDO0lBQ1QsS0FBSztJQUNMLEdBQUcsR0FBRyxDQUFDO0FBQ1A7SUFDQSxDQUFDLEVBQUU7OztJQ3YwQkg7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxDQUFDLE1BQU07SUFDUCxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDbkI7SUFDQSxJQUFJLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDdkMsSUFBSSxNQUFNLHFCQUFxQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQzNDLElBQUksTUFBTSxhQUFhLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbkMsSUFBSSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3hDLElBQUksTUFBTSxTQUFTLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDL0I7SUFDQSxJQUFJLE1BQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2pDLElBQUksTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN6QyxJQUFJLE1BQU0sY0FBYyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLElBQUksTUFBTSx1QkFBdUIsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxJQUFJLE1BQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2pDLElBQUksTUFBTSx1QkFBdUIsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxJQUFJLE1BQU0sWUFBWSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLElBQUksTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxJQUFJLE1BQU0sb0JBQW9CLENBQUM7SUFDL0IsUUFBUSxXQUFXLEdBQUc7SUFDdEI7SUFDQTtJQUNBO0lBQ0EsWUFBWSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFlBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQjtJQUNBO0lBQ0E7SUFDQTtJQUNBLFlBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakMsU0FBUztJQUNULFFBQVEsVUFBVSxHQUFHO0lBQ3JCO0lBQ0EsWUFBWSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMvRDtJQUNBO0lBQ0E7SUFDQTtJQUNBLFlBQVksTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLFlBQVksUUFBUSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQy9DLFlBQVksUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMzQyxZQUFZLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuRCxTQUFTO0lBQ1QsUUFBUSxJQUFJLEdBQUcsR0FBRztJQUNsQixZQUFZLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELFlBQVksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbkQsU0FBUztJQUNULFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUN0QixZQUFZLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDbEQsZ0JBQWdCLE9BQU87SUFDdkIsYUFBYTtJQUNiO0lBQ0EsWUFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLFlBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLFlBQVksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELFNBQVM7SUFDVCxRQUFRLE1BQU0sQ0FBQyxPQUFPLEVBQUU7SUFDeEIsWUFBWSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0QsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtJQUMxQixnQkFBZ0IsT0FBTyxLQUFLLENBQUM7SUFDN0IsYUFBYTtJQUNiLFlBQVksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRDtJQUNBLFlBQVksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3RELGdCQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLGFBQWE7SUFDYixZQUFZLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLFNBQVM7SUFDVCxRQUFRLEdBQUcsR0FBRztJQUNkLFlBQVksTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsU0FBUztJQUNULFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUNyQixZQUFZLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLFNBQVM7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsRUFBRSxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsRUFBRSxHQUFHLGFBQWEsRUFBRSxFQUFFLEdBQUcscUJBQXFCLEVBQUUsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3hHLFlBQVksTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDNUQsWUFBWSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQ7SUFDQSxZQUFZLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDekIsZ0JBQWdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFELGdCQUFnQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMsZ0JBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekMsZ0JBQWdCLE9BQU87SUFDdkIsYUFBYTtJQUNiLFlBQVksTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pEO0lBQ0EsWUFBWSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO0lBQ2hGLGdCQUFnQixNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0lBQ2xGLGFBQWE7SUFDYjtJQUNBO0lBQ0EsWUFBWSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQzdDLFlBQVksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakU7SUFDQSxZQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO0lBQ3BDLGdCQUFnQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxnQkFBZ0IsT0FBTztJQUN2QixhQUFhO0lBQ2IsWUFBWSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQyxZQUFZLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFDO0lBQ0EsWUFBWSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ3RFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztJQUNwQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7SUFDcEIsYUFBYTtJQUNiO0lBQ0E7SUFDQSxZQUFZLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNqRCxnQkFBZ0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLGFBQWE7SUFDYjtJQUNBLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFO0lBQ0EsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsU0FBUztJQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7SUFDbEQsWUFBWSxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FO0lBQ0E7SUFDQSxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNqRSxnQkFBZ0IsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEMsZ0JBQWdCLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxhQUFhO0lBQ2I7SUFDQTtJQUNBLFlBQVksSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDakQsZ0JBQWdCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLGdCQUFnQixpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsYUFBYTtJQUNiLFlBQVksUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxZQUFZLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO0lBQzdELFlBQVksUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUM1QyxZQUFZLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNyRCxTQUFTO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUFFO0lBQzVDLFlBQVksS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7SUFDNUMsZ0JBQWdCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLGdCQUFnQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQy9DLGdCQUFnQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxnQkFBZ0IsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7SUFDaEQsb0JBQW9CLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzFDLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3hELGFBQWE7SUFDYixTQUFTO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtJQUN4RCxZQUFZLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO0lBQzVDO0lBQ0EsZ0JBQWdCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDbEQsZ0JBQWdCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakQsZ0JBQWdCLE1BQU0sZUFBZSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbEQsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzFELG9CQUFvQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQ7SUFDQSxvQkFBb0IsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMzRSx5QkFBeUIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtJQUN6RCx3QkFBd0IsU0FBUztJQUNqQyxxQkFBcUI7SUFDckI7SUFDQSxvQkFBb0IsSUFBSSxXQUFXLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtJQUN0RCx3QkFBd0IsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHdCQUF3QixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUM3Qyx3QkFBd0IsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCO0lBQ0EsZ0JBQWdCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQztJQUM5RDtJQUNBLGdCQUFnQixNQUFNLEVBQUUsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25GLGdCQUFnQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLGdCQUFnQixJQUFJLGVBQWUsR0FBRyxNQUFNLENBQUM7SUFDN0M7SUFDQTtJQUNBO0lBQ0EsZ0JBQWdCLE1BQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQztJQUN2RCxnQkFBZ0IsSUFBSSxjQUFjLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLEVBQUU7SUFDbkUsb0JBQW9CLGVBQWUsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBQzFELGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDNUMsb0JBQW9CLFNBQVMsRUFBRSxJQUFJO0lBQ25DLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxFQUFFO0lBQ3RDLFlBQVksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELFlBQVksTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDNUQsWUFBWSxLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtJQUM5QztJQUNBO0lBQ0EsZ0JBQWdCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDdkUsZ0JBQWdCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSTtJQUNwRCxvQkFBb0IsT0FBTyxDQUFDLE1BQU07SUFDbEMsb0JBQW9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsZ0JBQWdCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsZ0JBQWdCLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pFO0lBQ0EsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN2RSxvQkFBb0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxvQkFBb0IsSUFBSSxPQUFPLEtBQUssWUFBWSxFQUFFO0lBQ2xELHdCQUF3QixPQUFPLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFDdEYsd0JBQXdCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNuQyx3QkFBd0IsT0FBTztJQUMvQixxQkFBcUI7SUFDckIsb0JBQW9CLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUN0RCx3QkFBd0IsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDOUMsd0JBQXdCLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQjtJQUNBLGdCQUFnQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDckUsb0JBQW9CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0Qsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDdEQsd0JBQXdCLFNBQVM7SUFDakMscUJBQXFCO0lBQ3JCLG9CQUFvQixJQUFJLFdBQVcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQ3RELHdCQUF3QixXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsd0JBQXdCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzdDLHdCQUF3QixlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVDtJQUNBO0lBQ0E7SUFDQSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQ2hDLFlBQVksT0FBTyxLQUFLLEtBQUssMkJBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRixTQUFTO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQy9CLFlBQVksTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQy9CLFlBQVksSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2xDO0lBQ0EsWUFBWSxPQUFPLE9BQU8sSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtJQUN6RDtJQUNBLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUM1RCxvQkFBb0IsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxpQkFBaUI7SUFDakI7SUFDQSxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO0lBQzFDO0lBQ0Esb0JBQW9CLE9BQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7SUFDM0Qsd0JBQXdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMscUJBQXFCO0lBQ3JCO0lBQ0Esb0JBQW9CLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUMsb0JBQW9CLFNBQVM7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQixPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVU7SUFDNUMsb0JBQW9CLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDakMsYUFBYTtJQUNiLFlBQVksT0FBTyxPQUFPLENBQUM7SUFDM0IsU0FBUztJQUNUO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzNDLFlBQVksTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNsRCxZQUFZLElBQUksQ0FBQyxVQUFVLEVBQUU7SUFDN0IsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0lBQzVCLGFBQWE7SUFDYixZQUFZLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDckMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUNsQixZQUFZLElBQUksQ0FBQyxDQUFDO0lBQ2xCLFlBQVksSUFBSSxLQUFLLENBQUM7SUFDdEIsWUFBWSxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUQsWUFBWSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtJQUN4RCxnQkFBZ0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ25ELG9CQUFvQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUNuRCx3QkFBd0IsT0FBTyxFQUFFLElBQUk7SUFDckMscUJBQXFCLENBQUMsQ0FBQztJQUN2QixvQkFBb0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3ZELHdCQUF3QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUNyRSw0QkFBNEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQjtJQUNBLGFBQWE7SUFDYixZQUFZLE9BQU8sTUFBTSxDQUFDO0lBQzFCLFNBQVM7SUFDVCxLQUFLO0lBQ0wsSUFBSSxRQUFRLENBQUMsaUJBQWlCO0lBQzlCLFFBQVEsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUMsR0FBRzs7SUN0VkosTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7SUFDcEQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsa0JBQWtCLENBQUMsTUFBTSxFQUFFO0lBQzNDO0lBQ0E7SUFDQTtJQUNBLElBQUlKLENBQWUsQ0FBQyxNQUFNO0lBQzFCLFFBQVEsSUFBSSxNQUFNLEVBQUU7SUFDcEIsWUFBWSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsWUFBWSxPQUFPLE1BQU07SUFDekIsZ0JBQWdCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxhQUFhLENBQUM7SUFDZCxTQUFTO0lBQ1QsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ00sU0FBUyxhQUFhLEdBQUc7SUFDaEMsSUFBSSxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUNoQzs7SUNyQkEsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLFNBQVMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUU7SUFDN0MsSUFBSSxNQUFNLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQ3hFO0lBQ0EsSUFBSSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RjtJQUNBO0lBQ0EsSUFBSUEsQ0FBZSxDQUFDLE1BQU07SUFDMUIsUUFBUSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7SUFDbkM7SUFDQTtJQUNBLFlBQVksd0JBQXdCLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLG9CQUFvQixFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLFNBQVM7SUFDVCxLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLGtCQUFrQixDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSUEsQ0FBZSxDQUFDLE1BQU07SUFDMUIsUUFBUSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7SUFDbkMsWUFBWSxJQUFJLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNO0lBQ3hEO0lBQ0E7SUFDQSxnQkFBZ0IsY0FBYyxDQUFDLE1BQU07SUFDckMsb0JBQW9CLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3pELG9CQUFvQixTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLE9BQU8sTUFBTTtJQUN6QixnQkFBZ0IsSUFBSSxTQUFTO0lBQzdCLG9CQUFvQixvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxhQUFhLENBQUM7SUFDZCxTQUFTO0lBQ1QsYUFBYSxJQUFJLE9BQU8sRUFBRTtJQUMxQjtJQUNBO0lBQ0EsWUFBWSxJQUFJLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNO0lBQ3hELGdCQUFnQixjQUFjLENBQUMsTUFBTTtJQUNyQyxvQkFBb0Isd0JBQXdCLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDM0Usb0JBQW9CLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixhQUFhLENBQUMsQ0FBQztJQUNmLFlBQVksT0FBTyxNQUFNO0lBQ3pCLGdCQUFnQixJQUFJLFNBQVM7SUFDN0Isb0JBQW9CLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELGFBQWEsQ0FBQztJQUNkLFNBQVM7SUFDVCxLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLE1BQU0saUJBQWlCLElBQUksQ0FBQyxLQUFLLEtBQUs7SUFDMUMsUUFBUSxPQUFPLGNBQWMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLFVBQVUsR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RyxLQUFLLENBQUMsQ0FBQztJQUNQLElBQUksT0FBTztJQUNYLFFBQVEsaUJBQWlCO0lBQ3pCLFFBQVEsT0FBTztJQUNmLFFBQVEsVUFBVTtJQUNsQixLQUFLLENBQUM7SUFDTixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO0lBQzVDLElBQUksTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsSUFBSSxNQUFNLElBQUksWUFBWSxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqTixJQUFJLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuRCxJQUFJLE9BQU8sY0FBYyxDQUFDO0lBQzFCOztJQ3BFQSxNQUFNSyxhQUFXLEdBQUcsK2JBQStiLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9kLE1BQU0sa0JBQWtCLEdBQUdDLENBQWEsQ0FBb0UsSUFBSyxDQUFDLENBQUE7SUFDM0csTUFBTSxxQkFBcUIsR0FBR0MsQ0FBSSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwRixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxXQUFXLENBQW1CLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQy9HLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsR0FBRyxpQkFBaUIsQ0FBNEMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7O1FBR2pNLFFBQ0l2QyxhQUFLLFNBQVMsRUFBQyxNQUFNO1lBQ2pCQSw2Q0FBdUM7WUFDdkNBO2dCQUFJQSxzQ0FBOEIsQ0FBSztZQUV2Q0E7O2dCQUd3RUEsa0JBQU8sVUFBVSxDQUFROzZEQUE4QztZQUUvSUE7O2dCQUVpSEEseUJBQWU7K0VBQzVIO1lBQ0pBOztnQkFDbUxBLDRCQUFrQjtpRUFDak07WUFFSkE7Z0JBQ0lBLHNDQUE4Qjs7Z0JBQTRDQSxzQ0FBOEI7O2dCQUFFQSx3Q0FBZ0M7O2dCQUFFQSwyQ0FBbUM7d0tBRS9LO1lBRUpBO2dCQUNJQSxzQ0FBOEI7O2dCQUFNQSxzQ0FBOEI7O2dCQUFpQkEsb0NBQTRCOztnQkFDVUEsMkNBQW1DOztnQkFBNkNBLDRCQUFvQjs7Z0JBRWhLQSw0QkFBb0I7O2dCQUF5REEsNEJBQW9CO3VDQUM5SjtZQUNKQTs7Z0JBQXVCQSxlQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLGFBQWEsSUFBSSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsR0FBSSxDQUFRO1lBQ2pMQSxlQUFRLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztnQkFDeEJBLElBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxzQkFBc0IsSUFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBQ3pCLE1BQU1BLElBQUMsMEJBQTBCLElBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUE7cUJBQ3pEO2lCQUNKLEdBQUcsQ0FBQyxDQUNxQixDQUM3QjtZQUNKLGdCQUFnQixJQUFJQTs7Z0JBQWlCLGdCQUFnQixDQUFPLENBQzNELEVBQ1I7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUdGLE1BQU0sMEJBQTBCLEdBQUd1QyxDQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBcUI7UUFDbEUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNRixhQUFXLENBQUMsS0FBSywwREFBeUQsQ0FBQyxDQUFDO1FBQ2hILE1BQU0sc0JBQXNCLEdBQUdHLENBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlELE1BQU0sSUFBSSxHQUFHLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hELE1BQU0sRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXpILE1BQU0sS0FBSyxHQUFHLDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLFFBQ0l4QyxlQUFRLEtBQUs7WUFBRyxJQUFJOztZQUFJLFFBQVEsR0FBRSxVQUFVLEdBQUcsY0FBYzs7WUFBRUEsa0JBQVcsNkJBQTZCLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBSSxDQUFLLEVBQ3pJO0lBQ0wsQ0FBQyxFQUFFOztJQ25FSSxNQUFNLGVBQWUsR0FBRztRQUMzQixNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHK0IsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsRSxRQUNJL0IsYUFBSyxLQUFLLEVBQUMsTUFBTTtZQUNiQTs7Z0JBQTBCQSxlQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFJLENBQVE7WUFDcElBOztnQkFBbUMsU0FBUzs7Z0JBQU8sU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRztvQkFBUSxDQUNuRixFQUNUO0lBQ0wsQ0FBQzs7SUNiTSxNQUFNLGNBQWMsR0FBRztRQUMxQixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHK0IsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHQSxDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTdFLFFBQ0kvQixhQUFLLEtBQUssRUFBQyxNQUFNO1lBQ2JBOztnQkFBeUJBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUksQ0FBUTtZQUNqSUE7O2dCQUFvQkEsZUFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBSSxDQUFRO1lBQzVIQTs7Z0JBQW1DLFNBQVM7O2dCQUFPLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUc7b0JBQVEsQ0FDbkYsRUFDVDtJQUNMLENBQUM7O0lDUkQsTUFBTSxXQUFXLEdBQUcsK2JBQStiLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBTS9kLE1BQU0sZ0JBQWdCLEdBQUc7UUFDckIsTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEdBQUcsWUFBWSxDQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXhKLGNBQWMsRUFBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUyQixDQUFNLENBQW1CLElBQUssQ0FBQyxFQUFFLEVBQUM7UUFFaEcsTUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELENBQUMsQ0FBQyxJQUFJO1FBRWhCLFFBQ0kzQixnQkFBUyxDQUFDO1lBRUwsY0FBYyxJQUFJLElBQUksSUFBSUE7O2dCQUFtQkEsZ0JBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQXNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUtBO29CQUFLLElBQUk7O29CQUFJLEtBQUssQ0FBTSxDQUFDLENBQU0sQ0FBTTtZQUNuTSxZQUFZLElBQUksSUFBSSxJQUFJQTs7Z0JBQW9CQTtvQkFDekNBO3dCQUFPQTs0QkFBSUEsdUJBQWE7NEJBQUFBLHVCQUFhOzRCQUFBQSx1QkFBYTs0QkFBQUEsZ0NBQXNCLENBQUssQ0FBUTtvQkFDckZBLG1CQUFRLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJQTt3QkFBSUEsZ0JBQUssQ0FBQyxDQUFDLElBQUksQ0FBTTt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7d0JBQUNBLGdCQUFLLENBQUMsQ0FBQyxJQUFJLENBQU07d0JBQUFBLGdCQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQU0sQ0FBSyxDQUFDLENBQVMsQ0FDMUksQ0FBTTtZQUNkQSxlQUFNO1lBRUwsdUJBQXVCLElBQUksSUFBSSxJQUFJQTs7Z0JBQTRCQSxnQkFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSUEsZ0JBQUssSUFBSSxDQUFNLENBQUMsQ0FBTSxDQUFNO1lBQ2hKLHFCQUFxQixJQUFJLElBQUksSUFBSUE7O2dCQUE2QkEsZ0JBQUsscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSUEsZ0JBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBTSxDQUFDLENBQU0sQ0FBTTtZQUU1SUEsZUFBTTtZQUNMLFNBQVMsSUFBSUEsaUJBQU0sU0FBUyxZQUFZLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQU8sQ0FDbkcsRUFDVDtJQUNMLENBQUMsQ0FBQTtJQUVELE1BQU0sZ0JBQWdCLEdBQUc7UUFDckIsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsWUFBWSxDQUFpQixFQUFFLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUd6TSxRQUNJQSxnQkFBUyxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyx3QkFFM0MsRUFBQztJQUNmLENBQUMsQ0FBQTtJQUVELE1BQU0sMkJBQTJCLEdBQUc7UUFDaEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsaUJBQWlCLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUNULFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO2dCQUN2QixTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUMxQztTQUNKLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFxQixJQUFJLENBQUMsQ0FBQztRQUV6RSxNQUFNLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEdBQUcsY0FBYyxDQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBRXJHLFFBQ0lBLGdCQUFTLG1CQUFtQixDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7WUFDL0dBLGlCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBTyxDQUMvQyxFQUNSO0lBQ04sQ0FBQyxDQUFBO0lBR0QsTUFBTSxnQkFBZ0IsR0FBR3VDLENBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFzQjtRQUV4RCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxZQUFZLENBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7O1FBR25GLE1BQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLElBQUksS0FBSyxJQUFJLENBQUM7WUFDVixPQUFPdkMsZ0JBQU8sQ0FBQztRQUVuQixRQUNJQSxhQUFLLFNBQVMsRUFBQyxNQUFNO1lBQ2pCQTs7Z0JBQWVBLGVBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFJLENBQVE7WUFDNUlBLGdCQUFTLFFBQVE7Z0JBQ2JBLElBQUMscUJBQXFCLElBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFJLENBQ2hGLENBQ0osRUFDUjtJQUNOLENBQUMsQ0FBQyxDQUFDO0lBR0gsTUFBTSxxQkFBcUIsR0FBR3VDLENBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQTRFO1FBR3RJLFFBQ0l2QztZQUNJQSwrQkFBeUI7WUFDekJBLCtCQUF5QjtZQUN6QkEsK0JBQXlCO1lBQ3pCQTs7Z0JBQWVBLGVBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFJLENBQVEsQ0FFN0ksRUFDTDtJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxvQkFBb0IsR0FBR3VDLENBQUksQ0FBQztRQUU5QixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBFLE1BQU0sRUFDRixTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsY0FBYyxFQUNkLGNBQWMsRUFDZCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsWUFBWSxFQUNmLEdBQUcsZUFBZSxFQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVqSCxNQUFNLFlBQVksSUFBSSxDQUFDLENBQU8sRUFBRSxDQUFRLEtBQUssSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxjQUFjLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEssTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFFOUQsUUFDSXZDLGFBQUssU0FBUyxFQUFDLE1BQU07WUFDakJBLGdCQUFRLFFBQVEsRUFBRSxPQUFPLElBQUksa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE9BQU8sZ0JBQW9CO1lBQ3JGQTs7Z0JBQWtCQSxlQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFJLENBQVE7WUFDMUhBOztnQkFBc0JBLGVBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FBUTtZQUNwSUE7O2dCQUE4QkEsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FBUTtZQUMxSkE7O2dCQUFpQkEsZUFBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBSSxDQUFRO1lBQzNIQTtnQkFDSUE7b0JBQ0lBO3dCQUNJQSx3QkFBYzt3QkFDZEEsd0JBQWMsQ0FDYixDQUNEO2dCQUNSQTtvQkFDSUE7d0JBQUlBLDRCQUFrQjt3QkFBQUEsZ0JBQUssU0FBUyxDQUFNLENBQUs7b0JBQy9DQTt3QkFBSUEsOEJBQW9CO3dCQUFBQSxnQkFBSyxXQUFXLENBQU0sQ0FBSztvQkFDbkRBO3dCQUFJQSwrQkFBcUI7d0JBQUFBLGdCQUFLLFlBQVksQ0FBTSxDQUFLO29CQUNyREE7d0JBQUlBLDhCQUFvQjt3QkFBQUEsZ0JBQUssV0FBVyxDQUFNLENBQUs7b0JBQ25EQTt3QkFBSUEsMkJBQWlCO3dCQUFBQSxnQkFBSyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQU0sQ0FBSztvQkFDeERBO3dCQUFJQSw2QkFBbUI7d0JBQUFBLGdCQUFLLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBTSxDQUFLLENBQ3hELENBQ0osQ0FDTixFQUNSO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLG9CQUFvQixHQUFHdUMsQ0FBSSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckMsTUFBTSxFQUNGLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixjQUFjLEVBQ2QsY0FBYyxFQUNkLE9BQU8sRUFDUCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEVBQ2YsR0FBRyxlQUFlLEVBQW9CLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRWhLLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDOUYsSUFBSSxjQUFjLEVBQUUsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLENBQUM7YUFDWjtpQkFDSTtnQkFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLENBQUM7YUFDYjtTQUNKLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWQsUUFDSXZDLGFBQUssU0FBUyxFQUFDLE1BQU07WUFDakJBOztnQkFBa0JBLGVBQU8sS0FBSyxFQUFFLFVBQVUsR0FBRyxjQUFjLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLElBQUksa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBSSxDQUFRO1lBQ3pJQSxlQUFNO1lBQ05BOztnQkFBa0JBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUksQ0FBUTtZQUMxSEE7O2dCQUFzQkEsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBSSxDQUFRO1lBQ3BJQTs7Z0JBQThCQSxlQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBSSxDQUFRO1lBQzFKQTs7Z0JBQWlCQSxlQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFJLENBQVE7WUFDM0hBO2dCQUNJQTtvQkFDSUE7d0JBQ0lBLHdCQUFjO3dCQUNkQSx3QkFBYyxDQUNiLENBQ0Q7Z0JBQ1JBO29CQUNJQTt3QkFBSUEsNEJBQWtCO3dCQUFBQSxnQkFBSyxTQUFTLENBQU0sQ0FBSztvQkFDL0NBO3dCQUFJQSw4QkFBb0I7d0JBQUFBLGdCQUFLLFdBQVcsQ0FBTSxDQUFLO29CQUNuREE7d0JBQUlBLCtCQUFxQjt3QkFBQUEsZ0JBQUssWUFBWSxDQUFNLENBQUs7b0JBQ3JEQTt3QkFBSUEsOEJBQW9CO3dCQUFBQSxnQkFBSyxXQUFXLENBQU0sQ0FBSztvQkFDbkRBO3dCQUFJQSwyQkFBaUI7d0JBQUFBLGdCQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBTSxDQUFLO29CQUN4REE7d0JBQUlBLGlDQUF1Qjt3QkFBQUEsZ0JBQUssY0FBYyxDQUFNLENBQUs7b0JBQ3pEQTt3QkFBSUEsa0NBQXNCO3dCQUFBQSxnQkFBSyxJQUFJLENBQU0sQ0FBSyxDQUMxQyxDQUNKLENBQ04sRUFDUjtJQUNOLENBQUMsQ0FBQyxDQUFDO0lBR0gsTUFBTSxTQUFTLEdBQUd1QyxDQUFJLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDLEdBQUcsUUFBUSxDQUFzQyxJQUFJLENBQUMsQ0FBQztRQUM1SCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFzQyxJQUFJLENBQUMsQ0FBQztRQUNoSCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsV0FBVyxDQUFpQixFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUN6TixRQUNJdkMsYUFBSyxLQUFLLEVBQUMsTUFBTTtZQUNiQSw4QkFBb0I7WUFDcEJBLGdCQUFTLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDOztnQkFBU0EsYUFBSyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxvQkFBcUIsQ0FBTTtZQUMxS0E7Z0JBQ0lBO29CQUNJQTs7d0JBQXVCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBTTtvQkFDL0NBOzt3QkFBb0IsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFNO29CQUNqREE7O3dCQUFxQixhQUFhLENBQUMsUUFBUSxFQUFFLENBQU07b0JBQ25EQTs7d0JBQW9CLGFBQWEsRUFBRSxPQUFPLENBQU07b0JBQ2hEQTs7d0JBQXdCLGlCQUFpQixFQUFFLE9BQU8sQ0FBTSxDQUN2RCxDQUNILENBQ0osRUFDVDtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBR0YsTUFBTSxjQUFjLEdBQUdzQyxDQUFhLENBQTRHLElBQUssQ0FBQyxDQUFDO0lBQ3ZKLE1BQU0sZUFBZSxHQUFHQSxDQUFhLENBQW1FLElBQUssQ0FBQyxDQUFDO1VBQ2xHLFdBQVcsR0FBR0MsQ0FBSSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxXQUFXLENBQWlCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzdHLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLGlCQUFpQixDQUFzRixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUU5TyxRQUNJdkMsYUFBSyxTQUFTLEVBQUMsTUFBTTtZQUNqQkE7Z0JBQU0sU0FBUzs7Z0JBQUcsUUFBUTs7Z0JBQUcsUUFBUSxDQUFPO1lBQzVDQSxnQkFBUyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCQSxJQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLG9CQUFvQixJQUMvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDekIsTUFBTUEsSUFBQyxjQUFjLElBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUE7cUJBQzdDO2lCQUNKLEdBQUcsQ0FBQyxDQUNpQixDQUN4QixDQUNKLEVBQ1I7SUFDTixDQUFDLEVBQUM7SUFHRixNQUFNLGNBQWMsR0FBR3VDLENBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFxQjtRQUNqQyxRQUFRLENBQUMsTUFBTSxXQUFXLENBQUMsS0FBSywwREFBeUQsRUFBRTtRQUNoSCxNQUFNLFVBQVUsR0FBR0MsQ0FBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTFJLE1BQU0sS0FBSyxHQUFHLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLFFBQ0l4QyxnQkFBUyxLQUFLO1lBQ1ZBO2dCQUFNLEdBQUcsYUFBYSxFQUFFOztnQkFBSSxhQUFhOztnQkFBRyxTQUFTLEdBQUcsQ0FBQztvQkFBUTtZQUVqRUEsYUFBSyxLQUFLLEVBQUMsZUFBZTtnQkFDdEJBLElBQUMsZUFBZSxDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUscUJBQXFCLElBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN4QixNQUFNQSxJQUFDLGVBQWUsSUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQTtxQkFDOUM7aUJBQ0osR0FBRyxDQUFDLENBQ2tCLENBQ3pCLENBQ0osRUFDVDtJQUNMLENBQUMsRUFBRSxDQUFDO0lBRUosTUFBTSxlQUFlLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBcUI7UUFDbEQsTUFBTSxXQUFXLEdBQUd3QyxDQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsTUFBTSxFQUFFLDBCQUEwQixFQUFFLEdBQUcsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU5RCxNQUFNLEtBQUssR0FBRywwQkFBMEIsQ0FBQyxFQUFFLENBQVEsQ0FBQztRQUVwRCxJQUFJLEtBQUssS0FBSyxDQUFDO1lBQ1gsT0FBT3hDLGdCQUFTLEtBQUs7O2dCQUFjLEtBQUssR0FBRyxDQUFDLENBQU8sQ0FBQTs7WUFFbkQsT0FBT0E7Z0JBQU9BLGtCQUFZLEtBQUssRUFBRSxJQUFJLEVBQUMsVUFBVSxHQUFHOzhCQUFtQixDQUFBO0lBQzlFLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxTQUFTLEdBQUc7UUFDZCxPQUFPQSxhQUFLLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtZQUNoREEsSUFBQyxXQUFXLE9BQUc7WUFDZkEsZUFBTTtZQUNOQSxJQUFDLFNBQVMsT0FBRztZQUNiQSxlQUFNO1lBQ05BLElBQUMsY0FBYyxPQUFHO1lBQ2xCQSxlQUFNO1lBQ05BLElBQUMsZUFBZSxPQUFHO1lBQ25CQSxlQUFNO1lBQ05BLElBQUMscUJBQXFCLE9BQUc7WUFDekJBLGVBQU07WUFHTkEsSUFBQyxnQkFBZ0IsT0FBRztZQUNwQkEsZUFBTTtZQUNOQSxJQUFDLG9CQUFvQixPQUFHO1lBQ3hCQSxlQUFNO1lBQ05BLElBQUMsb0JBQW9CLE9BQUc7WUFDeEJBLGVBQU07WUFDTkEsSUFBQyxnQkFBZ0IsT0FBRztZQUNwQkEsZUFBTTtZQUNOQSxJQUFDLGdCQUFnQixPQUFHO1lBQ3BCQSxlQUFNO1lBQ05BLElBQUMsMkJBQTJCLE9BQUc7WUFDL0JBLGVBQU07WUFDTkEsa0JBQVMsQ0FDUCxDQUFBO0lBQ1YsQ0FBQyxDQUFBO0lBRUQscUJBQXFCLENBQUM7UUFDbEJ5QyxHQUFNLENBQUN6QyxJQUFDLFNBQVMsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUM7Ozs7Ozs7Ozs7OzsifQ==
