(function () {
	'use strict';

	var n,l$1,u$1,t$1,o$1,r$1,f$1,e$1={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null!=l$1.vnode&&l$1.vnode(f),f}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$1,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P$1(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x$1(t,l,u):P$1(u,t,t,n.__k,t.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I,o):n.removeEventListener(l,o?T$1:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _$1(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$1,e$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}function D(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

	var t,u,r,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}),i=[];}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){l$1.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

	function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var G={configurable:!0,get:function(){return this.class}},J=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n);};var K=l$1.__r;l$1.__r=function(n){K&&K(n);};

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
	// Generally too complex
	//Pick<h.JSX.HTMLAttributes<E>, keyof h.JSX.HTMLAttributes<E> & (keyof T | keyof U)>; 
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
	        const { class: lhsClass, className: lhsClassName, style: lhsStyle, ref: lhsRef, ...lhs } = lhs2;
	        const { class: rhsClass, className: rhsClassName, style: rhsStyle, ref: rhsRef, ...rhs } = rhs2;
	        let ret = {
	            ...lhs,
	            ref: useMergedRefs()(lhs2, rhs2),
	            style: useMergedStyles(lhs2, rhs2),
	            className: useMergedClasses(lhs2, rhs2)
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
	        lhs?.(...args);
	        rhs?.(...args);
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

	function useElementSize({ observeBox } = {}) {
	    const { element, useRefElementProps } = useRefElement();
	    const [size, setSize, getSize] = useState(null);
	    y(() => {
	        if (element) {
	            const handleUpdate = () => {
	                const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
	                setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
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
	        elementSize: size,
	        getElementSize: getSize,
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

	// Used instead of undefined in case undefined is a 
	// type that's frequently used in the used use case.
	const NeverSet = Symbol("never-set");
	/**
	 * Returns a value that does not change between renders. The provided getter will only be called once, just in case it's expensive.
	 *
	 * Optionally, the value can depend on a set of arguments that will be passed to the getter.
	 *
	 * Effectively, this is `useMemo`, except it passes its dependencies to the factory function.
	 *
	 * @param getter A function that returns the value you want to use
	 * @param args Optional arguments to pass to the function. The function will only be called again if these change.
	 * @returns
	 */
	function useConstant(getter, ...args) {
	    const [value, setValue] = useState(NeverSet);
	    h(() => { setValue(prev => getter(...args)); }, args);
	    if (value === NeverSet)
	        return getter(...args);
	    return value;
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
	            f();
	        }
	    }
	}
	function focusin(e) {
	    currentlyFocusedElement = lastFocusedElement = e.target;
	    for (let f of updaters) {
	        f();
	    }
	}
	let windowFocused = true;
	function windowFocus() {
	    windowFocused = true;
	    for (let f of updaters) {
	        f();
	    }
	}
	function windowBlur() {
	    windowFocused = false;
	    for (let f of updaters) {
	        f();
	    }
	}
	function useActiveElement() {
	    // TODO: Is this actually better than using proper state management?
	    const [i, setI] = useState(0);
	    h(() => {
	        const F = () => setI(i => ++i);
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
	    }, []);
	    return {
	        activeElement: currentlyFocusedElement,
	        lastActiveElement: lastFocusedElement,
	        getActiveElement: getCurrentlyFocusedElement,
	        getLastActiveElement: getLastFocusedElement,
	        windowFocused
	    };
	}

	function useHasFocus({} = {}) {
	    //const [focusedElement, setFocusedElement, getFocusedElement] = useState<EventTarget | null>(null);
	    //const [focused, setFocused] = useState(false);
	    //const [focusedInner, setFocusedInner] = useState(false);
	    const { element, getElement, useRefElementProps } = useRefElement();
	    const { activeElement, lastActiveElement } = useActiveElement();
	    const useHasFocusProps = A$1((props) => {
	        return useRefElementProps(props);
	    }, []);
	    const focused = d(() => { return element == activeElement; }, [element, activeElement]);
	    const focusedInner = d(() => { return element?.contains(activeElement) ?? false; }, [element, activeElement]);
	    const lastFocused = d(() => { return element == lastActiveElement; }, [element, lastActiveElement]);
	    const lastFocusedInner = d(() => { return element?.contains(lastActiveElement) ?? false; }, [element, lastActiveElement]);
	    return {
	        useHasFocusProps,
	        focusedElement: activeElement,
	        lastFocusedElement: lastActiveElement,
	        focused,
	        focusedInner,
	        lastFocused,
	        lastFocusedInner
	    };
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
	 */
	function useRovingTabIndex({ tabbableIndex }) {
	    const { focused, focusedInner, useHasFocusProps } = useHasFocus();
	    const getTabbableIndex = useStableGetter(tabbableIndex);
	    // Keep track of three things related to the currently tabbable element's index:
	    // What it is,
	    // What it was the last time,
	    // Whether, when we render this component and it's changed, to also focus the element that was made tabbable.
	    // For this reason, boolean | null is semantically intentional, if technically unnecessary -- 
	    // true or false imply a change just happened and that tabbableIndex != prevTabbable.current, and null implies no change.
	    //const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(0);
	    const prevTabbable = s(-Infinity);
	    // Call the hook that allows us to collect information from children who provide it
	    const { managedChildren, useManagedChild, indicesByElement, ...rest } = useChildManager();
	    // Doesn't do anything, but here because there's a pretty decent chance it might in the future.
	    const useRovingTabIndexProps = A$1((props) => useMergedProps()(useHasFocusProps({}), props), []);
	    const focusOnChange = (focusedInner != false);
	    // Any time the tabbable index changes,
	    // notify the previous child that it's no longer tabbable,
	    // and notify the next child that is allowed to be tabbed to.
	    useLayoutEffect(() => {
	        if (tabbableIndex != prevTabbable.current) {
	            if (managedChildren[tabbableIndex]) {
	                if (typeof prevTabbable.current == typeof tabbableIndex && (typeof prevTabbable.current != "number" || isFinite(prevTabbable.current)))
	                    managedChildren[prevTabbable.current]?.setTabbable(false, undefined);
	                managedChildren[tabbableIndex].setTabbable(true, focusOnChange ? "focus" : undefined);
	                prevTabbable.current = tabbableIndex;
	            }
	        }
	    }, [tabbableIndex, focusOnChange]);
	    const focusSelf = A$1(() => {
	        managedChildren[tabbableIndex].setTabbable(true, "focus");
	    }, [tabbableIndex]);
	    const useRovingTabIndexChild = A$1((info) => {
	        const setTabbable = A$1((tabbable, shouldFocus) => {
	            setTabbable2(tabbable);
	            if (tabbable && shouldFocus)
	                setShouldFocus(!!shouldFocus);
	        }, []);
	        let newInfo = {
	            ...info,
	            setTabbable
	        };
	        const { element, getElement, useManagedChildProps } = useManagedChild(newInfo);
	        const [tabbable, setTabbable2] = useState(getTabbableIndex() == info.index);
	        const [shouldFocus, setShouldFocus] = useState(false);
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
	            //const { element, useRefElementProps } = useRefElement<ChildElement>();
	            useLayoutEffect(() => {
	                if (element && shouldFocus && "focus" in element) {
	                    requestAnimationFrame(() => {
	                        queueMicrotask(() => {
	                            element.focus();
	                        });
	                    });
	                    setShouldFocus(false);
	                }
	            }, [element, shouldFocus]);
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
	        useRovingTabIndexProps,
	        useRovingTabIndexChild,
	        managedChildren,
	        indicesByElement,
	        focusSelf,
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
	        if (index < 0) {
	            setIndex(0);
	        }
	        else if (childCount > 0 && index >= childCount) {
	            setIndex(childCount - 1);
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
	    }, []);
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
	        // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
	        // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
	        let safeLhs = lhs.normalize("NFD");
	        let safeRhs = rhs.text.normalize("NFD").substr(0, safeLhs.length);
	        if (collator)
	            compare = collator.compare(safeLhs, safeRhs);
	        else
	            compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
	        return compare;
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
	                    if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > getIndex()) {
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
	function useListNavigation({ collator, keyNavigation }) {
	    keyNavigation ??= "either";
	    // Keep track of three things related to the currently tabbable element's index:
	    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
	    const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(0);
	    const setIndex = A$1((index) => {
	        setTabbableIndex(index);
	    }, []);
	    const { managedChildren, indicesByElement, useRovingTabIndexProps, useRovingTabIndexChild, focusSelf, ...rest } = useRovingTabIndex({ tabbableIndex: tabbableIndex });
	    const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
	    const { navigateToEnd, navigateToIndex, navigateToNext, navigateToPrev, navigateToStart, useLinearNavigationChild } = useLinearNavigation({ getIndex: getTabbableIndex, setIndex, managedChildren });
	    // Any time the tabbable index changes, notify the previous
	    // and next child as such, and optionally focus that next one.
	    /*useLayoutEffect(([prevTabbableIndex]) => {
	        console.log(`Notifying children of index change from ${prevTabbableIndex} to ${tabbableIndex}`);
	        managedChildren[prevTabbableIndex]?.setTabbable(false);
	        managedChildren[tabbableIndex]?.setTabbable(true)
	    }, [tabbableIndex])*/
	    const useListNavigationProps = function (props) {
	        let ret = useRovingTabIndexProps(props);
	        return ret;
	    };
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
	        useListNavigationProps,
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
	        focusSelf,
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

	const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
	const RovingChildContext = D(null);
	const DemoUseRovingTabIndex = g(() => {
	    const { useListNavigationChild, useListNavigationProps, currentTypeahead, setTabbableIndex, tabbableIndex } = useListNavigation({});
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
	            v$1("code", null, "every one"),
	            " of its child elements is extremely important. This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ",
	            v$1("code", null, "every one"),
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
	            v$1("input", { type: "number", value: tabbableIndex, onInput: e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber); } })),
	        v$1("ul", { ...useListNavigationProps({}) },
	            v$1(RovingChildContext.Provider, { value: useListNavigationChild }, Array.from((function* () {
	                for (let i = 0; i < 10; ++i) {
	                    yield v$1(DemoUseRovingTabIndexChild, { index: i, key: i });
	                }
	            })()))),
	        currentTypeahead && v$1("div", null,
	            "Typeahead: ",
	            currentTypeahead)));
	});
	const DemoUseRovingTabIndexChild = (({ index }) => {
	    const randomWord = useConstant(() => RandomWords[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
	    const useRovingTabIndexChild = F(RovingChildContext);
	    const text = `${randomWord} This is item #${index + 1}`;
	    const { useListNavigationChildProps, useListNavigationSiblingProps } = useRovingTabIndexChild({ index, text });
	    const props = useListNavigationChildProps({});
	    return (v$1("li", { ...props },
	        text,
	        " (",
	        props.tabIndex,
	        ")",
	        v$1("input", { ...useListNavigationSiblingProps({ type: "checkbox" }) })));
	});

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
	    const { element, elementSize, useElementSizeProps } = useElementSize();
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
	const Component = () => {
	    return v$1("div", { class: "flex", style: { flexWrap: "wrap" } },
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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL3VzZS1zdGF0ZS5qcyIsIi4uL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCIuLi91c2UtbGF5b3V0LWVmZmVjdC5qcyIsIi4uL3VzZS10aW1lb3V0LmpzIiwiLi4vdXNlLWFzeW5jLWhhbmRsZXIuanMiLCIuLi91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vdXNlLWNvbnN0YW50LmpzIiwiLi4vdXNlLWRyYWdnYWJsZS5qcyIsIi4uL3VzZS1kcm9wcGFibGUuanMiLCIuLi91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi91c2UtaGFzLWZvY3VzLmpzIiwiLi4vdXNlLWludGVydmFsLmpzIiwiLi4vdXNlLWNoaWxkLW1hbmFnZXIuanMiLCIuLi91c2Utcm92aW5nLXRhYmluZGV4LmpzIiwiLi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb24uanMiLCIuLi91c2UtbGlzdC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL2Rpc3QvYmxvY2tpbmctZWxlbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vdXNlLWJsb2NraW5nLWVsZW1lbnQuanMiLCIuLi91c2UtZm9jdXMtdHJhcC5qcyIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS1pbnRlcnZhbC50c3giLCJkZW1vcy91c2UtdGltZW91dC50c3giLCJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4geShsLGYsdCxvLG51bGwpfWZ1bmN0aW9uIHkobixpLHQsbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cn07cmV0dXJuIG51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fHIhPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP2sodCk6byx0Ll9faCkseih1LHQpLHQuX19lIT1vJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxvLHIsZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQsbyxyLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJm51bGwhPV8uX19rJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxhfHxcIm9wdGlvblwiIT09dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7dmFyIGksdDtmb3IoaT0wO2k8bi5fX2subGVuZ3RoO2krKykodD1uLl9fa1tpXSkmJih0Ll9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnR5cGU/eCh0LGwsdSk6UCh1LHQsdCxuLl9fayx0Ll9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LG8scixmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIWMscltyLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LG8scixmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKG89ITApLG51bGwhPXIpZm9yKDtfPHIubGVuZ3RoO18rKylpZigocz1yW19dKSYmKHM9PT1sfHwoZD9zLmxvY2FsTmFtZT09ZDozPT1zLm5vZGVUeXBlKSkpe2w9cyxyW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixmLHI/clswXTppLl9fayYmayhpLDApLGMpLG51bGwhPXIpZm9yKF89ci5sZW5ndGg7Xy0tOyludWxsIT1yW19dJiZoKHJbX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQsbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIG8scixmO2wuX18mJmwuX18odSxpKSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFvJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxyfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIW8mJnQ/W3RdOnI/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZ0P3Q6cj9yLl9fZTppLmZpcnN0Q2hpbGQsbykseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxvLHIsZj1hKHt9LGwucHJvcHMpO2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PXZvaWQgMH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgZix1c2VEZWJ1Z1ZhbHVlIGFzIGN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyB2LEZyYWdtZW50IGFzIGQscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6dih2KG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj92KG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXYobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6dn0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKGQsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKGQsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD12KG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD0kLG4ubmF0aXZlRXZlbnQ9bn07dmFyIHEsRz17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSj1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2Zvcih2YXIgdSBpbiByPXt9LGUpe3ZhciBvPWVbdV07XCJ2YWx1ZVwiPT09dSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PW98fChcImRlZmF1bHRWYWx1ZVwiPT09dSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT91PVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT11JiYhMD09PW8/bz1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdCh1KT91PVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdCh1K3QpJiYhVihlLnR5cGUpP3U9XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KHUpP3U9dS50b0xvd2VyQ2FzZSgpOlAudGVzdCh1KT91PXUucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PW8mJihvPXZvaWQgMCksclt1XT1vKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEcuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsRykpLG4uJCR0eXBlb2Y9aixKJiZKKG4pfTt2YXIgSz1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtLJiZLKG4pLHE9bi5fX2N9O3ZhciBRPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gcS5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxYPVwiMTcuMC4yXCI7ZnVuY3Rpb24gbm4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIHRuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gZW4obil7cmV0dXJuIHRuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gcm4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gdW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgb249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49ZDtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6eixoeWRyYXRlOkIsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpybixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6bm4sY2xvbmVFbGVtZW50OmVuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OmQsaXNWYWxpZEVsZW1lbnQ6dG4sZmluZERPTU5vZGU6dW4sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmxuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOm9uLFN0cmljdE1vZGU6ZCxTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpRfTtleHBvcnR7WCBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHJuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsbm4gYXMgY3JlYXRlRmFjdG9yeSxlbiBhcyBjbG9uZUVsZW1lbnQsdG4gYXMgaXNWYWxpZEVsZW1lbnQsdW4gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsbG4gYXMgZmx1c2hTeW5jLG9uIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksUSBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxyXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cclxuICpcclxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcclxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcclxuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxyXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XHJcbiAgICBjb25zdCBsaHNDbGFzc05hbWUgPSBsaHM/LmNsYXNzTmFtZTtcclxuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcclxuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xyXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICBdO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbM10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s0XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNl0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s3XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMTNdO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXHJcbiAqIEBwYXJhbSBsaHNcclxuICogQHBhcmFtIHJoc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcclxuICAgICAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xyXG4gICAgICAgICAgICB9LCBbbGhzLCByaHNdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHR5cGV0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCByZWY6IFJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c09wdGlvbmFsUmVmKHJlZjogUmVmPGFueT4gfCB1bmRlZmluZWQpIHsgfVxyXG5cclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZjogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZjogdW5kZWZpbmVkIH0sIHsgcmVmIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcclxuICAgIF0gYXMgY29uc3Q7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1swXSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcclxuXHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1syXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1s0XSk7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xyXG4gICAgYWNjZXB0c1JlZihjWzVdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s2XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xyXG4gICAgYWNjZXB0c1JlZihjWzhdKTtcclxufVxyXG4qL1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiLyoqXHJcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxyXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XHJcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cclxuICAgIGlmICghbGhzICYmICFyaHMpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcclxuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXHJcbiAgICAgICAgaWYgKGxocyAmJiAhcmhzKVxyXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgICAgIGlmICghbGhzICYmIHJocylcclxuICAgICAgICAgICAgcmV0dXJuIHJocztcclxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cclxuICAgICAgICBpZiAobGhzICYmIHJocykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBPYmplY3QuZnJvbUVudHJpZXMobGhzLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKSB9LCByaHMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocyA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IE9iamVjdC5mcm9tRW50cmllcyhsaHMuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMb2dpYz8/P1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxyXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzfWA7IC8vIFRPRE86IEltcHJvdmUgdGhlIHR5cGluZyB0byBtYWtlIHRoaXMgcG9zc2libGVcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcclxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzcyhzdHIpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxyXG5mdW5jdGlvbiB0eXBldGVzdChwcm9wcykge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7fTtcclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7fSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyhwcm9wcywgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHByb3BzLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlIH0sIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHsgc3R5bGUgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwgeyBzdHlsZSB9KSxcclxuICAgIF07XHJcbiAgICAvLyBTYW5pdHkgY2hlY2tzXHJcbiAgICBjWzBdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzFdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzJdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzNdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzRdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzVdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzZdID09PSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIGJvdGggd2VyZSB1bmRlZmluZWRcclxuICAgIGNbMF0/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXHJcbiAgICBjWzFdPy5iYWNrZ3JvdW5Db2xvcjtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXHJcbiAgICBjWzJdPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiB3YXMgbm90IHByb3ZpZGVkIGFzIGEgcHJvcFxyXG4gICAgY1szXT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgbWF5IGJlIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gaG93IFAgZXh0ZW5kcyBIVE1MQXR0cmlidXRlc1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbNF0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s0XSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiBtYXkgYmUgdW5kZWZpbmVkIGRlcGVuZGluZyBvbiBob3cgUCBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s1XSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzVdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIG1heSBiZSB1bmRlZmluZWQgZGVwZW5kaW5nIG9uIGhvdyBQIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXNcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzZdKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbNl0pO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s3XSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzddKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbOF0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s4XSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzldKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbOV0pO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1sxMF0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1sxMF0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xyXG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgLyogSW50ZW50aW9uYWwgKi8gfTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcclxuICAgIGxvZyA9IGxvZzI7XHJcbn1cclxuLy8gR2VuZXJhbGx5IHRvbyBjb21wbGV4XHJcbi8vUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwga2V5b2YgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gJiAoa2V5b2YgVCB8IGtleW9mIFUpPjsgXHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICpcclxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cclxuICogQHBhcmFtIGxoczJcclxuICogQHBhcmFtIHJoczJcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzMiwgcmhzMikge1xyXG4gICAgICAgIC8vIEZpcnN0LCBwdXQgaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gcmVhc29uIGFib3V0XHJcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxyXG4gICAgICAgIGNvbnN0IHsgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xyXG4gICAgICAgIGNvbnN0IHsgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIC4uLmxocyxcclxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxyXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cclxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xyXG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcclxuICAgIGlmICghbGhzKVxyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICBpZiAoIXJocylcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGhzPy4oLi4uYXJncyk7XHJcbiAgICAgICAgcmhzPy4oLi4uYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyaWNHZXRUZXN0KCkge1xyXG4gICAgY29uc3QgdDEgPSBudWxsO1xyXG4gICAgY29uc3QgdDIgPSBudWxsO1xyXG4gICAgY29uc3QgdDMgPSBudWxsO1xyXG4gICAgaWYgKHQzLmlkID09IG51bGwpIHtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHQzLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIH1cclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XHJcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xyXG5cclxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xyXG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG0zOiBNMSA9IDA7XHJcblxyXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcclxuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtNjogTTIgPSAwO1xyXG5cclxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XHJcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcclxuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG5cclxuXHJcbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcclxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcclxuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcclxuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcclxuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcclxuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcclxuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcclxuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcclxuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcclxuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcclxuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcclxuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcclxuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcclxuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcclxuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcclxuXHJcblxyXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XHJcbiovIFxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFNsaWdodGx5IGVuaGFuY2VkIHZlcnNpb24gb2YgYHVzZVN0YXRlYCB0aGF0IGluY2x1ZGVzIGEgZ2V0dGVyIHRoYXQgcmVtYWlucyBjb25zdGFudFxyXG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGVcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vIFdlIGtlZXAgYm90aFxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZVAoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGF0ZSk7XHJcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXHJcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcclxuICAgIGNvbnN0IHNldCA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0U3RhdGUocHJldlZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBnZXQgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSk7XHJcbiAgICByZXR1cm4gW3N0YXRlLCBzZXQsIGdldF07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXHJcbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXHJcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxyXG4gKlxyXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcclxuICpcclxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KCkge1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBvYnNlcnZlQm94IH0gPSB7fSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIGNvbnN0IFtzaXplLCBzZXRTaXplLCBnZXRTaXplXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCEoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbZWxlbWVudCwgb2JzZXJ2ZUJveF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGVsZW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgIGdldEVsZW1lbnRTaXplOiBnZXRTaXplLFxyXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XHJcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XHJcbn1cclxuLyoqXHJcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cclxuICpcclxuICogQ2VydGFpbiBDU1MgcHJvcGVydGllcywgbGlrZSBgYmxvY2stc2l6ZWAsIHJlc3BlY3QgdGhlIGN1cnJlbnQgd3JpdGluZyBtb2RlIGFuZCB0ZXh0IGRpcmVjdGlvbi5cclxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXHJcbiAqXHJcbiAqIFRoaXMgaXMgcHJvdmlkZWQgc28gdGhhdCBDU1MgcHJvcGVydGllcyBjYW4gY29uc2lzdGVudGx5IHVzZSB0aG9zZSBsb2dpY2FsIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcclxuICpcclxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XHJcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcclxuICogKiBgY29udmVydEVsZW1lbnRTaXplYDogV2hlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHVzZUVsZW1lbnRTaXplYCwgYWxsb3dzIHlvdSB0byByZXRyaWV2ZSB0aGUgbG9naWNhbCBzaXplIG9mIGFuIGVsZW1lbnQgaW5zdGVhZCBvZiB0aGUgcGh5c2ljYWwgc2l6ZS5cclxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXHJcbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50KSB7XHJcbiAgICBjb25zdCBbd3JpdGluZ01vZGUsIHNldFdyaXRpbmdNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RleHRPcmllbnRhdGlvbiwgc2V0VGV4dE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgd3JpdGluZ01vZGVSZWYgPSB1c2VSZWYod3JpdGluZ01vZGUpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uUmVmID0gdXNlUmVmKGRpcmVjdGlvbik7XHJcbiAgICBjb25zdCB0ZXh0T3JpZW50YXRpb25SZWYgPSB1c2VSZWYodGV4dE9yaWVudGF0aW9uKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQgPSB3cml0aW5nTW9kZTsgfSwgW3dyaXRpbmdNb2RlXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkaXJlY3Rpb25SZWYuY3VycmVudCA9IGRpcmVjdGlvbjsgfSwgW2RpcmVjdGlvbl0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQgPSB0ZXh0T3JpZW50YXRpb247IH0sIFt0ZXh0T3JpZW50YXRpb25dKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgY29uc3QgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBzZXRXcml0aW5nTW9kZSh3IHx8IFwiaG9yaXpvbnRhbC10YlwiKTtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKGQgfHwgXCJydGxcIik7XHJcbiAgICAgICAgICAgIHNldFRleHRPcmllbnRhdGlvbih0IHx8IFwibWl4ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCB3cml0aW5nTW9kZSA9IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJlZi5jdXJyZW50O1xyXG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIXdyaXRpbmdNb2RlIHx8ICFkaXJlY3Rpb24gfHwgIXRleHRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJsdHJcIjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbd3JpdGluZ01vZGVSZWYsIGRpcmVjdGlvblJlZiwgdGV4dE9yaWVudGF0aW9uUmVmXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcclxuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xyXG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxyXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxyXG4gICAgfTtcclxufVxyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxyXG4gKlxyXG4gKiBVc2Ugd2l0aCBjYXV0aW9uLCBhbmQgKipkbyBub3QgdXNlIHRoZSBnZXR0ZXIgaW4gdXNlTGF5b3V0RWZmZWN0ISEqKlxyXG4gKiBgc2V0U3RhdGVgJ3MgZ2V0dGVyIGRvZXMgbm90IGhhdmUgdGhpcyBwcm9ibGVtLCBidXQgdGhlbiB5b3UncmUgdXNpbmcgeW91ciBvd24gc3RhdGVcclxuICogaW5zdGVhZCBvZiBhbiBleGlzdGluZyB2YWx1ZSwgd2hpY2ggbWlnaHQgbm90IGFsd2F5cyBiZSBmZWFzaWJsZS5cclxuICpcclxuICogV2VpZ2ggeW91ciBvcHRpb25zLCBhbmQgaG9wZWZ1bGx5IG9uZSBvZiB0aGVtIGdldHMgdGhlIGpvYiBkb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih2YWx1ZSk7XHJcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gdmFsdWUpO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1nZXR0ZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbi8qKlxyXG4gKiBBbHRlcm5hdGUgdXNlQ2FsbGJhY2soKSB3aGljaCBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSAod3JhcHBlZCkgZnVuY3Rpb24gcmVmZXJlbmNlXHJcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxyXG4gKlxyXG4gKiBETyBOT1QgVVNFIFRIRSBSRVNVTFQgSU4gdXNlTGF5b3V0RWZmZWN0ISFcclxuICpcclxuICogVE9ETzogSW52ZXN0aWdhdGUgb3B0aW9ucy5kaWZmZWQgaWYgdGhlIHVzZUxheW91dEVmZmVjdCBsaW1pdGF0aW9uIGJlY29tZXMgbGltaXRsZXNzbHkgbGltaXRpbmcuXHJcbiAqXHJcbiAqIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDA5OSNpc3N1ZWNvbW1lbnQtNjU5Mjk4NDIyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2soZm4pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja0dldHRlciA9IHVzZVN0YWJsZUdldHRlcihmbik7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RnVuYyA9IGN1cnJlbnRDYWxsYmFja0dldHRlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudEZ1bmMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVDYWxsYmFjaygpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRGdW5jKC4uLmFyZ3MpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKGlucHV0cyk7XHJcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1tpXSA9IHsgZnJvbTogcHJldklucHV0cy5jdXJyZW50W2ldLCB0bzogaW5wdXRzW2ldIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xyXG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcclxuICAgIH07XHJcbiAgICB1c2VMYXlvdXRFZmZlY3ROYXRpdmUoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayk7XHJcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xyXG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xyXG4gICAgICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoc3RhYmxlQ2FsbGJhY2ssIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyaWdnZXJJbmRleCwgdGltZW91dElzTnVsbF0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10aW1lb3V0LmpzLm1hcCIsImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlLXRpbWVvdXRcIjtcclxuLyoqXHJcbiAqIEdpdmVuIGFuIGFzeW5jcm9ub3VzIGV2ZW50IGhhbmRsZXIsIHJldHVybnMgYSBzeW5jcm9ub3VzIG9uZSB0aGF0IHdvcmtzIG9uIHRoZSBET00sXHJcbiAqIGFsb25nIHdpdGggc29tZSBvdGhlciBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxyXG4gKiBEb2VzIG5vdCBtb2RpZnkgYW55IHByb3BzLlxyXG4gKlxyXG4gKiBUaGUgaGFuZGxlciBpcyBhdXRvbWF0aWNhbGx5IHRocm90dGxlZCB0byBvbmx5IHJ1biBvbmUgYXQgYSB0aW1lLlxyXG4gKiBJZiB0aGUgaGFuZGxlciBpcyBjYWxsZWQsIGFuZCB0aGVuIGJlZm9yZSBpdCBmaW5pc2hlcywgaXMgY2FsbGVkIGFnYWluLFxyXG4gKiBpdCB3aWxsIGJlIHB1dCBvbiBob2xkIHVudGlsIHRoZSBjdXJyZW50IG9uZSBmaW5pc2hlcywgYXQgd2hpY2ggcG9pbnRcclxuICogdGhlIHNlY29uZCBvbmUgd2lsbCBydW4uICBJZiB0aGUgaGFuZGxlciBpcyBjYWxsZWQgYSB0aGlyZCB0aW1lIGJlZm9yZVxyXG4gKiB0aGUgZmlyc3QgaGFzIGZpbmlzaGVkLCBpdCB3aWxsICpyZXBsYWNlKiB0aGUgc2Vjb25kLCBzbyBvbmx5IHRoZSBtb3N0XHJcbiAqIHJlY2VudGx5IGNhbGxlZCBpdGVyYXRpb24gb2YgdGhlIGhhbmRsZXIgd2lsbCBydW4uXHJcbiAqXHJcbiAqIFlvdSBtYXkgb3B0aW9uYWxseSAqYWxzbyogc3BlY2lmeSBhIGRlYm91bmNlIHBhcmFtZXRlciB0aGF0IHdhaXRzIHVudGlsIHRoZVxyXG4gKiBzeW5jcm9ub3VzIGhhbmRsZXIgaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgdGhlIHNwZWNpZmllZCBudW1iZXIgb2ZcclxuICogbWlsbGlzZWNvbmRzLCBhdCB3aGljaCBwb2ludCB3ZSAqYWN0dWFsbHkqIHJ1biB0aGUgYXN5bmNyb25vdXMgaGFuZGxlclxyXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGxvZ2ljIGluIHRoZSBwcmV2aW91cyBwYXJhZ3JhcGguIFRoaXMgaXMgaW5cclxuICogKmFkZGl0aW9uKiB0byB0aHJvdHRsaW5nIHRoZSBoYW5kbGVyLCBhbmQgZG9lcyBub3QgcmVwbGFjZSB0aGF0IGJlaGF2aW9yLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIHBhcmFtZXRlcnMgdG8gdGhlIGFzeW5jIGhhbmRsZXIgYXJlIHNsaWdodGx5IGRpZmZlcmVudCB0aGFuXHJcbiAqIHRoZSBzeW5jIGhhbmRsZXIgJm5kYXNoOyB0aGUgZmlyc3QgYXJndW1lbnQsIGFzIGRlY2lkZWQgYnkgeW91IHdpdGggdGhlXHJcbiAqIGBjYXB0dXJlYCBwYXJhbWV0ZXIgZm9yIHRoaXMgaG9vaywgaXMgdGhlIFwic2F2ZWRcIiBpbmZvcm1hdGlvbiBmcm9tIHRoZVxyXG4gKiBldmVudC4gIEZvciBleGFtcGxlLCB0aGUgZXZlbnQncyBjdXJyZW50VGFyZ2V0J3MgYHZhbHVlYCwgd2hpY2ggbWF5IGhhdmVcclxuICogY2hhbmdlZCBieSB0aGUgdGltZSB0aGUgaGFuZGxlciBpcyAqYWN0dWFsbHkqIGNhbGxlZC4gIFRoZSBzZWNvbmQgYXJndW1lbnRcclxuICogaXMgdGhlIG9yaWdpbmFsIGV2ZW50LCB3aGljaCBtaWdodCBzdGlsbCBoYXZlIHNvbWUgdXNlZnVsIGZpZWxkcyBvbiBpdFxyXG4gKiBsaWtlIGBtb3VzZVhgIG9yIHNvbWV0aGluZywgYnV0IGlzIHN0YWxlIGF0IGxlYXN0IGluIHJlZ2FyZHMgdG8gdGhlXHJcbiAqIGVsZW1lbnQgaXQgcmVmZXJlbmNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBc3luY0hhbmRsZXIoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHsgY2FwdHVyZSwgZGVib3VuY2UgfSkge1xyXG4gICAgICAgIC8vIEFsd2F5cyByZXByZXNlbnRzIHdoYXRldmVyIHByb21pc2UgaXMgY3VycmVudGx5IGJlaW5nIHdhaXRlZCBvbiwgb3IgbnVsbCBpZiBub25lLlxyXG4gICAgICAgIGNvbnN0IFtwcm9taXNlLCBzZXRQcm9taXNlLCBnZXRQcm9taXNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgaG93IG1hbnkgdGltZXMgd2UndmUgYWN0dWFsbHkgY2FsbGVkIHRoZSBhc3luYyBoYW5kbGVyXHJcbiAgICAgICAgY29uc3QgW3J1bkNvdW50LCBzZXRSdW5Db3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICBjb25zdCBbcmVzb2x2ZUNvdW50LCBzZXRSZXNvbHZlQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgICAgY29uc3QgW3JlamVjdENvdW50LCBzZXRSZWplY3RDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICAvLyBJZiB3ZSdyZSBzZXQgdG8gdXNlIGEgZGVib3VuY2UsIHRoZW4gd2hlbiB0aGUgdGltZW91dCBmaW5pc2hlcyxcclxuICAgICAgICAvLyB0aGUgcHJvbWlzZSBmcm9tIHRoaXMgc3RhdGUgb2JqZWN0IGlzIHRyYW5zZmVycmVkIG92ZXIgdG8gZWl0aGVyIFxyXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHByb21pc2Ugb3IgdGhlIHBlbmRpbmcgcHJvbWlzZS5cclxuICAgICAgICBjb25zdCBbZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIsIHNldERlYm91bmNlZFByb21pc2VTdGFydGVyLCBnZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICAvLyBXaGVuIHdlIHdhbnQgdG8gc3RhcnQgYSBuZXcgcHJvbWlzZSwgd2Ugd29uJ3QgYWxsb3cgaXQgdG8gc3RhcnQgaWYgb25lIGlzIHN0aWxsIHJ1bm5pbmcuXHJcbiAgICAgICAgLy8gSW4gdGhhdCBjYXNlLCB3ZSBzdG9yZSB0aGUgcHJvbWlzZSAob3IgcmF0aGVyLCBhIHdheSB0byBzdGFydCB0aGUgcHJvbWlzZSkgaW4gc3RhdGUuXHJcbiAgICAgICAgY29uc3QgW3BlbmRpbmdQcm9taXNlU3RhcnRlciwgc2V0UGVuZGluZ1Byb21pc2VTdGFydGVyLCBnZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gYHVuZGVmaW5lZGAgYW5kIFwibm8gZXJyb3IgaGFzIGJlZW4gdGhyb3duXCIuXHJcbiAgICAgICAgLy8gV2UgY291bGQgYWxzbyBrZWVwIGEgc2VwYXJhdGUgYm9vbGVhbiBzdGF0ZSB0byB0cmFjayB0aGF0LlxyXG4gICAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3IsIGdldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvciwgZ2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IFtjdXJyZW50Q2FwdHVyZSwgc2V0Q3VycmVudENhcHR1cmUsIGdldEN1cnJlbnRDYXB0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW2hhc0NhcHR1cmUsIHNldEhhc0NhcHR1cmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgZGVib3VuY2UuIExvZ2ljYWxseSB0aGlzIGhhcHBlbnMgYmVmb3JlIHRoZSBtYWluIHN0ZXAgYXMgYSBzb3J0IG9mIHN0ZXAgMC5cclxuICAgICAgICAvLyBSZXNldHMgdGhlIHRpbWVvdXQgYW55IHRpbWUgdGhlIGhhbmRsZXIgd2FzIHJlcXVlc3RlZCB0byBiZSBjYWxsZWQgYWdhaW5cclxuICAgICAgICAvLyBhbmQgd2hlbiBpdCBmaW5pc2hlcywgYWN0dWFsbHkgY2FsbCB0aGUgaGFuZGxlciAob3Igc2V0IGl0IGFzIHRoZSBwZW5kaW5nIHByb21pc2UpXHJcbiAgICAgICAgdXNlVGltZW91dCh7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IGRlYm91bmNlID8/IG51bGwsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShkZWJvdW5jZWRQcm9taXNlU3RhcnRlcik7XHJcbiAgICAgICAgICAgICAgICBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcihudWxsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJpZ2dlckluZGV4OiBkZWJvdW5jZWRQcm9taXNlU3RhcnRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFNlZSBpZiB3ZSBzaG91bGQgc2V0IG91ciBjdXJyZW50IHByb21pc2UgdG8gYmUgd2hhdGV2ZXIgdGhlIHBlbmRpbmcgcHJvbWlzZSBpc1xyXG4gICAgICAgIC8vICh1c3VhbGx5IGJlY2F1c2UgdGhlIGN1cnJlbnQgcHJvbWlzZSBmaW5pc2hlZCBhbmQgYmVjYW1lIG51bGwpLlxyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIE91ciBjdXJyZW50IHByb21pc2UganVzdCBmaW5pc2hlZCBhbmQgdGhlcmUncyBvbmUgd2FpdGluZz9cclxuICAgICAgICAgICAgaWYgKHByb21pc2UgPT0gbnVsbCAmJiBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc2V0UGVuZGluZ1Byb21pc2VTdGFydGVyKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3Byb21pc2UsIHBlbmRpbmdQcm9taXNlU3RhcnRlcl0pO1xyXG4gICAgICAgIC8vIENhbGxlZCBhbnkgdGltZSB0aGUgYXN5bmMgaGFuZGxlciBpcyBhYm91dCB0byBiZSBjYWxsZWQgZm9yIHdoYXRldmVyIHJlYXNvbixcclxuICAgICAgICAvLyBleGNlcHQgZm9yIGRlYm91bmNlLCB3aGljaCBjb21lcyBmaXJzdCwgYXMgYSBzb3J0IG9mIFwic3RlcCAwXCIuXHJcbiAgICAgICAgLy8gSGFuZGxlcyBhbGwgdGhlIG5lY2Vzc2FyeSBib2lsZXJwbGF0ZSByZWxhdGVkIHRvIGNob29zaW5nIHdoZXRoZXIgdG9cclxuICAgICAgICAvLyBydW4gb3Igc2V0IGFzIHBlbmRpbmcsIHJlc2V0dGluZyBzdGF0ZSB2YXJpYWJsZXMsIGV0Yy5cclxuICAgICAgICBmdW5jdGlvbiB3YW50VG9TdGFydEFOZXdQcm9taXNlKHN0YXJ0UHJvbWlzZSkge1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeVJ1bm5pbmdQcm9taXNlID0gKGdldFByb21pc2UoKSAhPSBudWxsKTtcclxuICAgICAgICAgICAgLy8gQm9pbGVycGxhdGUgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIHByb21pc2Ugc3RhcnRlclxyXG4gICAgICAgICAgICBsZXQgUCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc3RhcnRzLCBub3RpZnkgdGhlIGNhbGxlclxyXG4gICAgICAgICAgICAgICAgc2V0UnVuQ291bnQociA9PiArK3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBjb21wbGV0ZXMsIG5vdGlmeSB0aGUgY2FsbGVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvblRoZW4gPSAoKSA9PiB7IHNldFJlc29sdmVDb3VudChjID0+ICsrYyk7IH07XHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGZhaWxzLCBzYXZlIHRoZSBlcnJvciBhbmQgbm90aWZ5IHRoZSBjYWxsZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2F0Y2ggPSAoZXgpID0+IHsgc2V0RXJyb3IoZXgpOyBzZXRIYXNFcnJvcih0cnVlKTsgc2V0UmVqZWN0Q291bnQoYyA9PiArK2MpOyB9O1xyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBzZXR0bGVzLCByZXNldCBvdXIgc3RhdGUgc28gd2UgY2FuIFxyXG4gICAgICAgICAgICAgICAgLy8gcnVuIGEgcGVuZGluZyBwcm9taXNlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25GaW5hbGx5ID0gKCkgPT4geyBzZXRQcm9taXNlKG51bGwpOyB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHN5bmMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBoYW5kbGVyIGlzIHN5bmNocm9ub3VzXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdGFydFByb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCByZXR1cm5lZCBzdWNjZXNzZnVsbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRoZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCB0aHJldyBhbiBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICAvLyBCYWlsIG91dCBlYXJseS5cclxuICAgICAgICAgICAgICAgICAgICBvbkNhdGNoKGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBvbkZpbmFsbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBoYW5kbGVyIGlzIGFzeW5jaHJvbm91c1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7IGF3YWl0IHJlc3VsdDsgfSkoKS50aGVuKG9uVGhlbikuY2F0Y2gob25DYXRjaCkuZmluYWxseShvbkZpbmFsbHkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIWFscmVhZHlSdW5uaW5nUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgaW1tZWRpYXRlbHksIGJlY2F1c2UgdGhlcmUgd2Fzbid0IG9uZSBydW5uaW5nIGFscmVhZHkuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFByb21pc2UgPSBQKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFByb21pc2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZCBvbiEgVGhlIGhhbmRsZXIgd2FzIGFjdHVhbGx5IHN5bmNocm9ub3VzLCBhbmQgYWxyZWFkeSBmaW5pc2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBCYWlsIG91dCBlYXJseS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzRXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb21pc2UobmV4dFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3Qgc3RhcnQgdGhlIHByb21pc2UgeWV0LCBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBhbGxvdyBpdCB0byBzdGFydCBpbiB0aGUgZnV0dXJlIGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIoXyA9PiBQKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICAgICBnZXRTeW5jSGFuZGxlcixcclxuICAgICAgICAgICAgZ2V0Q3VycmVudENhcHR1cmUsXHJcbiAgICAgICAgICAgIGNhbGxDb3VudDogcnVuQ291bnQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRDYXB0dXJlLFxyXG4gICAgICAgICAgICBoYXNDYXB0dXJlLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiAocHJvbWlzZSAhPSBudWxsKSxcclxuICAgICAgICAgICAgaGFzRXJyb3IsXHJcbiAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICByZXNvbHZlQ291bnQsXHJcbiAgICAgICAgICAgIHJlamVjdENvdW50LFxyXG4gICAgICAgICAgICBzZXR0bGVDb3VudDogcmVqZWN0Q291bnQgKyByZXNvbHZlQ291bnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3luY0hhbmRsZXIoYXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN5bmNIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soZnVuY3Rpb24gc3luY0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhc3luY0hhbmRsZXIgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG1vc3Qgc2lnbmlmaWNhbnQgaW5mb3JtYXRpb24gZnJvbSB0aGUgZXZlbnQgYXQgdGhpcyB0aW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwcm9taXNlIGNvdWxkIGFjdHVhbGx5IGJlIGNhbGxlZCBtdWNoIGxhdGVyXHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBlbGVtZW50J3MgdmFsdWUgKGV0Yy4pIGhhcyBjaGFuZ2VkLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBjYXB0dXJlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDYXB0dXJlKGNhcHR1cmVkKTtcclxuICAgICAgICAgICAgICAgIHNldEhhc0NhcHR1cmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFByb21pc2UgPSAoKSA9PiBhc3luY0hhbmRsZXIoY2FwdHVyZWQsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWJvdW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShzdGFydFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIoXyA9PiBzdGFydFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jSGFuZGxlciA9PSBudWxsID8gdW5kZWZpbmVkIDogc3luY0hhbmRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikgeyByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7IH1cclxuZnVuY3Rpb24gaXNWb2lkKHYpIHsgcmV0dXJuIHYgPT0gdW5kZWZpbmVkOyB9XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hc3luYy1oYW5kbGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gKGNhbGxiYWNrICE9IG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAvLyB0aGF0IGFsc28gY2FsbHMgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYWdhaW4uXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2sobXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2hhc0NhbGxiYWNrXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFuaW1hdGlvbi1mcmFtZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8vIFVzZWQgaW5zdGVhZCBvZiB1bmRlZmluZWQgaW4gY2FzZSB1bmRlZmluZWQgaXMgYSBcclxuLy8gdHlwZSB0aGF0J3MgZnJlcXVlbnRseSB1c2VkIGluIHRoZSB1c2VkIHVzZSBjYXNlLlxyXG5jb25zdCBOZXZlclNldCA9IFN5bWJvbChcIm5ldmVyLXNldFwiKTtcclxuLyoqXHJcbiAqIFJldHVybnMgYSB2YWx1ZSB0aGF0IGRvZXMgbm90IGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSBwcm92aWRlZCBnZXR0ZXIgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlLCBqdXN0IGluIGNhc2UgaXQncyBleHBlbnNpdmUuXHJcbiAqXHJcbiAqIE9wdGlvbmFsbHksIHRoZSB2YWx1ZSBjYW4gZGVwZW5kIG9uIGEgc2V0IG9mIGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBnZXR0ZXIuXHJcbiAqXHJcbiAqIEVmZmVjdGl2ZWx5LCB0aGlzIGlzIGB1c2VNZW1vYCwgZXhjZXB0IGl0IHBhc3NlcyBpdHMgZGVwZW5kZW5jaWVzIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0gZ2V0dGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byB1c2VcclxuICogQHBhcmFtIGFyZ3MgT3B0aW9uYWwgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBvbmx5IGJlIGNhbGxlZCBhZ2FpbiBpZiB0aGVzZSBjaGFuZ2UuXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29uc3RhbnQoZ2V0dGVyLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKE5ldmVyU2V0KTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHNldFZhbHVlKHByZXYgPT4gZ2V0dGVyKC4uLmFyZ3MpKTsgfSwgYXJncyk7XHJcbiAgICBpZiAodmFsdWUgPT09IE5ldmVyU2V0KVxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoLi4uYXJncyk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNvbnN0YW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xyXG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZywgZ2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xhc3REcm9wRWZmZWN0LCBzZXRMYXN0RHJvcEVmZmVjdCwgZ2V0TGFzdERyb3BFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IChlZmZlY3RBbGxvd2VkID8/IFwiYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdJbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbWltZVR5cGUsIGRhdGFdIG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25EcmFnRW5kID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoe1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQsXHJcbiAgICAgICAgICAgIHJlZlxyXG4gICAgICAgIH0pLCBwKTtcclxuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxyXG4gICAgICAgIGRyYWdnaW5nLFxyXG4gICAgICAgIGdldERyYWdnaW5nLFxyXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cclxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXHJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG47XHJcbjtcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUZpbGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGZpbGVOYW1lO1xyXG4gICAgZXJyb3JUeXBlO1xyXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUsIGJhc2UpIHtcclxuICAgICAgICBzdXBlcihiYXNlPy5tZXNzYWdlID8/IFwiQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQgcmVhZGluZyB0aGUgZmlsZS5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gYmFzZT8ubmFtZTtcclxuICAgIH1cclxufVxyXG4vL01lcmdlZFByb3BzPFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RSwgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJvbkRyYWdFbnRlclwiIHwgXCJvbkRyYWdMZWF2ZVwiIHwgXCJvbkRyYWdPdmVyXCIgfCBcIm9uRHJvcFwiPj4sIFA+O1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHBhYmxlKHsgZWZmZWN0IH0pIHtcclxuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbiwgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZEZpbGVzLCBzZXREcm9wcGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BFcnJvciwgc2V0RHJvcEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBBbGwgdGhlIHByb21pc2VzIGdlbmVyYXRlZCBmcm9tIHRoZSBkcm9wIGV2ZW50cy5cclxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXHJcbiAgICBjb25zdCBkcm9wUHJvbWlzZXNSZWYgPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQcm9taXNlSW5kZXgsIHNldEN1cnJlbnRQcm9taXNlSW5kZXgsIGdldEN1cnJlbnRQcm9taXNlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxyXG4gICAgLy8gSWYgdGhlcmUgaXMgb25lLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIHNpbmNlIGl0IHJ1bnMgdGhlIHNhbWUgY2hlY2suXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb21pc2VDb3VudF0pO1xyXG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXHJcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxyXG4gICAgLy8gRmluYWxseSwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnltb3JlIHByb21pc2VzLlxyXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXHJcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXHJcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcclxuICAgICAgICAgICAgY3VycmVudFByb21pc2UudGhlbigoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkb25lLCBhcmUgdGhlcmUgbW9yZSBwcm9taXNlcyBpbiB0aGUgcXVldWU/XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgcmVmID0gdXNlUmVmPEU+KG51bGwpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cclxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gKGVmZmVjdCA/PyBcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWltZVR5cGVzLmFkZCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7IHR5cGU6IGl0ZW0udHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obmV3RmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcclxuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXHJcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRmlsZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wUHJvbWlzZXNSZWYuY3VycmVudC5wdXNoKFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoeyBvbkRyYWdFbnRlciwgb25EcmFnTGVhdmUsIG9uRHJhZ092ZXIsIG9uRHJvcCB9KSwgcCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VEcm9wcGFibGVQcm9wcyxcclxuICAgICAgICBmaWxlc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgZHJvcHBlZEZpbGVzLFxyXG4gICAgICAgIGRyb3BwZWRTdHJpbmdzLFxyXG4gICAgICAgIGRyb3BFcnJvcixcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxyXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcclxuICpcclxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXHJcbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cclxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxyXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXHJcbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxyXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cclxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXHJcbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cclxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxyXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqXHJcbiAqXHJcbiAqIEluIHN1bW1hcnk6XHJcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cclxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXHJcbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cclxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cclxuICpcclxuICpcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5sZXQgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBudWxsO1xyXG5sZXQgbGFzdEZvY3VzZWRFbGVtZW50ID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGxhc3RGb2N1c2VkRWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiBnZXRDdXJyZW50bHlGb2N1c2VkRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBjdXJyZW50bHlGb2N1c2VkRWxlbWVudDtcclxufVxyXG5jb25zdCB1cGRhdGVycyA9IG5ldyBTZXQoKTtcclxuZnVuY3Rpb24gZm9jdXNvdXQoZSkge1xyXG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgdXBkYXRlcnMpIHtcclxuICAgICAgICAgICAgZigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIEp1c3Qgd2FpdCBmb3IgdGhlIGZvY3VzaW4gZXZlbnQuXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9jdXNpbihlKSB7XHJcbiAgICBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IGxhc3RGb2N1c2VkRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgZm9yIChsZXQgZiBvZiB1cGRhdGVycykge1xyXG4gICAgICAgIGYoKTtcclxuICAgIH1cclxufVxyXG5sZXQgd2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKCkge1xyXG4gICAgd2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICBmb3IgKGxldCBmIG9mIHVwZGF0ZXJzKSB7XHJcbiAgICAgICAgZigpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHdpbmRvd0JsdXIoKSB7XHJcbiAgICB3aW5kb3dGb2N1c2VkID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBmIG9mIHVwZGF0ZXJzKSB7XHJcbiAgICAgICAgZigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3RpdmVFbGVtZW50KCkge1xyXG4gICAgLy8gVE9ETzogSXMgdGhpcyBhY3R1YWxseSBiZXR0ZXIgdGhhbiB1c2luZyBwcm9wZXIgc3RhdGUgbWFuYWdlbWVudD9cclxuICAgIGNvbnN0IFtpLCBzZXRJXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBGID0gKCkgPT4gc2V0SShpID0+ICsraSk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZXJzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cywgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVycy5hZGQoRik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlcnMuZGVsZXRlKEYpO1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhY3RpdmVFbGVtZW50OiBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCxcclxuICAgICAgICBsYXN0QWN0aXZlRWxlbWVudDogbGFzdEZvY3VzZWRFbGVtZW50LFxyXG4gICAgICAgIGdldEFjdGl2ZUVsZW1lbnQ6IGdldEN1cnJlbnRseUZvY3VzZWRFbGVtZW50LFxyXG4gICAgICAgIGdldExhc3RBY3RpdmVFbGVtZW50OiBnZXRMYXN0Rm9jdXNlZEVsZW1lbnQsXHJcbiAgICAgICAgd2luZG93Rm9jdXNlZFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzRm9jdXMoe30gPSB7fSkge1xyXG4gICAgLy9jb25zdCBbZm9jdXNlZEVsZW1lbnQsIHNldEZvY3VzZWRFbGVtZW50LCBnZXRGb2N1c2VkRWxlbWVudF0gPSB1c2VTdGF0ZTxFdmVudFRhcmdldCB8IG51bGw+KG51bGwpO1xyXG4gICAgLy9jb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL2NvbnN0IFtmb2N1c2VkSW5uZXIsIHNldEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCgpO1xyXG4gICAgY29uc3QgdXNlSGFzRm9jdXNQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZm9jdXNlZCA9IHVzZU1lbW8oKCkgPT4geyByZXR1cm4gZWxlbWVudCA9PSBhY3RpdmVFbGVtZW50OyB9LCBbZWxlbWVudCwgYWN0aXZlRWxlbWVudF0pO1xyXG4gICAgY29uc3QgZm9jdXNlZElubmVyID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50Py5jb250YWlucyhhY3RpdmVFbGVtZW50KSA/PyBmYWxzZTsgfSwgW2VsZW1lbnQsIGFjdGl2ZUVsZW1lbnRdKTtcclxuICAgIGNvbnN0IGxhc3RGb2N1c2VkID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50OyB9LCBbZWxlbWVudCwgbGFzdEFjdGl2ZUVsZW1lbnRdKTtcclxuICAgIGNvbnN0IGxhc3RGb2N1c2VkSW5uZXIgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQ/LmNvbnRhaW5zKGxhc3RBY3RpdmVFbGVtZW50KSA/PyBmYWxzZTsgfSwgW2VsZW1lbnQsIGxhc3RBY3RpdmVFbGVtZW50XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUhhc0ZvY3VzUHJvcHMsXHJcbiAgICAgICAgZm9jdXNlZEVsZW1lbnQ6IGFjdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgbGFzdEZvY3VzZWRFbGVtZW50OiBsYXN0QWN0aXZlRWxlbWVudCxcclxuICAgICAgICBmb2N1c2VkLFxyXG4gICAgICAgIGZvY3VzZWRJbm5lcixcclxuICAgICAgICBsYXN0Rm9jdXNlZCxcclxuICAgICAgICBsYXN0Rm9jdXNlZElubmVyXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcclxuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xyXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxyXG4gKiBjaGlsZCBjb21wb25lbnRzIG9uY2UgdGhleSBoYXZlIHJlbmRlcmVkLlxyXG4gKlxyXG4gKiBUaGlzIGhvb2sgaXMgc2xpZ2h0bHkgbW9yZSBjb21wbGljYXRlZCBpbiB0aGF0IGl0IHJldHVybnMgYm90aCBhXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2ssIGJ1dCBhbHNvIGEgaG9vayB0aGF0IGVhY2ggY2hpbGQgd2lsbCBuZWVkXHJcbiAqIHRvIHVzZTogYHVzZU1hbmFnZWRDaGlsZGAuICBJdCdzIHN0YWJsZSBhY3Jvc3MgcmVuZGVycywgc28ganVzdFxyXG4gKiB0b3NzIGl0IGludG8gYSBgQ29udGV4dGAgc28gdGhlIGNoaWxkcmVuIGNhbiBoYXZlIGFjY2VzcyB0byBpdC5cclxuICogVGhpcyBmdW5jdGlvbiByZWdpc3RlcnMgdGhlIGNoaWxkIHdpdGggdGhlIHBhcmVudCBhbmQgcHJvdmlkZXNcclxuICogaXQgd2l0aCBhbnkgcmVxdWVzdGVkIGluZm9ybWF0aW9uLCBidXQgZG9lc24ndCBkbyBhbnl0aGluZyBlbHNlXHJcbiAqIHVudGlsIGl0IHVubW91bnRzIGFuZCByZXRyYWN0cyB0aGF0IGluZm9ybWF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkTWFuYWdlcigpIHtcclxuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cclxuICAgIC8vIFVzZWQgdG8gbWFrZSBzdXJlIHRoYXQgYW55IHRpbWUgdGhlIGFycmF5IG9mIG1hbmFnZWQgY2hpbGRyZW4gdXBkYXRlcyxcclxuICAgIC8vIHdlIGFsc28gcmUtcmVuZGVyLlxyXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWxDaGlsZHJlbk1vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkLCBnZXRUb3RhbENoaWxkcmVuTW91bnRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuVW5vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgZ2V0VG90YWxDaGlsZHJlblVub3VudGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkID0gdG90YWxDaGlsZHJlbk1vdW50ZWQgLSB0b3RhbENoaWxkcmVuVW5vdW50ZWQ7XHJcbiAgICBjb25zdCBtYW5hZ2VkQ2hpbGRyZW4gPSB1c2VSZWYoW10gLyoqIFRPRE86IEFueSBwcm9ibGVtcyBjYXVzZWQgYnkgdXNpbmcgYW4gYXJyYXkgd2hlbiBpdCBzaG91bGQgYmUgYW4gb2JqZWN0PyAqLyk7XHJcbiAgICBjb25zdCBtb3VudGVkQ2hpbGRyZW4gPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgbW91bnRPcmRlciA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgaW5kaWNlc0J5RWxlbWVudCA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBnZXRUb3RhbENoaWxkcmVuTW91bnRlZCgpO1xyXG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcclxuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcclxuICAgICAgICAgICAgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyBtb3VudE9yZGVyLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpOyBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBudWxsOyBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpOyB9O1xyXG4gICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgLy8gQXMgc29vbiBhcyB0aGUgY29tcG9uZW50IG1vdW50cywgbm90aWZ5IHRoZSBwYXJlbnQgYW5kIHJlcXVlc3QgYSByZXJlbmRlci5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKFtwcmV2RWxlbWVudCwgcHJldkluZGV4XSwgY2hhbmdlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LnNldChlbGVtZW50LCBpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChpbmZvLmluZGV4ID09IHVuZGVmaW5lZCwgXCJUd28gY2hpbGRyZW4gd2l0aCB0aGUgc2FtZSBpbmRleCB3ZXJlIGFkZGVkLCB3aGljaCBtYXkgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbZWxlbWVudCwgaW5mby5pbmRleF0pO1xyXG4gICAgICAgIC8vIEFueSB0aW1lIG91ciBjaGlsZCBwcm9wcyBjaGFuZ2UsIG1ha2UgdGhhdCBpbmZvcm1hdGlvbiBhdmFpbGFibGUgZ2VuZXJhbGx5LlxyXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxyXG4gICAgICAgIC8vIGluZmluaXRlIGxvb3AgZXZlcnkgdGltZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gaXMgcGFzc2VkLlxyXG4gICAgICAgIC8vIEl0IGNvbWVzIGluIGZyb20gdGhlIHByb3BzIHNvIHRoZSBjaGlsZCB3YXMgYWxyZWFkeSB1cGRhdGVkIGJ5IGl0IC0tXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcclxuICAgICAgICAvLyBcIm9uQ2xpY2tcIiB1cGRhdGVzIG9yIHdoYXRldmVyLiAgVGhlIHJlbGV2YW50IGNoaWxkIGFscmVhZHkga25vd3MsXHJcbiAgICAgICAgLy8gYW5kIHRoYXQncyB3aGF0IG1hdHRlcnMuXHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XHJcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xyXG4gICAgICAgIHJldHVybiB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTWFuYWdlZENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQ6IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxyXG4gICAgICAgIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZENoaWxkcmVuLmN1cnJlbnQsXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudDogaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LFxyXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxyXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZCxcclxuICAgICAgICBnZXRNb3VudEluZGV4XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZE1hbmFnZXIgfSBmcm9tIFwiLi91c2UtY2hpbGQtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VIYXNGb2N1cyB9IGZyb20gXCIuL3VzZS1oYXMtZm9jdXNcIjtcclxuLyoqXHJcbiAqIEltcGxlbWVudHMgYSByb3ZpbmcgdGFiaW5kZXggc3lzdGVtIHdoZXJlIG9ubHkgb25lIFwiZm9jdXNhYmxlXCJcclxuICogY29tcG9uZW50IGluIGEgc2V0IGlzIGFibGUgdG8gcmVjZWl2ZSBhIHRhYiBmb2N1cy4gKldoaWNoKlxyXG4gKiBvZiB0aG9zZSBlbGVtZW50cyByZWNlaXZlcyBmb2N1cyBpcyBkZXRlcm1pbmVkIGJ5IHlvdSwgYnV0IGl0J3NcclxuICogcmVjb21tZW5kZWQgdG8gb2ZmbG9hZCB0aGF0IGxvZ2ljIHRoZW4gdG8gYW5vdGhlciBob29rLCBsaWtlXHJcbiAqIGB1c2VMaW5lYXJOYXZpZ2F0aW9uYCwgd2hpY2ggbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZVxyXG4gKiBlbGVtZW50IHdpdGggdGhlIGFycm93IGtleXMsIGB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uYCwgd2hpY2hcclxuICogbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHR5cGVhaGVhZCwgb3JcclxuICogYHVzZUxpc3ROYXZpZ2F0aW9uYCBpZiB5b3UganVzdCB3YW50IGV2ZXJ5dGhpbmcgYnVuZGxlZCB0b2dldGhlci5cclxuICpcclxuICogTm90ZSB0aGF0IHRoZSBjaGlsZCBob29rIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkXHJcbiAqIGJ5IGV2ZXJ5IGNoaWxkIHRoYXQgdXNlcyB0aGlzIHJvdmluZyB0YWJpbmRleCBsb2dpYy4gIFRoZVxyXG4gKiBwcm9wLW1vZGlmeWluZyBob29rICp0aGF0KiBob29rIHJldHVybnMgc2hvdWxkIHRoZW4gYmUgdXNlZFxyXG4gKiBvbiB0aGUgY2hpbGQncyBlbGVtZW50LCBhcyB3ZWxsIGFzIGFueSBvdGhlciBlbGVtZW50cyB5b3UnZCBsaWtlXHJcbiAqIHRvIGJlIGV4cGxpY2l0bHkgbWFkZSB1bnRhYmJhYmxlIHRvby5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleCh7IHRhYmJhYmxlSW5kZXggfSkge1xyXG4gICAgY29uc3QgeyBmb2N1c2VkLCBmb2N1c2VkSW5uZXIsIHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKCk7XHJcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xyXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aHJlZSB0aGluZ3MgcmVsYXRlZCB0byB0aGUgY3VycmVudGx5IHRhYmJhYmxlIGVsZW1lbnQncyBpbmRleDpcclxuICAgIC8vIFdoYXQgaXQgaXMsXHJcbiAgICAvLyBXaGF0IGl0IHdhcyB0aGUgbGFzdCB0aW1lLFxyXG4gICAgLy8gV2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxyXG4gICAgLy8gRm9yIHRoaXMgcmVhc29uLCBib29sZWFuIHwgbnVsbCBpcyBzZW1hbnRpY2FsbHkgaW50ZW50aW9uYWwsIGlmIHRlY2huaWNhbGx5IHVubmVjZXNzYXJ5IC0tIFxyXG4gICAgLy8gdHJ1ZSBvciBmYWxzZSBpbXBseSBhIGNoYW5nZSBqdXN0IGhhcHBlbmVkIGFuZCB0aGF0IHRhYmJhYmxlSW5kZXggIT0gcHJldlRhYmJhYmxlLmN1cnJlbnQsIGFuZCBudWxsIGltcGxpZXMgbm8gY2hhbmdlLlxyXG4gICAgLy9jb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xyXG4gICAgLy8gQ2FsbCB0aGUgaG9vayB0aGF0IGFsbG93cyB1cyB0byBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gd2hvIHByb3ZpZGUgaXRcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VNYW5hZ2VkQ2hpbGQsIGluZGljZXNCeUVsZW1lbnQsIC4uLnJlc3QgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgLy8gRG9lc24ndCBkbyBhbnl0aGluZywgYnV0IGhlcmUgYmVjYXVzZSB0aGVyZSdzIGEgcHJldHR5IGRlY2VudCBjaGFuY2UgaXQgbWlnaHQgaW4gdGhlIGZ1dHVyZS5cclxuICAgIGNvbnN0IHVzZVJvdmluZ1RhYkluZGV4UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkodXNlSGFzRm9jdXNQcm9wcyh7fSksIHByb3BzKSwgW10pO1xyXG4gICAgY29uc3QgZm9jdXNPbkNoYW5nZSA9IChmb2N1c2VkSW5uZXIgIT0gZmFsc2UpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXHJcbiAgICAvLyBub3RpZnkgdGhlIHByZXZpb3VzIGNoaWxkIHRoYXQgaXQncyBubyBsb25nZXIgdGFiYmFibGUsXHJcbiAgICAvLyBhbmQgbm90aWZ5IHRoZSBuZXh0IGNoaWxkIHRoYXQgaXMgYWxsb3dlZCB0byBiZSB0YWJiZWQgdG8uXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YWJiYWJsZUluZGV4ICE9IHByZXZUYWJiYWJsZS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5bdGFiYmFibGVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJldlRhYmJhYmxlLmN1cnJlbnQgPT0gdHlwZW9mIHRhYmJhYmxlSW5kZXggJiYgKHR5cGVvZiBwcmV2VGFiYmFibGUuY3VycmVudCAhPSBcIm51bWJlclwiIHx8IGlzRmluaXRlKHByZXZUYWJiYWJsZS5jdXJyZW50KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3ByZXZUYWJiYWJsZS5jdXJyZW50XT8uc2V0VGFiYmFibGUoZmFsc2UsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bdGFiYmFibGVJbmRleF0uc2V0VGFiYmFibGUodHJ1ZSwgZm9jdXNPbkNoYW5nZSA/IFwiZm9jdXNcIiA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICBwcmV2VGFiYmFibGUuY3VycmVudCA9IHRhYmJhYmxlSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFiYmFibGVJbmRleCwgZm9jdXNPbkNoYW5nZV0pO1xyXG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XS5zZXRUYWJiYWJsZSh0cnVlLCBcImZvY3VzXCIpO1xyXG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNldFRhYmJhYmxlID0gdXNlQ2FsbGJhY2soKHRhYmJhYmxlLCBzaG91bGRGb2N1cykgPT4ge1xyXG4gICAgICAgICAgICBzZXRUYWJiYWJsZTIodGFiYmFibGUpO1xyXG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2hvdWxkRm9jdXMpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG91bGRGb2N1cyghIXNob3VsZEZvY3VzKTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIHNldFRhYmJhYmxlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XHJcbiAgICAgICAgY29uc3QgW3RhYmJhYmxlLCBzZXRUYWJiYWJsZTJdID0gdXNlU3RhdGUoZ2V0VGFiYmFibGVJbmRleCgpID09IGluZm8uaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IFtzaG91bGRGb2N1cywgc2V0U2hvdWxkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgLy9jb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudDxDaGlsZEVsZW1lbnQ+KCk7XHJcbiAgICAgICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBzaG91bGRGb2N1cyAmJiBcImZvY3VzXCIgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvdWxkRm9jdXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBbZWxlbWVudCwgc2hvdWxkRm9jdXNdKTtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXHJcbiAgICAgICAgICAgIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTWFuYWdlZENoaWxkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4UHJvcHMsXHJcbiAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcclxuICAgICAgICBmb2N1c1NlbGYsXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utcm92aW5nLXRhYmluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbi8qKlxyXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcclxuICogdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdGhlIGFycm93IGtleXMuXHJcbiAqXHJcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGluZWFyTmF2aWdhdGlvbih7IGdldEluZGV4LCBzZXRJbmRleCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uIH0pIHtcclxuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XHJcbiAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KCk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFiYmFibGUgaW5kZXggbmV2ZXIgZXNjYXBlcyB0aGUgYm91bmRzIG9mIGFsbCBhdmFpbGFibGUgY2hpbGRyZW5cclxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGlsZENvdW50ID4gMCAmJiBpbmRleCA+PSBjaGlsZENvdW50KSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGNoaWxkQ291bnQgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnRdKTtcclxuICAgIC8vIFRoZXNlIGFsbG93IHVzIHRvIG1hbmlwdWxhdGUgd2hhdCBvdXIgY3VycmVudCB0YWJiYWJsZSBjaGlsZCBpcy5cclxuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KGkgPT4gLS1pKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9FbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgtMSk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIC8vIFByZWZlciB0aGUgcGFyZW50IGVsZW1lbnQncyBkaXJlY3Rpb24gc28gdGhhdCB3ZSdyZSBub3QgY2FsbGluZyBnZXRDb21wdXRlZFN0eWxlXHJcbiAgICAgICAgLy8gb24gZXZlcnkgc2luZ2xlIGluZGl2aWR1YWwgY2hpbGQsIHdoaWNoIGlzIGxpa2VseSByZWR1bmRhbnQuXHJcbiAgICAgICAgLy8gVE9ETzogRG9lcyB1c2VMb2dpY2FsRGlyZWN0aW9uIG5lZWQgdG8gaG9sZCBhIHBlci1yZW5kZXIgJiBwZXItZWxlbWVudCBjYWNoZSB0byBtYWtlIHRoaXMgd29yaz9cclxuICAgICAgICAvLyBPciBkb2VzIHRoZSBicm93c2VyIGF1dG9tYXRpY2FsbHkgY2FjaGUgdGhlIGNvbXB1dGF0aW9ucyB1bnRpbCBzb21ldGhpbmcgY2hhbmdlcz9cclxuICAgICAgICAvLyBHaXZlbiB0aGF0IHRoZSB2YWx1ZXMgYXJlIGxpdmUsIGl0IHNlZW1zIGxpa2UgaXQgc2hvdWxkIGJlIHRoZSBsYXR0ZXIuLi5cclxuICAgICAgICBjb25zdCB7IGNvbnZlcnRFbGVtZW50U2l6ZSwgZ2V0TG9naWNhbERpcmVjdGlvbiB9ID0gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50Py5wYXJlbnRFbGVtZW50ID8/IGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiaW5saW5lXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgcHJvcHMpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcclxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcclxuICAgICAgICBuYXZpZ2F0ZVRvUHJldixcclxuICAgICAgICBuYXZpZ2F0ZVRvU3RhcnQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0VuZCxcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0LCBzZXRJbmRleCB9KSB7XHJcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxyXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXHJcbiAgICAvLyBOZXh0LCBrZWVwIGEgbWFwcGluZyBvZiB0eXBlYWhlYWQgdmFsdWVzIHRvIGluZGljZXMgZm9yIGZhc3RlciBzZWFyY2hpbmcuXHJcbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxyXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VUaW1lb3V0KHsgdGltZW91dDogdHlwZWFoZWFkVGltZW91dCA/PyAxMDAwLCBjYWxsYmFjazogKCkgPT4geyBzZXRDdXJyZW50VHlwZWFoZWFkKG51bGwpOyBzZXRJbnZhbGlkVHlwZWFoZWFkKG51bGwpOyB9LCB0cmlnZ2VySW5kZXg6IGN1cnJlbnRUeXBlYWhlYWQgfSk7XHJcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIEhhbmRsZSB0eXBlYWhlYWQgZm9yIGlucHV0IG1ldGhvZCBlZGl0b3JzIGFzIHdlbGxcclxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcclxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxyXG4gICAgY29uc3QgW2ltZUFjdGl2ZSwgc2V0SW1lQWN0aXZlLCBnZXRJbWVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxyXG4gICAgLy8gKGJ1dCB3aXRoaW4gdGhlIHNhbWUgdGFzaywgd2hpY2gsIFRPRE8sIGNvdWxkIGJlIGJyb3dzZXItZGVwZW5kZW50KSxcclxuICAgIC8vIHdlIGNhbiB1c2UgdGhpcyB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50IHdlJ3JlIGxpc3RlbmluZyBmb3Igb24gdGhlIGZpcnN0IGtleWRvd24uXHJcbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmV4dFR5cGVhaGVhZENoYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xyXG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcclxuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcclxuICAgICAgICBsZXQgY29tcGFyZTtcclxuICAgICAgICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHR5cGVhaGVhZCwgb25seSBjb21wYXJlIGEgc3RyaW5nIG9mIHRoZSBzYW1lIHNpemUgYXMgb3VyIGN1cnJlbnRseSB0eXBlZCBzdHJpbmcuXHJcbiAgICAgICAgLy8gQnkgbm9ybWFsaXppbmcgdGhlbSBmaXJzdCwgd2UgZW5zdXJlIHRoaXMgYnl0ZS1ieS1ieXRlIGhhbmRsaW5nIG9mIHJhdyBjaGFyYWN0ZXIgZGF0YSB3b3JrcyBvdXQgb2theS5cclxuICAgICAgICBsZXQgc2FmZUxocyA9IGxocy5ub3JtYWxpemUoXCJORkRcIik7XHJcbiAgICAgICAgbGV0IHNhZmVSaHMgPSByaHMudGV4dC5ub3JtYWxpemUoXCJORkRcIikuc3Vic3RyKDAsIHNhZmVMaHMubGVuZ3RoKTtcclxuICAgICAgICBpZiAoY29sbGF0b3IpXHJcbiAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29tcGFyZSA9IHNhZmVMaHMudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHNhZmVSaHMudG9Mb3dlckNhc2UoKSA/PyBcIlwiKTtcclxuICAgICAgICByZXR1cm4gY29tcGFyZTtcclxuICAgIH0pO1xyXG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRlZFR5cGVhaGVhZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cclxuICAgICAgICAgICAgICAgICAgQnV0IHJvdWdobHkgaXNuJ3QgZ29vZCBlbm91Z2ggaWYgdGhlcmUgYXJlIG11bHRpcGxlIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG5cclxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXHJcblxyXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cclxuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cclxuICAgICAgICAgICAgICAgICAgQnV0IGlmIHlvdSdyZSBhbHJlYWR5IGRvaW5nIHR5cGVhaGVhZCBvbiBhbiB1bnNvcnRlZCBsaXN0LCBsaWtlLCBqdW1waW5lc3MgY2FuJ3QgYmUgYXZvaWRlZC5cclxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEJhc2ljYWxseSB3aGF0IHRoaXMgZG9lczogU3RhcnRpbmcgZnJvbSB3aGVyZSB3ZSBmb3VuZCBvdXJzZWx2ZXMgYWZ0ZXIgb3VyIGJpbmFyeSBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxyXG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcclxuICAgICAgICAgICAgICAgICAgKGFuZCBhbHNvIHRoZSBsb3dlc3QgYHVuc29ydGVkSW5kZXhgIHlhZGRhIHlhZGRhIGV4Y2VwdCB0aGF0IGl0IGNvbWVzIGFmdGVyIHVzKS5cclxuXHJcbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGVzIGFyZSwgdGhhbmtzIHRvIHBpZ2VvbmhvbGUgcHJpbmNpcGFsLCBldmVudHVhbGx5IGd1YXJhbnRlZWQgdG8gYmVjb21lXHJcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXHJcbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cclxuICAgICAgICAgICAgICAgICAgdGhlIHJvYWQuIE1heWJlIG9uZSBvciB0d28gY2hhcmFjdGVycyB3b3VsZCBiZSBnb29kIGVub3VnaCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gZ2V0SW5kZXgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcclxuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIGFsbCBpbmRleCB2YWx1ZXMgc2hvdWxkIGJlIHVuaXF1ZSwgdGhlIHJldHVybmVkIHNvcnRlZEluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWdhaW4sIHdlIHNob3VsZCBhbHdheXMgZmluZCBvdXJzZWx2ZXMgYmVjYXVzZSB0aGVyZSBzaG91bGQgYmUgbm8gZHVwbGljYXRlIHZhbHVlcyBpZiBlYWNoIGluZGV4IGlzIHVuaXF1ZS5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RleHRdKTtcclxuICAgICAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKGUpID0+IHsgc2V0SW1lQWN0aXZlKHRydWUpOyB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbWVBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1lQWN0aXZlID0gZ2V0SW1lQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdheSB0aGF0IGRvZXNuJ3Qgc3BsaXQgVVRGLTE2IHN1cnJvZ2F0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGtleSBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSB0eXBlZCBjaGFyYWN0ZXIgT1IgdGhlIFwibmFtZWQga2V5IGF0dHJpYnV0ZVwiIG9mIHRoZSBrZXkgcHJlc3NlZC5cclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXHJcbiAgICAgICAgICAgICAgICAvLyBUaHVzLCBhbnkgb25lLWNoYXJhY3RlciBvciBub24tQVNDSUkgdmFsdWUgZm9yIGBrZXlgIGlzICphbG1vc3QgY2VydGFpbmx5KiBhIHR5cGVkIGNoYXJhY3Rlci5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiIFwiICYmIChnZXRDdXJyZW50VHlwZWFoZWFkKCkgPz8gXCJcIikudHJpbSgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChTcGVjaWZpY2FsbHksIGxldCB0aGUgZXZlbnQgY29udGludWUgcHJvcGFnYXRpb24gaW4gdGhpcyBjYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBiZWZvcmUgdXNlTGF5b3V0RWZmZWN0IGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJlZkVsZW1lbnRQcm9wcyh7IG9uS2V5RG93biwgb25Db21wb3NpdGlvblN0YXJ0LCBvbkNvbXBvc2l0aW9uRW5kLCB9KSwgcHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHNcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXHJcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcclxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxyXG4gKlxyXG4gKiBJdCdzIHVzZWQgaGVyZSB0byBxdWlja2x5IGZpbmQgYSBnb29kIHNwb3QgdG8gc3RhcnQgc2VhcmNoaW5nIGZvciBvdXIgbmV4dCB0eXBlYWhlYWQgY2FuZGlkYXRlLlxyXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXHJcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxyXG4gKiBAcGFyYW0gY29tcGFyYXRvciBDb21wYXJlcyBgd2FudGVkYCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlIGluIGBhcnJheWBcclxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxyXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcclxuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcclxuICAgIHZhciBsYXN0SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xyXG4gICAgICAgIHZhciBjb21wYXJpc29uUmVzdWx0ID0gY29tcGFyYXRvcih3YW50ZWQsIGFycmF5W3Rlc3RJbmRleF0pO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xyXG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcclxuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xyXG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcclxuLyoqXHJcbiAqXHJcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxyXG4gKiBidXQgaXQncyBub3QgYmFkIGZvciBhIGNvbGxhdGlvbiBjcmFzaCBjb3Vyc2UgYW5kIEkgbWlnaHQgdXNlIGl0IGFnYWluLlxyXG4gKiBFdmVuIGp1c3QgYXMgYSBcInRoaXMgaXMgd2h5IGl0J3MgaW1wb3J0YW50IGFuZCBnb29kIHRvIHVzZSB0aGVzZSB0aGluZ3NcIiB0aGluZy5cclxuICpcclxuICogfExhbmcufFRhcmdldHxVc2VyIGlucHV0fGBiYXNlYHxgYWNjZW50YHxgY2FzZWB8YHZhcmlhbnRgfFxyXG4gKiB8LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXxcclxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcclxuICogfEVOfEhpfO+8qO+9iXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxFTnxIaXxoaXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxyXG4gKiB8RU58SGl8QnllfOKdjHzinYx84p2MfOKdjHxcclxuICogfERBfMOlfGFhfOKchXzinIV84pyFfOKdjHxcclxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcclxuICogfERBfMOlfEFhfOKchXzinIV84p2MfOKdjHxcclxuICogfEVOfMOlfGFhfOKdjHzinYx84p2MfOKdjHxcclxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcclxuICogfEVOfMOlfGF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8REF8w6V8YXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcclxuICogfEpQfOOCq3zvvbZ84pyFfOKchXzinIV84pyFfFxyXG4gKiB8SlB844KrfOOBi3zinIV84pyFfOKchXzinYx8XHJcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcclxuICogfEpQfOOCq3zji5V84pyFfOKchXzinYx84p2MfFxyXG4gKiB8SlB844KrfOOCrHzinIV84p2MfOKdjHzinYx8XHJcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcclxuICogfFpIfOe0hXznuqJ84p2MfOKdjHzinYx84p2MfFxyXG4gKlxyXG4gKlxyXG4gKiAoTm90ZSB0byBzZWxmOiBBdCBzb21lIHBvaW50LCB0aGlzIGZpbGUgd2lsbCBwcm9iYWJseSBiZSBub3JtYWxpemVkXHJcbiAqIGJ5IHNvbWVib2R5IGFuZCDvqqogd2lsbCB0dXJuIGJhY2sgaW50byDnnYAuKVxyXG4gKlxyXG4gKi9cclxuY29uc3QgZHVtbXkgPSBudWxsO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBwcm9wZXIga2V5Ym9hcmQgbmF2aWdhdGlvbiBmb3IgY29tcG9uZW50cyBsaWtlIGxpc3Rib3hlcywgYnV0dG9uIGdyb3VwcywgbWVudXMsIGV0Yy5cclxuICpcclxuICogSW4gdGhlIGRvY3VtZW50IG9yZGVyLCB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIFwiZm9jdXNlZFwiIG9yIFwidGFiYmFibGVcIiBlbGVtZW50LCBtYWtpbmcgaXQgYWN0IG1vcmUgbGlrZSBvbmUgY29tcGxldGUgdW5pdCBpbiBjb21wYXJpc29uIHRvIGV2ZXJ5dGhpbmcgYXJvdW5kIGl0LlxyXG4gKiBOYXZpZ2F0aW5nIGZvcndhcmRzL2JhY2t3YXJkcyBjYW4gYmUgZG9uZSB3aXRoIHRoZSBhcnJvdyBrZXlzLCBIb21lL0VuZCBrZXlzLCBvciBhbnkgYW55IHRleHQgZm9yIHR5cGVhaGVhZCB0byBmb2N1cyB0aGUgbmV4dCBpdGVtIHRoYXQgbWF0Y2hlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uIH0pIHtcclxuICAgIGtleU5hdmlnYXRpb24gPz89IFwiZWl0aGVyXCI7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRocmVlIHRoaW5ncyByZWxhdGVkIHRvIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgZWxlbWVudCdzIGluZGV4OlxyXG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cclxuICAgIGNvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc2V0SW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c1NlbGYsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgdGFiYmFibGVJbmRleDogdGFiYmFibGVJbmRleCB9KTtcclxuICAgIGNvbnN0IHsgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4OiBnZXRUYWJiYWJsZUluZGV4LCBzZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dDogMTAwMCB9KTtcclxuICAgIGNvbnN0IHsgbmF2aWdhdGVUb0VuZCwgbmF2aWdhdGVUb0luZGV4LCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9TdGFydCwgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4gfSk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcywgbm90aWZ5IHRoZSBwcmV2aW91c1xyXG4gICAgLy8gYW5kIG5leHQgY2hpbGQgYXMgc3VjaCwgYW5kIG9wdGlvbmFsbHkgZm9jdXMgdGhhdCBuZXh0IG9uZS5cclxuICAgIC8qdXNlTGF5b3V0RWZmZWN0KChbcHJldlRhYmJhYmxlSW5kZXhdKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5vdGlmeWluZyBjaGlsZHJlbiBvZiBpbmRleCBjaGFuZ2UgZnJvbSAke3ByZXZUYWJiYWJsZUluZGV4fSB0byAke3RhYmJhYmxlSW5kZXh9YCk7XHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuW3ByZXZUYWJiYWJsZUluZGV4XT8uc2V0VGFiYmFibGUoZmFsc2UpO1xyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XT8uc2V0VGFiYmFibGUodHJ1ZSlcclxuICAgIH0sIFt0YWJiYWJsZUluZGV4XSkqL1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIGxldCByZXQgPSB1c2VSb3ZpbmdUYWJJbmRleFByb3BzKHByb3BzKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZChpbmZvKTtcclxuICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcywgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsIHRhYmJhYmxlIH0gPSB1c2VSb3ZpbmdUYWJJbmRleENoaWxkKGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzKHsgb25DbGljazogcm92ZVRvU2VsZiB9KSkpLCBwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByb3ZlVG9TZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7IH0sIFtdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzOiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcclxuICAgICAgICAgICAgdGFiYmFibGUsXHJcbiAgICAgICAgICAgIC8vcm92ZVRvU2VsZixcclxuICAgICAgICAgICAgLy9lbGVtZW50XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgbmF2aWdhdGVUb0luZGV4XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsXHJcbiAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICAgICAgdGFiYmFibGVJbmRleCxcclxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcclxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50LFxyXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcclxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcclxuICAgICAgICBuYXZpZ2F0ZVRvUHJldixcclxuICAgICAgICBuYXZpZ2F0ZVRvU3RhcnQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0VuZCxcclxuICAgICAgICBmb2N1c1NlbGYsXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMFxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8XG4gIC8qIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c2VkICAqL1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsImltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IFwid2ljZy1pbmVydFwiO1xyXG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYW4gZWxlbWVudCB0byB0cmFwIGZvY3VzIGJ5IGFwcGx5aW5nIHRoZSBcImluZXJ0XCIgYXR0cmlidXRlIHRvIGFsbCBzaWJsaW5nLCBhdW50LCBhbmQgdW5jbGUgbm9kZXMuXHJcbiAqXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyBjb25zZWN1dGl2ZSBjYWxscyB3aXRoIGEgbG9vc2VseSBhcHBsaWVkIHN0YWNrIG9wZXJhdGlvblxyXG4gKiAoc3BlY2lmaWNhbGx5IHZpYSBgYmxvY2tpbmdFbGVtZW50c2AsIHdpdGggYSBzbWFsbCBwb2x5ZmlsbCBiZWNhdXNlIEknbSBub3Qgc3VyZSBob3cgbG9uZ1xyXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoL3BvcCB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZ0VsZW1lbnRzIHN0YWNrLlxyXG4gICAgICovXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnJlbW92ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YXJnZXRdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBibG9ja2luZ0VsZW1lbnRzLnRvcDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmxvY2tpbmctZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGlzRm9jdXNhYmxlIH0gZnJvbSBcInRhYmJhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZ2V0VG9wRWxlbWVudCwgdXNlQmxvY2tpbmdFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWJsb2NraW5nLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuY29uc3QgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZSB9KSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyBnZXRMYXN0QWN0aXZlRWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCgpO1xyXG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcclxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcclxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXHJcbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcclxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRm9jdXNUcmFwUHJvcHMsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XHJcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImwiLCJ1IiwidCIsIm8iLCJyIiwiZiIsImUiLCJjIiwicyIsImEiLCJoIiwidiIsInkiLCJkIiwiXyIsImsiLCJiIiwibSIsImciLCJqIiwidyIsIngiLCJQIiwiTSIsIkEiLCJDIiwiSCIsIiQiLCJUIiwiTyIsIkwiLCJTIiwibiIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGVQIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwidXNlTWVtbyIsInRoaXMiLCJjcmVhdGVDb250ZXh0IiwibWVtbyIsInVzZUNvbnRleHQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztBQUFHLEtBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBR0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsb0VBQW9FLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUVYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRUQsR0FBQyxDQUFDLEtBQUssRUFBRUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW1DLFNBQVNhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBT0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWYsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDZ0IsR0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFZCxHQUFDLEdBQUdKLEdBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUNJLEdBQUMsQ0FBQ0osR0FBQyxDQUFDLGlCQUFpQixHQUFHRyxHQUFDLEVBQUVlLEdBQUMsRUFBQyxDQUFDLFNBQVNBLEdBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUNoQixHQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDVSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDSixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTSSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFYixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDRCxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ08sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNlLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUNRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFbkIsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTa0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTNEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNuQixHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJYyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNlLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNwQixHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQ1MsR0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHSSxHQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQ1UsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM5QixHQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVM4QixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFeEIsR0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBR21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUNMLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUwsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUwsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFZ0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTSCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDdkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFDLENBQUMsT0FBTyxFQUFFQSxHQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUV1QixHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN2QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFVSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDL0IsR0FBQyxDQUFDLEVBQUUsRUFBRUEsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQ1IsR0FBQyxDQUFDRSxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVQLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQStPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDRCxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ1ksR0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVixHQUFDLENBQUMsS0FBSyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQXVEYSxHQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQ0wsR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUNILEdBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQ0gsR0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUNELEdBQUMsQ0FBQ1gsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDZSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ2IsR0FBQyxDQUFDLENBQUM7O0NDQWxoVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMyQixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNZLEdBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTUixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUE0TixTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ04sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUNhLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDZCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDYSxHQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDZCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUNkLEdBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNjLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8scUJBQXFCLENBQUMsU0FBU2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0NDQXI0RCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUMsR0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQXFWLElBQTJNLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUlBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBcUwsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJRCxHQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUQsR0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNMLEdBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBdW5CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJSixHQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsa09BQWtPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUErS0YsR0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUNBLEdBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNDLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFJLElBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxNQUFNQSxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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QUFHLENBQUM7Q0FDbkIsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEtBQUs7Q0FDeEIsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztDQUN2QixRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQ3ZCLEtBQUssQ0FBQztDQUNOLENBQUM7Q0FXRDtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FB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
