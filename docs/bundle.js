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
	function mergeFunctions(first, ...rest) {
	    return (...args) => {
	        first?.(...args);
	        for (let callback of rest) {
	            callback?.(...args);
	        }
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

	function capitalize$1(str) {
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
	    const convertElementSize = A$1((elementSize, direction) => {
	        direction ??= getLogicalDirection();
	        if (direction) {
	            const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
	            // Size is relatively simple
	            let clientInlineSize = elementSize[`client${capitalize$1(inlineSize)}`];
	            let clientBlockSize = elementSize[`client${capitalize$1(blockSize)}`];
	            let offsetInlineSize = elementSize[`offset${capitalize$1(inlineSize)}`];
	            let offsetBlockSize = elementSize[`offset${capitalize$1(blockSize)}`];
	            let scrollInlineSize = elementSize[`scroll${capitalize$1(inlineSize)}`];
	            let scrollBlockSize = elementSize[`scroll${capitalize$1(blockSize)}`];
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
	            let clientInlineInset = elementSize[`client${capitalize$1(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize$1(f2)}`]);
	            let scrollInlineInset = elementSize[`scroll${capitalize$1(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize$1(f2)}`]);
	            let offsetInlineInset = elementSize[`offset${capitalize$1(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize$1(f2)}`]);
	            let clientBlockInset = elementSize[`client${capitalize$1(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize$1(f4)}`]);
	            let scrollBlockInset = elementSize[`scroll${capitalize$1(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize$1(f4)}`]);
	            let offsetBlockInset = elementSize[`offset${capitalize$1(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize$1(f4)}`]);
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
	        convertElementSize
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
	 * DO NOT USE THE GETTER IN useLayoutEffect!! If available, prefer `setState`, which returns
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
	    return function ({ capture, event: eventName, debounce }) {
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
	            ...{ [`getSync${capitalize(eventName)}`]: getSyncHandler },
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
	            const syncHandler = useStableCallback(function syncHandler(e) {
	                if (asyncHandler == null)
	                    return;
	                const event = e;
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
	            return syncHandler;
	        }
	    };
	}
	function capitalize(str) { return (str[0].toUpperCase() + str.substr(1)); }

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

	/*
	(function () {
	    document.addEventListener("focus", e => {
	        console.log({
	            type: "focus",
	            activeElement: document.activeElement,
	            toFocus: e.target,
	            toBlur: e.relatedTarget
	        })
	    }, { capture: true });

	    document.addEventListener("blur", e => {
	        console.log({
	            type: "blur",
	            activeElement: document.activeElement,
	            toBlur: e.target,
	            toFocus: e.relatedTarget
	        })
	    }, { capture: true })


	    document.addEventListener("focusin", e => {
	        console.log({
	            type: "focusin",
	            activeElement: document.activeElement,
	            toFocus: e.target,
	            toBlur: e.relatedTarget
	        })
	    });

	    document.addEventListener("focusout", e => {
	        console.log({
	            type: "focusout",
	            activeElement: document.activeElement,
	            toBlur: e.target,
	            toFocus: e.relatedTarget
	        })
	    })
	})()*/
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
	function useActiveElement() {
	    const [i, setI] = useState(0);
	    const [windowFocused, setWindowFocused] = useState(true);
	    const wfTrue = A$1(() => { setWindowFocused(true); }, []);
	    const wfFalse = A$1(() => { setWindowFocused(false); }, []);
	    h(() => {
	        const F = () => setI(i => ++i);
	        if (updaters.size === 0) {
	            document.addEventListener("focusin", focusin, { passive: true });
	            document.addEventListener("focusout", focusout, { passive: true });
	            window.addEventListener("focus", wfTrue, { passive: true });
	            window.addEventListener("blur", wfFalse, { passive: true });
	        }
	        updaters.add(F);
	        return () => {
	            updaters.delete(F);
	            if (updaters.size === 0) {
	                document.removeEventListener("focusin", focusin);
	                document.removeEventListener("focusout", focusout);
	                window.removeEventListener("focus", wfTrue);
	                window.removeEventListener("blur", wfFalse);
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
	 * @returns
	 */
	function useChildManager() {
	    // This is blindly updated any time a child mounts or unmounts itself.
	    // Used to make sure that any time the array of managed children updates,
	    // we also re-render.
	    const [childUpdateIndex, setChildUpdateIndex] = useState(0);
	    const managedChildren = s([]);
	    const indicesByElement = s(new Map());
	    const useManagedChild = A$1((info) => {
	        const { element, getElement, useRefElementProps } = useRefElement();
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
	        managedChildren: managedChildren.current,
	        indicesByElement: indicesByElement.current
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
	    const { managedChildren, useManagedChild, indicesByElement } = useChildManager();
	    const childCount = managedChildren.length;
	    // Doesn't do anything, but here because there's a pretty decent chance it might in the future.
	    const useRovingTabIndexProps = A$1((props) => useMergedProps()(useHasFocusProps({}), props), []);
	    const focusOnChange = (focusedInner != false);
	    // Any time the tabbable index changes,
	    // notify the previous child that it's no longer tabbable,
	    // and notify the next child that is allowed to be tabbed to.
	    useLayoutEffect(() => {
	        if (tabbableIndex != prevTabbable.current) {
	            if (managedChildren[tabbableIndex]) {
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
	        childCount,
	        managedChildren,
	        indicesByElement,
	        focusSelf
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
	    const useLinearNavigationProps = function ({ ...props }) {
	        const { useRefElementProps, element } = useRefElement();
	        const { convertElementSize, getLogicalDirection } = useLogicalDirection(element);
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
	        return useMergedProps()(useRefElementProps({ onKeyDown }), props);
	    };
	    return {
	        useLinearNavigationProps,
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
	    const [imeActive, setImeActive] = useState(false);
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
	    const comparator = A$1((lhs, rhs) => {
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
	    }, [collator]);
	    // Handle changes in typeahead that cause changes to the tabbable index
	    useLayoutEffect(() => {
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
	    }, [currentTypeahead, comparator]);
	    const useTypeaheadNavigationProps = function ({ ...props }) {
	        const { useRefElementProps, element } = useRefElement();
	        const onCompositionStart = (e) => { setImeActive(true); };
	        const onCompositionEnd = (e) => {
	            setNextTypeaheadChar(e.data);
	            setImeActive(false);
	        };
	        const onKeyDown = (e) => {
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
	    const useTypeaheadNavigationChild = A$1(({ text, ...i }) => {
	        useLayoutEffect(() => {
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
	                    if (sortedIndex > 0) {
	                        sortedTypeaheadInfo.current.splice(sortedIndex, 1);
	                    }
	                };
	            }
	        }, [text, comparator]);
	        return {};
	    }, []);
	    return {
	        useTypeaheadNavigationProps,
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
	    const { childCount, managedChildren, indicesByElement, useRovingTabIndexProps, useRovingTabIndexChild, focusSelf } = useRovingTabIndex({ tabbableIndex: tabbableIndex });
	    const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild, useTypeaheadNavigationProps } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
	    const { navigateToEnd, navigateToIndex, navigateToNext, navigateToPrev, navigateToStart, useLinearNavigationProps } = useLinearNavigation({ getIndex: getTabbableIndex, setIndex, managedChildren });
	    // Any time the tabbable index changes, notify the previous
	    // and next child as such, and optionally focus that next one.
	    /*useLayoutEffect(([prevTabbableIndex]) => {
	        console.log(`Notifying children of index change from ${prevTabbableIndex} to ${tabbableIndex}`);
	        managedChildren[prevTabbableIndex]?.setTabbable(false);
	        managedChildren[tabbableIndex]?.setTabbable(true)
	    }, [tabbableIndex])*/
	    const useListNavigationProps = function (props) {
	        const p1 = useLinearNavigationProps(props);
	        const p2 = useTypeaheadNavigationProps(p1);
	        let ret = useRovingTabIndexProps(p2);
	        return ret;
	    };
	    const useListNavigationChild = A$1((info) => {
	        useTypeaheadNavigationChild(info);
	        const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild(info);
	        const useListNavigationChildProps = function ({ ...props }) {
	            return useMergedProps()(useRovingTabIndexChildProps({ onClick: roveToSelf }), props);
	        };
	        const roveToSelf = A$1(() => { navigateToIndex(info.index); }, []);
	        return {
	            useListNavigationChildProps,
	            useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
	            tabbable,
	            //roveToSelf,
	            //element
	        };
	    }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);
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
	        focusSelf
	    };
	}

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

	const blockingElements = document.$blockingElements;
	const elementsToRestoreFocusTo = new Map();
	/**
	 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
	 *
	 * Automatically handles consecutive calls with a loosely applied stack operation
	 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
	 * it'll take to find its way into the spec, if ever)
	 * @param target
	 */
	function useBlockingElement(target) {
	    const { getActiveElement, getLastActiveElement } = useActiveElement();
	    h(() => {
	        if (target) {
	            // Save the currently focused element
	            // to whatever's currently at the top of the stack
	            elementsToRestoreFocusTo.set(blockingElements.top, getLastActiveElement() ?? document.body);
	            blockingElements.push(target);
	            let rafHandle = requestAnimationFrame(() => {
	                // TODO: This extra queueMicrotask is needed for
	                // ...reasons?
	                queueMicrotask(() => {
	                    findFirstFocusable(blockingElements.top)?.focus();
	                    rafHandle = 0;
	                });
	            });
	            return () => {
	                if (rafHandle)
	                    cancelAnimationFrame(rafHandle);
	                blockingElements.remove(target);
	            };
	        }
	        else {
	            // Restore the focus to the element
	            // that has returned to the top of the stack
	            let rafHandle = requestAnimationFrame(() => {
	                queueMicrotask(() => {
	                    elementsToRestoreFocusTo.get(blockingElements.top)?.focus();
	                    rafHandle = 0;
	                });
	            });
	            return () => {
	                if (rafHandle)
	                    cancelAnimationFrame(rafHandle);
	            };
	        }
	    }, [target]);
	}
	function findFirstFocusable(element) {
	    // Now that the dialog is open, find the first focusable element
	    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
	    const firstFocusable = treeWalker.firstChild();
	    return firstFocusable;
	}

	// Keep track of the last focused element (not including the body element)
	// Used by the focus trap to know what to restore to.
	/*
	let lastFocusedElement: HTMLOrSVGElement | null = null;
	function handler(e: FocusEvent) {
	    if (e.target instanceof Element && document.body.contains(e.target) && e.target != document.body) {
	        lastFocusedElement = e.target as HTMLElement;
	    }
	}
	let listeners = 0;
	function addListener() {
	    if (listeners === 0)
	        document.addEventListener("focusin", handler, { passive: true });
	    
	        ++listeners;
	}

	function removeListener() {
	    --listeners;

	    if (listeners === 0)
	        document.removeEventListener("focusin", handler);
	}*/
	function useFocusTrap({ trapActive }) {
	    const { element, useRefElementProps, getElement } = useRefElement();
	    //const [elementToRestore, setElementToRestore, getElementToRestore] = useState<HTMLOrSVGElement | null>(null);
	    /*useLayoutEffect(() => {
	        addListener();
	        return () => removeListener();
	    }, [])

	    useLayoutEffect(() => {
	        if (trapActive && lastFocusedElement) {
	            setElementToRestore(lastFocusedElement ?? document.body);
	            return () => {
	                let elementToRestore = getElementToRestore()!;
	                requestAnimationFrame(() => {
	                    elementToRestore.focus();
	                })
	            }
	        }
	    }, [trapActive]);*/
	    let active = (trapActive /*&& !!elementToRestore*/);
	    useBlockingElement(active ? element : null);
	    const useFocusTrapProps = ((props) => {
	        return useMergedProps()({ "aria-modal": active ? "true" : undefined }, useRefElementProps(props));
	    });
	    return {
	        useFocusTrapProps,
	        element,
	        getElement
	    };
	}
	/**
	 * We need to keep a sorted list of elements so that we always know what
	 * the first and last element are, even if an arbitrary child
	 * unmounts itself at an arbitrary time.
	 *
	 * This is separate from the list of children we get back from `useChildManager`
	 * because it's nowhere near worth the effort to keep that list sorted
	 * relative to the document order, especially since we need to wait until
	 * we've rendered at least once to even have a shot at trying that.
	 */
	/*const elementByDocumentOrder = useRef<((HTMLOrSVGElement & Node) | null)[]>([]);
	const [sortedElementCount, setSortedElementCount] = useState(0);

	const [overridden, setOverridden, getOverridden] = useState(false);
	const trapActive = (overridden ? false : activeIfNotOverridden);
	const getTrapActive = useStableGetter(trapActive);
	const { childCount, managedChildren, useManagedChild } = useChildManager<Node, FocusTrapChildInfo & { index: string, element: Node | null }>();
	//const firstFocusableChild = useRef<Foo | null>(null);
	//const lastFocusableChild = useRef<Foo | null>(null);

	/*const addFocusableChild = useCallback((child: Node) => {
	    if (firstFocusableChild.current == null) {
	        firstFocusableChild.current = { node: child, prev: null, next: lastFocusableChild.current?.node ?? null };
	    }
	    else {
	        let preceding = !!(firstFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_PRECEDING);
	        if (preceding)
	            firstFocusableChild.current = child;
	    }

	    if (lastFocusableChild.current == null) {
	        lastFocusableChild.current = {node: child, next: null, prev: firstf};
	    }
	    else {
	        let following = !!(lastFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_FOLLOWING);
	        if (following)
	            lastFocusableChild.current = child;
	    }
	}, []);

	const removeFocusableChild = useCallback((child: Node) => {
	    if (firstFocusableChild.current == null) {
	        firstFocusableChild.current = child;
	    }
	    else {
	        let preceding = !!(firstFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_PRECEDING);
	        if (preceding)
	            firstFocusableChild.current = child;
	    }

	    if (lastFocusableChild.current == null) {
	        lastFocusableChild.current = child;
	    }
	    else {
	        let following = !!(lastFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_FOLLOWING);
	        if (following)
	            lastFocusableChild.current = child;
	    }
	}, []);*/
	/*const useFocusTrapProps = useCallback<UseFocusTrapProps<E>>(<P extends UseFocusTrapPropsParameters<E>>(props: P): UseFocusTrapPropsReturnType<E, P> => {
	    const { element, useRefElementProps, getElement } = useRefElement<E>();
	    const { useFocusProps, focusedInner } = useHasFocus<E>();


	    useBlockingElement(trapActive? element : null);
	    const hasFirstElementToFocus = !!(elementByDocumentOrder.current[0])
	    useLayoutEffect(() => {
	        if (hasFirstElementToFocus && trapActive) {
	            elementByDocumentOrder.current[0]?.focus();
	            const element = getElement();
	            if (element){
	                return applyInverseInert(element);
	            }

	        }
	    }, [trapActive, hasFirstElementToFocus]);

	    return useMergedProps({ "aria-modal": trapActive ? "true" : undefined } as {}, useFocusProps(useRefElementProps(props)));
	}, [trapActive]);

	useLayoutEffect(() => {
	    if (activeIfNotOverridden) {
	        const { handle, previous } = onFocusTrapEnable({ setOverridden });
	        previous?.setOverridden(true);

	        return () => {
	            onFocusTrapDisable(handle)?.setOverridden(false);
	        }
	    }
	}, [activeIfNotOverridden])


	const useFocusTrapFocusable = useCallback<UseFocusTrapFocusable>(<ChildElement extends (Node & HTMLOrSVGElement)>(info: FocusTrapChildInfo) => {

	    const { element, useRefElementProps } = useRefElement<ChildElement>();



	    useLayoutEffect(() => {
	        if (element) {

	            // Find where we should be inserted
	            let index = binarySearch(elementByDocumentOrder.current, element, comparator);
	            if (index < 0)
	                index = -index - 1;
	            elementByDocumentOrder.current.splice(index, 0, element);
	            setSortedElementCount(c => ++c);

	            return () => {
	                // Find where we currently are in the array
	                // (this is likely to have changed since we were added)
	                let index = binarySearch(elementByDocumentOrder.current, element, comparator);
	                elementByDocumentOrder.current.splice(index, 1);
	                setSortedElementCount(c => --c);
	            }

	        }
	    }, [element])


	    const index = generateRandomId();
	    useManagedChild({ ...info, index, element });

	    return {
	        useFocusTrapFocusableProps: useCallback<UseFocusTrapFocusableProps<ChildElement>>(<P extends UseFocusTrapFocusablePropsParameters<ChildElement>>(p: P): UseFocusTrapFocusablePropsReturnType<ChildElement, P> => {

	            const onKeyDown = useCallback((e: KeyboardEvent) => {
	                return;
	                /*const isTab = (e.key === "Tab");
	                if (getTrapActive() && isTab) {
	                    const isFirst = (element == elementByDocumentOrder.current[0]);
	                    const isLast = (element == elementByDocumentOrder.current[elementByDocumentOrder.current.length - 1]);
	                    let isNextNav = (!e.shiftKey);
	                    let isPrevNav = (e.shiftKey);

	                    if (isFirst && isPrevNav) {
	                        e.preventDefault();
	                        elementByDocumentOrder.current[elementByDocumentOrder.current.length - 1]!.focus();
	                    }
	                    else if (isLast && isNextNav) {
	                        e.preventDefault();
	                        elementByDocumentOrder.current[0]!.focus();
	                    }
	                }*\/
	            }, [element]);

	            return useMergedProps(useRefElementProps({ onKeyDown }), p);
	        }, [element, useRefElementProps, trapActive])
	    }


	}, [useManagedChild])*/
	/*
	function isFocusable<T extends HTMLInputElement | HTMLAnchorElement | SVGElement | MathMLElement>(element: T) {
	    if (element.tabIndex > 0 || (element.tabIndex === 0 && element.getAttribute("tabIndex") !== null)) {
	        return true;
	    }

	    if ("disabled" in element && element.disabled)
	        return false;

	    switch (element.nodeName) {
	        case "A":
	            return !!(element as HTMLAnchorElement).href && (element as HTMLAnchorElement).rel != 'ignore';
	        case "INPUT":
	            return (element as HTMLInputElement).type != 'hidden' && (element as HTMLInputElement).type != 'file';
	        case "BUTTON":
	        case "SELECT":
	        case "TEXTAREA":
	            return true;
	        default:
	            return false;
	    }
	}

	function attemptFocus(child: HTMLElement | SVGElement | MathMLElement) {
	    if (!isFocusable(child))
	        return false;

	    try {
	        child.focus();
	    }
	}

	function focusFirstDescendant<T extends Node>(element: T) {
	    for (let i = 0; i < element.childNodes.length; ++i) {
	        let child = element.childNodes[i];

	    }
	}
	*/

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
	    const { callCount, settleCount, getCurrentCapture, hasCapture, getSyncOnClick, currentCapture, pending, error, hasError, rejectCount, resolveCount } = useAsyncHandler()({ event: "onClick", capture: () => { }, debounce: debounce == 0 ? undefined : debounce });
	    const asyncOnClick = ((v, e) => new Promise((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout)));
	    const onClick = getSyncOnClick(pending ? null : asyncOnClick);
	    return (v$1("div", { className: "demo" },
	        v$1("button", { disabled: pending && disableConsecutive, onClick: onClick }, "Click me!"),
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
	                    v$1("td", null, "hasCapture"),
	                    v$1("td", null, hasCapture.toString()))))));
	});
	const DemoUseAsyncHandler2 = g(() => {
	    const [timeout, setTimeout] = useState(1000);
	    const [debounce, setDebounce] = useState(0);
	    const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
	    const [disableConsecutive, setDisableConsecutive] = useState(false);
	    const [text, setText] = useState("");
	    const { callCount, settleCount, getCurrentCapture, hasCapture, getSyncOnInput, currentCapture, pending, error, hasError, rejectCount, resolveCount } = useAsyncHandler()({ event: "onInput", capture: e => { e.preventDefault(); return e.currentTarget.value; }, debounce: debounce == 0 ? undefined : debounce });
	    const onInput = getSyncOnInput(async (v, e) => new Promise((resolve, reject) => window.setTimeout(() => {
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
	        v$1(DemoUseTimeout, null),
	        v$1(DemoUseInterval, null),
	        v$1(DemoUseRovingTabIndex, null),
	        v$1(DemoUseFocusTrap, null),
	        v$1(DemoUseAsyncHandler1, null),
	        v$1(DemoUseAsyncHandler2, null),
	        v$1(DemoUseDroppable, null),
	        v$1(DemoUseDraggable, null),
	        v$1(DemoUseElementSizeAnimation, null),
	        v$1("input", null));
	};
	requestAnimationFrame(() => {
	    S$1(v$1(Component, null), document.getElementById("root"));
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL3VzZS1zdGF0ZS5qcyIsIi4uL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCIuLi91c2UtbGF5b3V0LWVmZmVjdC5qcyIsIi4uL3VzZS10aW1lb3V0LmpzIiwiLi4vdXNlLWFzeW5jLWhhbmRsZXIuanMiLCIuLi91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vdXNlLWNvbnN0YW50LmpzIiwiLi4vdXNlLWRyYWdnYWJsZS5qcyIsIi4uL3VzZS1kcm9wcGFibGUuanMiLCIuLi91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi91c2UtaGFzLWZvY3VzLmpzIiwiLi4vdXNlLWludGVydmFsLmpzIiwiLi4vdXNlLWNoaWxkLW1hbmFnZXIuanMiLCIuLi91c2Utcm92aW5nLXRhYmluZGV4LmpzIiwiLi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb24uanMiLCIuLi91c2UtbGlzdC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vdXNlLWJsb2NraW5nLWVsZW1lbnQuanMiLCIuLi91c2UtZm9jdXMtdHJhcC5qcyIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS1pbnRlcnZhbC50c3giLCJkZW1vcy91c2UtdGltZW91dC50c3giLCJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4geShsLGYsdCxvLG51bGwpfWZ1bmN0aW9uIHkobixpLHQsbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cn07cmV0dXJuIG51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fHIhPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP2sodCk6byx0Ll9faCkseih1LHQpLHQuX19lIT1vJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxvLHIsZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQsbyxyLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJm51bGwhPV8uX19rJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxhfHxcIm9wdGlvblwiIT09dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7dmFyIGksdDtmb3IoaT0wO2k8bi5fX2subGVuZ3RoO2krKykodD1uLl9fa1tpXSkmJih0Ll9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnR5cGU/eCh0LGwsdSk6UCh1LHQsdCxuLl9fayx0Ll9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LG8scixmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIWMscltyLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LG8scixmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKG89ITApLG51bGwhPXIpZm9yKDtfPHIubGVuZ3RoO18rKylpZigocz1yW19dKSYmKHM9PT1sfHwoZD9zLmxvY2FsTmFtZT09ZDozPT1zLm5vZGVUeXBlKSkpe2w9cyxyW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixmLHI/clswXTppLl9fayYmayhpLDApLGMpLG51bGwhPXIpZm9yKF89ci5sZW5ndGg7Xy0tOyludWxsIT1yW19dJiZoKHJbX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQsbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIG8scixmO2wuX18mJmwuX18odSxpKSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFvJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxyfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIW8mJnQ/W3RdOnI/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZ0P3Q6cj9yLl9fZTppLmZpcnN0Q2hpbGQsbykseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxvLHIsZj1hKHt9LGwucHJvcHMpO2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PXZvaWQgMH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgZix1c2VEZWJ1Z1ZhbHVlIGFzIGN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyB2LEZyYWdtZW50IGFzIGQscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6dih2KG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj92KG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXYobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6dn0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKGQsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKGQsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD12KG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD0kLG4ubmF0aXZlRXZlbnQ9bn07dmFyIHEsRz17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSj1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2Zvcih2YXIgdSBpbiByPXt9LGUpe3ZhciBvPWVbdV07XCJ2YWx1ZVwiPT09dSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PW98fChcImRlZmF1bHRWYWx1ZVwiPT09dSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT91PVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT11JiYhMD09PW8/bz1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdCh1KT91PVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdCh1K3QpJiYhVihlLnR5cGUpP3U9XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KHUpP3U9dS50b0xvd2VyQ2FzZSgpOlAudGVzdCh1KT91PXUucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PW8mJihvPXZvaWQgMCksclt1XT1vKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEcuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsRykpLG4uJCR0eXBlb2Y9aixKJiZKKG4pfTt2YXIgSz1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtLJiZLKG4pLHE9bi5fX2N9O3ZhciBRPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gcS5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxYPVwiMTcuMC4yXCI7ZnVuY3Rpb24gbm4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIHRuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gZW4obil7cmV0dXJuIHRuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gcm4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gdW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgb249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49ZDtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6eixoeWRyYXRlOkIsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpybixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6bm4sY2xvbmVFbGVtZW50OmVuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OmQsaXNWYWxpZEVsZW1lbnQ6dG4sZmluZERPTU5vZGU6dW4sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmxuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOm9uLFN0cmljdE1vZGU6ZCxTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpRfTtleHBvcnR7WCBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHJuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsbm4gYXMgY3JlYXRlRmFjdG9yeSxlbiBhcyBjbG9uZUVsZW1lbnQsdG4gYXMgaXNWYWxpZEVsZW1lbnQsdW4gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsbG4gYXMgZmx1c2hTeW5jLG9uIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksUSBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5mdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XG4gICAgICAgICAgICB9LCBbbGhzLCByaHNdKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gdHlwZXRlc3QocHJvcHMpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWYpIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWYpIHsgfVxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnMoKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnMoKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmcygpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzKCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnMoKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzKCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzKCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmcygpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnMoKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbMl0pO1xuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzNdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1s0XSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzICYmICFyaHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHMgJiYgIXJocylcbiAgICAgICAgICAgIHJldHVybiBsaHM7XG4gICAgICAgIGlmICghbGhzICYmIHJocylcbiAgICAgICAgICAgIHJldHVybiByaHM7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cbiAgICAgICAgaWYgKGxocyAmJiByaHMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBPYmplY3QuZnJvbUVudHJpZXMobGhzLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKSB9LCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgeyBzdHlsZTogT2JqZWN0LmZyb21FbnRyaWVzKGxocy5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9naWM/Pz9cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzfWA7IC8vIFRPRE86IEltcHJvdmUgdGhlIHR5cGluZyB0byBtYWtlIHRoaXMgcG9zc2libGVcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZCh1KSB7IH1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzcyhzdHIpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c0Nzcyhwcm9wKSB7IH1cbmZ1bmN0aW9uIHR5cGV0ZXN0KHByb3BzKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICBjb25zdCBjID0gW1xuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh1bmRlZmluZWQsIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHt9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyhwcm9wcywgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwge30pLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZSB9LCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyhwcm9wcywgeyBzdHlsZSB9KSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwgeyBzdHlsZSB9KSxcbiAgICBdO1xuICAgIC8vIFNhbml0eSBjaGVja3NcbiAgICBjWzBdID09PSB1bmRlZmluZWQ7XG4gICAgY1sxXSA9PT0gdW5kZWZpbmVkO1xuICAgIGNbMl0gPT09IHVuZGVmaW5lZDtcbiAgICBjWzNdID09PSB1bmRlZmluZWQ7XG4gICAgY1s0XSA9PT0gdW5kZWZpbmVkO1xuICAgIGNbNV0gPT09IHVuZGVmaW5lZDtcbiAgICBjWzZdID09PSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBib3RoIHdlcmUgdW5kZWZpbmVkXG4gICAgY1swXT8uYmFja2dyb3VuZENvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXG4gICAgY1sxXT8uYmFja2dyb3VuQ29sb3I7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgd2FzIG5vdCBwcm92aWRlZCBhcyBhIHByb3BcbiAgICBjWzJdPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgd2FzIG5vdCBwcm92aWRlZCBhcyBhIHByb3BcbiAgICBjWzNdPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgbWF5IGJlIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gaG93IFAgZXh0ZW5kcyBIVE1MQXR0cmlidXRlc1xuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzRdKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzRdKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiBtYXkgYmUgdW5kZWZpbmVkIGRlcGVuZGluZyBvbiBob3cgUCBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbNV0pO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbNV0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIG1heSBiZSB1bmRlZmluZWQgZGVwZW5kaW5nIG9uIGhvdyBQIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXNcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s2XSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s2XSk7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbN10pO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbN10pO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzhdKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzhdKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s5XSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s5XSk7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbMTBdKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzEwXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vLyBHZW5lcmFsbHkgdG9vIGNvbXBsZXhcbi8vUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwga2V5b2YgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gJiAoa2V5b2YgVCB8IGtleW9mIFUpPjsgXG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNsYXNzOiBsaHNDbGFzcywgY2xhc3NOYW1lOiBsaHNDbGFzc05hbWUsIHN0eWxlOiBsaHNTdHlsZSwgcmVmOiBsaHNSZWYsIC4uLmxocyB9ID0gbGhzMjtcbiAgICAgICAgY29uc3QgeyBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XG4gICAgICAgIGxldCByZXQgPSB7XG4gICAgICAgICAgICAuLi5saHMsXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzMiwgcmhzMilcbiAgICAgICAgfTtcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxuICAgICAgICAvLyBNZXJnZSBldmVyeSByZW1haW5pbmcgZXhpc3RpbmcgZW50cnkgaW4gbGhzIHdpdGggd2hhdCB3ZSd2ZSBhbHJlYWR5IHB1dCBpbiByZXQuXG4gICAgICAgIC8vY29uc3QgbGhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxocykgYXMgW2tleW9mIFQsIFRba2V5b2YgVF1dW107XG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xuICAgICAgICBmb3IgKGNvbnN0IFtyaHNLZXksIHJoc1ZhbHVlXSBvZiByaHNFbnRyaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc1tyaHNLZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhmaXJzdCwgLi4ucmVzdCkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBmaXJzdD8uKC4uLmFyZ3MpO1xuICAgICAgICBmb3IgKGxldCBjYWxsYmFjayBvZiByZXN0KSB7XG4gICAgICAgICAgICBjYWxsYmFjaz8uKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qSyBleHRlbmRzIGtleW9mIFQ/IFRbS10gOlxuSyBleHRlbmRzIGtleW9mIFRlbXBsYXRlID9cbihSZXF1aXJlZDxUZW1wbGF0ZT5bS10gfCB1bmRlZmluZWQpIDogdW5kZWZpbmVkOyovXG5mdW5jdGlvbiBnZW5lcmljR2V0VGVzdCgpIHtcbiAgICBjb25zdCB0MSA9IG51bGw7XG4gICAgY29uc3QgdDIgPSBudWxsO1xuICAgIGNvbnN0IHQzID0gbnVsbDtcbiAgICBpZiAodDMuaWQgPT0gbnVsbCkge1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdDMuaWQuY29uY2F0KFwiXCIpO1xuICAgIH1cbn1cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgYXMgdXNlU3RhdGVQIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcbiAqIChpLmUuIHlvdSBjYW4gdXNlIGl0IGluIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaXQgYmVpbmcgYSBkZXBlbmRlbmN5KS5cbiAqXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gV2Uga2VlcCBib3RoXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZVAoaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXQgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlKHByZXZWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXQgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldCwgZ2V0XTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudCgpIHtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgaWYgKHAxLnN0eWxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVsZW1lbnRTaXplKHsgb2JzZXJ2ZUJveCB9ID0ge30pIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgIGNvbnN0IFtzaXplLCBzZXRTaXplLCBnZXRTaXplXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgeyBib3g6IG9ic2VydmVCb3ggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtlbGVtZW50LCBvYnNlcnZlQm94XSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZWxlbWVudFNpemU6IHNpemUsXG4gICAgICAgIGdldEVsZW1lbnRTaXplOiBnZXRTaXplLFxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50KSB7XG4gICAgY29uc3QgW3dyaXRpbmdNb2RlLCBzZXRXcml0aW5nTW9kZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RleHRPcmllbnRhdGlvbiwgc2V0VGV4dE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHdyaXRpbmdNb2RlUmVmID0gdXNlUmVmKHdyaXRpbmdNb2RlKTtcbiAgICBjb25zdCBkaXJlY3Rpb25SZWYgPSB1c2VSZWYoZGlyZWN0aW9uKTtcbiAgICBjb25zdCB0ZXh0T3JpZW50YXRpb25SZWYgPSB1c2VSZWYodGV4dE9yaWVudGF0aW9uKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB3cml0aW5nTW9kZVJlZi5jdXJyZW50ID0gd3JpdGluZ01vZGU7IH0sIFt3cml0aW5nTW9kZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQgPSB0ZXh0T3JpZW50YXRpb247IH0sIFt0ZXh0T3JpZW50YXRpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjb21wdXRlZFN0eWxlcy50ZXh0T3JpZW50YXRpb247XG4gICAgICAgICAgICBjb25zdCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgc2V0V3JpdGluZ01vZGUodyB8fCBcImhvcml6b250YWwtdGJcIik7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oZCB8fCBcInJ0bFwiKTtcbiAgICAgICAgICAgIHNldFRleHRPcmllbnRhdGlvbih0IHx8IFwibWl4ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgd3JpdGluZ01vZGUgPSB3cml0aW5nTW9kZVJlZi5jdXJyZW50O1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmVmLmN1cnJlbnQ7XG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCF3cml0aW5nTW9kZSB8fCAhZGlyZWN0aW9uIHx8ICF0ZXh0T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwibHRyXCI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxuICAgICAgICB9O1xuICAgIH0sIFt3cml0aW5nTW9kZVJlZiwgZGlyZWN0aW9uUmVmLCB0ZXh0T3JpZW50YXRpb25SZWZdKTtcbiAgICBjb25zdCBjb252ZXJ0RWxlbWVudFNpemUgPSB1c2VDYWxsYmFjaygoZWxlbWVudFNpemUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgeyBpbmxpbmVTaXplLCBibG9ja1NpemUsIGlubGluZURpcmVjdGlvbiwgYmxvY2tEaXJlY3Rpb24gfSA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcbiAgICAgICAgICAgIC8vIG9yIHNvbWV0aW1lcyB0d28gKGxpa2UgYGxlZnRgICsgYHdpZHRoYClcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGRpcikgeyBpZiAoZGlyID09PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XG4gICAgICAgICAgICBjb25zdCBmMSA9IGdldFBoeXNpY2FsTGVmdFRvcChpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmNCA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxuICAgICAgICBjb252ZXJ0RWxlbWVudFNpemVcbiAgICB9O1xufVxuO1xuY29uc3QgSG9yaXpvbnRhbFRiTHRyID0ge1xuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIGlubGluZVNpemU6IFwid2lkdGhcIixcbiAgICBibG9ja1NpemU6IFwiaGVpZ2h0XCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJ0dGJcIlxufTtcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcbiAgICAuLi5Ib3Jpem9udGFsVGJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInJ0bFwiLFxufTtcbmNvbnN0IFZlcnRpY2FsUmxMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcbiAgICBibG9ja1NpemU6IFwid2lkdGhcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwidHRiXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXG59O1xuY29uc3QgVmVydGljYWxSbFJ0bCA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIlxufTtcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcbmNvbnN0IFNpZGV3YXlzUmxSdGwgPSB7IC4uLlZlcnRpY2FsUmxSdGwgfTtcbmNvbnN0IFZlcnRpY2FsTHJMdHIgPSB7XG4gICAgLi4uVmVydGljYWxSbEx0cixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxSdGwsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXG59O1xuY29uc3QgU2lkZXdheXNMdEx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbExyTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwiYnR0XCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcImx0clwiXG59O1xuY29uc3QgU2lkZXdheXNMdFJ0bCA9IHtcbiAgICAuLi5TaWRld2F5c0x0THRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxufTtcbmNvbnN0IEhvcml6b250YWxUYiA9IHtcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcbiAgICBydGw6IEhvcml6b250YWxUYlJ0bFxufTtcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XG4gICAgbHRyOiBWZXJ0aWNhbFJsTHRyLFxuICAgIHJ0bDogVmVydGljYWxSbFJ0bFxufTtcbmNvbnN0IFZlcnRpY2FsTHIgPSB7XG4gICAgbHRyOiBWZXJ0aWNhbExyTHRyLFxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxufTtcbmNvbnN0IFNpZGV3YXlzUmwgPSB7XG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxuICAgIHJ0bDogU2lkZXdheXNSbFJ0bFxufTtcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XG4gICAgbHRyOiBTaWRld2F5c0x0THRyLFxuICAgIHJ0bDogU2lkZXdheXNMdFJ0bFxufTtcbmNvbnN0IFdyaXRpbmdNb2RlcyA9IHtcbiAgICBcImhvcml6b250YWwtdGJcIjogSG9yaXpvbnRhbFRiLFxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcbiAgICBcInZlcnRpY2FsLXJsXCI6IFZlcnRpY2FsUmwsXG4gICAgXCJzaWRld2F5cy1sclwiOiBTaWRld2F5c0xyLFxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogRE8gTk9UIFVTRSBUSEUgR0VUVEVSIElOIHVzZUxheW91dEVmZmVjdCEhIElmIGF2YWlsYWJsZSwgcHJlZmVyIGBzZXRTdGF0ZWAsIHdoaWNoIHJldHVybnNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHZhbHVlKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4geyByZXR1cm4gcmVmLmN1cnJlbnQ7IH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbi8qKlxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICogc28gdGhhdCBpdCBjYW4gYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVwZW5kZW5jeSBhcnJheXMgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMuXG4gKlxuICogRE8gTk9UIFVTRSBUSEUgUkVTVUxUIElOIHVzZUxheW91dEVmZmVjdCEhXG4gKlxuICogVE9ETzogSW52ZXN0aWdhdGUgb3B0aW9ucy5kaWZmZWQgaWYgdGhlIHVzZUxheW91dEVmZmVjdCBsaW1pdGF0aW9uIGJlY29tZXMgbGltaXRsZXNzbHkgbGltaXRpbmcuXG4gKlxuICogU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE0MDk5I2lzc3VlY29tbWVudC02NTkyOTg0MjJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEZ1bmMgPSBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIoKTtcbiAgICAgICAgaWYgKCFjdXJyZW50RnVuYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVDYWxsYmFjaygpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEZ1bmMoLi4uYXJncyk7XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1jYWxsYmFjay5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgYXMgdXNlTGF5b3V0RWZmZWN0TmF0aXZlLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKGlucHV0cyk7XG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0geyBmcm9tOiBwcmV2SW5wdXRzLmN1cnJlbnRbaV0sIHRvOiBpbnB1dHNbaV0gfTtcbiAgICAgICAgfVxuICAgICAgICBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcbiAgICAgICAgcHJldklucHV0cy5jdXJyZW50ID0gaW5wdXRzO1xuICAgIH07XG4gICAgdXNlTGF5b3V0RWZmZWN0TmF0aXZlKGVmZmVjdDIsIGlucHV0cyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XG4vKipcbiAqIEdpdmVuIGFuIGFzeW5jcm9ub3VzIGV2ZW50IGhhbmRsZXIsIHJldHVybnMgYSBzeW5jcm9ub3VzIG9uZSB0aGF0IHdvcmtzIG9uIHRoZSBET00sXG4gKiBhbG9uZyB3aXRoIHNvbWUgb3RoZXIgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIERvZXMgbm90IG1vZGlmeSBhbnkgcHJvcHMuXG4gKlxuICogVGhlIGhhbmRsZXIgaXMgYXV0b21hdGljYWxseSB0aHJvdHRsZWQgdG8gb25seSBydW4gb25lIGF0IGEgdGltZS5cbiAqIElmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCwgYW5kIHRoZW4gYmVmb3JlIGl0IGZpbmlzaGVzLCBpcyBjYWxsZWQgYWdhaW4sXG4gKiBpdCB3aWxsIGJlIHB1dCBvbiBob2xkIHVudGlsIHRoZSBjdXJyZW50IG9uZSBmaW5pc2hlcywgYXQgd2hpY2ggcG9pbnRcbiAqIHRoZSBzZWNvbmQgb25lIHdpbGwgcnVuLiAgSWYgdGhlIGhhbmRsZXIgaXMgY2FsbGVkIGEgdGhpcmQgdGltZSBiZWZvcmVcbiAqIHRoZSBmaXJzdCBoYXMgZmluaXNoZWQsIGl0IHdpbGwgKnJlcGxhY2UqIHRoZSBzZWNvbmQsIHNvIG9ubHkgdGhlIG1vc3RcbiAqIHJlY2VudGx5IGNhbGxlZCBpdGVyYXRpb24gb2YgdGhlIGhhbmRsZXIgd2lsbCBydW4uXG4gKlxuICogWW91IG1heSBvcHRpb25hbGx5ICphbHNvKiBzcGVjaWZ5IGEgZGVib3VuY2UgcGFyYW1ldGVyIHRoYXQgd2FpdHMgdW50aWwgdGhlXG4gKiBzeW5jcm9ub3VzIGhhbmRsZXIgaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgdGhlIHNwZWNpZmllZCBudW1iZXIgb2ZcbiAqIG1pbGxpc2Vjb25kcywgYXQgd2hpY2ggcG9pbnQgd2UgKmFjdHVhbGx5KiBydW4gdGhlIGFzeW5jcm9ub3VzIGhhbmRsZXJcbiAqIGFjY29yZGluZyB0byB0aGUgbG9naWMgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gVGhpcyBpcyBpblxuICogKmFkZGl0aW9uKiB0byB0aHJvdHRsaW5nIHRoZSBoYW5kbGVyLCBhbmQgZG9lcyBub3QgcmVwbGFjZSB0aGF0IGJlaGF2aW9yLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgcGFyYW1ldGVycyB0byB0aGUgYXN5bmMgaGFuZGxlciBhcmUgc2xpZ2h0bHkgZGlmZmVyZW50IHRoYW5cbiAqIHRoZSBzeW5jIGhhbmRsZXIgJm5kYXNoOyB0aGUgZmlyc3QgYXJndW1lbnQsIGFzIGRlY2lkZWQgYnkgeW91IHdpdGggdGhlXG4gKiBgY2FwdHVyZWAgcGFyYW1ldGVyIGZvciB0aGlzIGhvb2ssIGlzIHRoZSBcInNhdmVkXCIgaW5mb3JtYXRpb24gZnJvbSB0aGVcbiAqIGV2ZW50LiAgRm9yIGV4YW1wbGUsIHRoZSBldmVudCdzIGN1cnJlbnRUYXJnZXQncyBgdmFsdWVgLCB3aGljaCBtYXkgaGF2ZVxuICogY2hhbmdlZCBieSB0aGUgdGltZSB0aGUgaGFuZGxlciBpcyAqYWN0dWFsbHkqIGNhbGxlZC4gIFRoZSBzZWNvbmQgYXJndW1lbnRcbiAqIGlzIHRoZSBvcmlnaW5hbCBldmVudCwgd2hpY2ggbWlnaHQgc3RpbGwgaGF2ZSBzb21lIHVzZWZ1bCBmaWVsZHMgb24gaXRcbiAqIGxpa2UgYG1vdXNlWGAgb3Igc29tZXRoaW5nLCBidXQgaXMgc3RhbGUgYXQgbGVhc3QgaW4gcmVnYXJkcyB0byB0aGVcbiAqIGVsZW1lbnQgaXQgcmVmZXJlbmNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzeW5jSGFuZGxlcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHsgY2FwdHVyZSwgZXZlbnQ6IGV2ZW50TmFtZSwgZGVib3VuY2UgfSkge1xuICAgICAgICAvLyBBbHdheXMgcmVwcmVzZW50cyB3aGF0ZXZlciBwcm9taXNlIGlzIGN1cnJlbnRseSBiZWluZyB3YWl0ZWQgb24sIG9yIG51bGwgaWYgbm9uZS5cbiAgICAgICAgY29uc3QgW3Byb21pc2UsIHNldFByb21pc2UsIGdldFByb21pc2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgaG93IG1hbnkgdGltZXMgd2UndmUgYWN0dWFsbHkgY2FsbGVkIHRoZSBhc3luYyBoYW5kbGVyXG4gICAgICAgIGNvbnN0IFtydW5Db3VudCwgc2V0UnVuQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlQ291bnQsIHNldFJlc29sdmVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgY29uc3QgW3JlamVjdENvdW50LCBzZXRSZWplY3RDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgLy8gSWYgd2UncmUgc2V0IHRvIHVzZSBhIGRlYm91bmNlLCB0aGVuIHdoZW4gdGhlIHRpbWVvdXQgZmluaXNoZXMsXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIGZyb20gdGhpcyBzdGF0ZSBvYmplY3QgaXMgdHJhbnNmZXJyZWQgb3ZlciB0byBlaXRoZXIgXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHByb21pc2Ugb3IgdGhlIHBlbmRpbmcgcHJvbWlzZS5cbiAgICAgICAgY29uc3QgW2RlYm91bmNlZFByb21pc2VTdGFydGVyLCBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlciwgZ2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIC8vIFdoZW4gd2Ugd2FudCB0byBzdGFydCBhIG5ldyBwcm9taXNlLCB3ZSB3b24ndCBhbGxvdyBpdCB0byBzdGFydCBpZiBvbmUgaXMgc3RpbGwgcnVubmluZy5cbiAgICAgICAgLy8gSW4gdGhhdCBjYXNlLCB3ZSBzdG9yZSB0aGUgcHJvbWlzZSAob3IgcmF0aGVyLCBhIHdheSB0byBzdGFydCB0aGUgcHJvbWlzZSkgaW4gc3RhdGUuXG4gICAgICAgIGNvbnN0IFtwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIsIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlciwgZ2V0UGVuZGluZ1Byb21pc2VTdGFydGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBgdW5kZWZpbmVkYCBhbmQgXCJubyBlcnJvciBoYXMgYmVlbiB0aHJvd25cIi5cbiAgICAgICAgLy8gV2UgY291bGQgYWxzbyBrZWVwIGEgc2VwYXJhdGUgYm9vbGVhbiBzdGF0ZSB0byB0cmFjayB0aGF0LlxuICAgICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yLCBnZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yLCBnZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIGNvbnN0IFtjdXJyZW50Q2FwdHVyZSwgc2V0Q3VycmVudENhcHR1cmUsIGdldEN1cnJlbnRDYXB0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFtoYXNDYXB0dXJlLCBzZXRIYXNDYXB0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBkZWJvdW5jZS4gTG9naWNhbGx5IHRoaXMgaGFwcGVucyBiZWZvcmUgdGhlIG1haW4gc3RlcCBhcyBhIHNvcnQgb2Ygc3RlcCAwLlxuICAgICAgICAvLyBSZXNldHMgdGhlIHRpbWVvdXQgYW55IHRpbWUgdGhlIGhhbmRsZXIgd2FzIHJlcXVlc3RlZCB0byBiZSBjYWxsZWQgYWdhaW5cbiAgICAgICAgLy8gYW5kIHdoZW4gaXQgZmluaXNoZXMsIGFjdHVhbGx5IGNhbGwgdGhlIGhhbmRsZXIgKG9yIHNldCBpdCBhcyB0aGUgcGVuZGluZyBwcm9taXNlKVxuICAgICAgICB1c2VUaW1lb3V0KHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IGRlYm91bmNlID8/IG51bGwsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZWJvdW5jZWRQcm9taXNlU3RhcnRlcilcbiAgICAgICAgICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShkZWJvdW5jZWRQcm9taXNlU3RhcnRlcik7XG4gICAgICAgICAgICAgICAgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIobnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJpZ2dlckluZGV4OiBkZWJvdW5jZWRQcm9taXNlU3RhcnRlclxuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2VlIGlmIHdlIHNob3VsZCBzZXQgb3VyIGN1cnJlbnQgcHJvbWlzZSB0byBiZSB3aGF0ZXZlciB0aGUgcGVuZGluZyBwcm9taXNlIGlzXG4gICAgICAgIC8vICh1c3VhbGx5IGJlY2F1c2UgdGhlIGN1cnJlbnQgcHJvbWlzZSBmaW5pc2hlZCBhbmQgYmVjYW1lIG51bGwpLlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgLy8gT3VyIGN1cnJlbnQgcHJvbWlzZSBqdXN0IGZpbmlzaGVkIGFuZCB0aGVyZSdzIG9uZSB3YWl0aW5nP1xuICAgICAgICAgICAgaWYgKHByb21pc2UgPT0gbnVsbCAmJiBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2UocGVuZGluZ1Byb21pc2VTdGFydGVyKTtcbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtwcm9taXNlLCBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXJdKTtcbiAgICAgICAgLy8gQ2FsbGVkIGFueSB0aW1lIHRoZSBhc3luYyBoYW5kbGVyIGlzIGFib3V0IHRvIGJlIGNhbGxlZCBmb3Igd2hhdGV2ZXIgcmVhc29uLFxuICAgICAgICAvLyBleGNlcHQgZm9yIGRlYm91bmNlLCB3aGljaCBjb21lcyBmaXJzdCwgYXMgYSBzb3J0IG9mIFwic3RlcCAwXCIuXG4gICAgICAgIC8vIEhhbmRsZXMgYWxsIHRoZSBuZWNlc3NhcnkgYm9pbGVycGxhdGUgcmVsYXRlZCB0byBjaG9vc2luZyB3aGV0aGVyIHRvXG4gICAgICAgIC8vIHJ1biBvciBzZXQgYXMgcGVuZGluZywgcmVzZXR0aW5nIHN0YXRlIHZhcmlhYmxlcywgZXRjLlxuICAgICAgICBmdW5jdGlvbiB3YW50VG9TdGFydEFOZXdQcm9taXNlKHN0YXJ0UHJvbWlzZSkge1xuICAgICAgICAgICAgbGV0IGFscmVhZHlSdW5uaW5nUHJvbWlzZSA9IChnZXRQcm9taXNlKCkgIT0gbnVsbCk7XG4gICAgICAgICAgICAvLyBCb2lsZXJwbGF0ZSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gcHJvbWlzZSBzdGFydGVyXG4gICAgICAgICAgICBsZXQgUCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IHN0YXJ0cywgbm90aWZ5IHRoZSBjYWxsZXJcbiAgICAgICAgICAgICAgICBzZXRSdW5Db3VudChyID0+ICsrcik7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBjb21wbGV0ZXMsIG5vdGlmeSB0aGUgY2FsbGVyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25UaGVuID0gKCkgPT4geyBzZXRSZXNvbHZlQ291bnQoYyA9PiArK2MpOyB9O1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgZmFpbHMsIHNhdmUgdGhlIGVycm9yIGFuZCBub3RpZnkgdGhlIGNhbGxlclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2F0Y2ggPSAoZXgpID0+IHsgc2V0RXJyb3IoZXgpOyBzZXRIYXNFcnJvcih0cnVlKTsgc2V0UmVqZWN0Q291bnQoYyA9PiArK2MpOyB9O1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc2V0dGxlcywgcmVzZXQgb3VyIHN0YXRlIHNvIHdlIGNhbiBcbiAgICAgICAgICAgICAgICAvLyBydW4gYSBwZW5kaW5nIHByb21pc2UgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3Qgb25GaW5hbGx5ID0gKCkgPT4geyBzZXRQcm9taXNlKG51bGwpOyB9O1xuICAgICAgICAgICAgICAgIGxldCBzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIGhhbmRsZXIgaXMgc3luY2hyb25vdXNcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0YXJ0UHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBzeW5jaHJvbm91cyBhbmQgcmV0dXJuZWQgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRoZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluYWxseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXG4gICAgICAgICAgICAgICAgICAgIG9uQ2F0Y2goZXgpO1xuICAgICAgICAgICAgICAgICAgICBvbkZpbmFsbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhlIGhhbmRsZXIgaXMgYXN5bmNocm9ub3VzXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7IGF3YWl0IHJlc3VsdDsgfSkoKS50aGVuKG9uVGhlbikuY2F0Y2gob25DYXRjaCkuZmluYWxseShvbkZpbmFsbHkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeVJ1bm5pbmdQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgaW1tZWRpYXRlbHksIGJlY2F1c2UgdGhlcmUgd2Fzbid0IG9uZSBydW5uaW5nIGFscmVhZHkuXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQcm9taXNlID0gUCgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvbWlzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZCBvbiEgVGhlIGhhbmRsZXIgd2FzIGFjdHVhbGx5IHN5bmNocm9ub3VzLCBhbmQgYWxyZWFkeSBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRIYXNFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFByb21pc2UobmV4dFByb21pc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHN0YXJ0IHRoZSBwcm9taXNlIHlldCwgXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFsbG93IGl0IHRvIHN0YXJ0IGluIHRoZSBmdXR1cmUgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIoXyA9PiBQKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ueyBbYGdldFN5bmMke2NhcGl0YWxpemUoZXZlbnROYW1lKX1gXTogZ2V0U3luY0hhbmRsZXIgfSxcbiAgICAgICAgICAgIGdldEN1cnJlbnRDYXB0dXJlLFxuICAgICAgICAgICAgY2FsbENvdW50OiBydW5Db3VudCxcbiAgICAgICAgICAgIGN1cnJlbnRDYXB0dXJlLFxuICAgICAgICAgICAgaGFzQ2FwdHVyZSxcbiAgICAgICAgICAgIHBlbmRpbmc6IChwcm9taXNlICE9IG51bGwpLFxuICAgICAgICAgICAgaGFzRXJyb3IsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIHJlc29sdmVDb3VudCxcbiAgICAgICAgICAgIHJlamVjdENvdW50LFxuICAgICAgICAgICAgc2V0dGxlQ291bnQ6IHJlamVjdENvdW50ICsgcmVzb2x2ZUNvdW50XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIGZ1bmN0aW9uIGdldFN5bmNIYW5kbGVyKGFzeW5jSGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3Qgc3luY0hhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhmdW5jdGlvbiBzeW5jSGFuZGxlcihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFzeW5jSGFuZGxlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBlO1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbW9zdCBzaWduaWZpY2FudCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBldmVudCBhdCB0aGlzIHRpbWUsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwcm9taXNlIGNvdWxkIGFjdHVhbGx5IGJlIGNhbGxlZCBtdWNoIGxhdGVyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgZWxlbWVudCdzIHZhbHVlIChldGMuKSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXB0dXJlZCA9IGNhcHR1cmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDYXB0dXJlKGNhcHR1cmVkKTtcbiAgICAgICAgICAgICAgICBzZXRIYXNDYXB0dXJlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9ICgpID0+IGFzeW5jSGFuZGxlcihjYXB0dXJlZCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChkZWJvdW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2Uoc3RhcnRQcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldERlYm91bmNlZFByb21pc2VTdGFydGVyKF8gPT4gc3RhcnRQcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzeW5jSGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikgeyByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7IH1cbmZ1bmN0aW9uIGlzVm9pZCh2KSB7IHJldHVybiB2ID09IHVuZGVmaW5lZDsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFzeW5jLWhhbmRsZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQW5pbWF0aW9uRnJhbWUoeyBjYWxsYmFjayB9KSB7XG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgfVxuICAgIH0sIFtoYXNDYWxsYmFja10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFuaW1hdGlvbi1mcmFtZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLy8gVXNlZCBpbnN0ZWFkIG9mIHVuZGVmaW5lZCBpbiBjYXNlIHVuZGVmaW5lZCBpcyBhIFxuLy8gdHlwZSB0aGF0J3MgZnJlcXVlbnRseSB1c2VkIGluIHRoZSB1c2VkIHVzZSBjYXNlLlxuY29uc3QgTmV2ZXJTZXQgPSBTeW1ib2woXCJuZXZlci1zZXRcIik7XG4vKipcbiAqIFJldHVybnMgYSB2YWx1ZSB0aGF0IGRvZXMgbm90IGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSBwcm92aWRlZCBnZXR0ZXIgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlLCBqdXN0IGluIGNhc2UgaXQncyBleHBlbnNpdmUuXG4gKlxuICogT3B0aW9uYWxseSwgdGhlIHZhbHVlIGNhbiBkZXBlbmQgb24gYSBzZXQgb2YgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGdldHRlci5cbiAqXG4gKiBFZmZlY3RpdmVseSwgdGhpcyBpcyBgdXNlTWVtb2AsIGV4Y2VwdCBpdCBwYXNzZXMgaXRzIGRlcGVuZGVuY2llcyB0byB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gZ2V0dGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byB1c2VcbiAqIEBwYXJhbSBhcmdzIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIHdpbGwgb25seSBiZSBjYWxsZWQgYWdhaW4gaWYgdGhlc2UgY2hhbmdlLlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnN0YW50KGdldHRlciwgLi4uYXJncykge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoTmV2ZXJTZXQpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHNldFZhbHVlKHByZXYgPT4gZ2V0dGVyKC4uLmFyZ3MpKTsgfSwgYXJncyk7XG4gICAgaWYgKHZhbHVlID09PSBOZXZlclNldClcbiAgICAgICAgcmV0dXJuIGdldHRlciguLi5hcmdzKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY29uc3RhbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGFzdERyb3BFZmZlY3QsIHNldExhc3REcm9wRWZmZWN0LCBnZXRMYXN0RHJvcEVmZmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgb25EcmFnRW5kLFxuICAgICAgICAgICAgcmVmXG4gICAgICAgIH0pLCBwKTtcbiAgICB9LCBbZWZmZWN0QWxsb3dlZCwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0LCAuLi5PYmplY3QuZW50cmllcyhkYXRhKS5mbGF0KCldKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgbGV0IHJldCA9IHtcbiAgICAgICAgdXNlRHJhZ2dhYmxlUHJvcHMsXG4gICAgICAgIGRyYWdnaW5nLFxuICAgICAgICBnZXREcmFnZ2luZyxcbiAgICAgICAgLy8gU2V0IG9uY2UgYSBkcmFnIGhhcyBjb21wbGV0ZWQgd2l0aCB0aGUgcmVzdWx0aW5nIGFjdGlvblxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXG4gICAgICAgIGxhc3REcm9wRWZmZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TGFzdERyb3BFZmZlY3RcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuO1xuO1xuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUZpbGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBmaWxlTmFtZTtcbiAgICBlcnJvclR5cGU7XG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUsIGJhc2UpIHtcbiAgICAgICAgc3VwZXIoYmFzZT8ubWVzc2FnZSA/PyBcIkFuIHVuc3BlY2lmaWVkIGVycm9yIG9jY3VycmVkIHJlYWRpbmcgdGhlIGZpbGUuXCIpO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gYmFzZT8ubmFtZTtcbiAgICB9XG59XG4vL01lcmdlZFByb3BzPFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RSwgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJvbkRyYWdFbnRlclwiIHwgXCJvbkRyYWdMZWF2ZVwiIHwgXCJvbkRyYWdPdmVyXCIgfCBcIm9uRHJvcFwiPj4sIFA+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3BwYWJsZSh7IGVmZmVjdCB9KSB7XG4gICAgY29uc3QgW2ZpbGVzRm9yQ29uc2lkZXJhdGlvbiwgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbiwgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Ryb3BwZWRGaWxlcywgc2V0RHJvcHBlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wcGVkU3RyaW5ncywgc2V0RHJvcHBlZFN0cmluZ3NdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Ryb3BFcnJvciwgc2V0RHJvcEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgLy8gQWxsIHRoZSBwcm9taXNlcyBnZW5lcmF0ZWQgZnJvbSB0aGUgZHJvcCBldmVudHMuXG4gICAgLy8gVXNlZCB0byBwcm9jZXNzIG11bHRpcGxlIGRyb3AgZXZlbnRzIGluIHN1Y2Nlc3Npb25cbiAgICBjb25zdCBkcm9wUHJvbWlzZXNSZWYgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50UHJvbWlzZUluZGV4LCBzZXRDdXJyZW50UHJvbWlzZUluZGV4LCBnZXRDdXJyZW50UHJvbWlzZUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcbiAgICBjb25zdCBbcHJvbWlzZUNvdW50LCBzZXRQcm9taXNlQ291bnQsIGdldFByb21pc2VDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgIC8vIEFueSB0aW1lIHdlIGFkZCBhIG5ldyBwcm9taXNlLCBpZiB0aGVyZSdzIG5vIGN1cnJlbnQgcHJvbWlzZSBydW5uaW5nLCB3ZSBuZWVkIHRvIHN0YXJ0IG9uZS5cbiAgICAvLyBJZiB0aGVyZSBpcyBvbmUsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZywgc2luY2UgaXQgcnVucyB0aGUgc2FtZSBjaGVjay5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcHJvbWlzZUNvdW50XSk7XG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXG4gICAgLy8gd2FpdCBmb3IgaXQgdG8gZmluaXNoLCB0aGVuIHNldCBvdXIgc3RhdGUgdG8gaXRzIHJlc3VsdC5cbiAgICAvLyBGaW5hbGx5LCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueW1vcmUgcHJvbWlzZXMuXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXG4gICAgLy8gd2hpY2ggd2lsbCB0cmlnZ2VyIHRoaXMgYWdhaW4uXG4gICAgLy9cbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXG4gICAgLy8gaW5kaXZpZHVhbGx5IGRyb3BwaW5nIGEgYnVuY2ggb2YgbGFyZ2UgZmlsZXMgb3Igc29tZXRoaW5nLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlID0gZHJvcFByb21pc2VzUmVmLmN1cnJlbnRbY3VycmVudFByb21pc2VJbmRleF07XG4gICAgICAgICAgICBjdXJyZW50UHJvbWlzZS50aGVuKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBmaWxlcywgc3RyaW5ncyB9ID0gaW5mbztcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRvbmUsIGFyZSB0aGVyZSBtb3JlIHByb21pc2VzIGluIHRoZSBxdWV1ZT9cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB0aGlzIGVmZmVjdCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xuICAgIGNvbnN0IHVzZURyb3BwYWJsZVByb3BzID0gKHApID0+IHtcbiAgICAgICAgLy9jb25zdCByZWYgPSB1c2VSZWY8RT4obnVsbCk7XG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cbiAgICAgICAgY29uc3Qgb25EcmFnRW50ZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBkZWZhdWx0PyBJIGNhbid0IGZpbmQgb25lIGFueXdoZXJlLlxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAoZWZmZWN0ID8/IFwibW92ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNaW1lVHlwZXMuYWRkKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKHsgdHlwZTogaXRlbS50eXBlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihuZXdGaWxlcyk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcbiAgICAgICAgY29uc3Qgb25EcmFnTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXG4gICAgICAgIGNvbnN0IG9uRHJhZ092ZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgZ2V0dGluZyB0aGUgZHJvcCBkYXRhIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIGNvbnN0IG9uRHJvcCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgY29uc3QgZHJvcERhdGEgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BGaWxlID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCh7IGRhdGEsIG5hbWU6IGZpbGUubmFtZSwgdHlwZTogZmlsZS50eXBlLCBzaXplOiBkYXRhLmJ5dGVMZW5ndGgsIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoZSkgPT4geyByZWplY3QobmV3IERyb3BwYWJsZUZpbGVFcnJvcihmaWxlLm5hbWUsIHJlYWRlci5lcnJvcikpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3BQcm9taXNlc1JlZi5jdXJyZW50LnB1c2goUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxuICAgICAgICAgICAgICAgICAgICBmaWxlczogZHJvcEZpbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHsgb25EcmFnRW50ZXIsIG9uRHJhZ0xlYXZlLCBvbkRyYWdPdmVyLCBvbkRyb3AgfSksIHApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXG4gICAgICAgIGZpbGVzRm9yQ29uc2lkZXJhdGlvbixcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcbiAgICAgICAgZHJvcHBlZFN0cmluZ3MsXG4gICAgICAgIGRyb3BFcnJvcixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc0ZvY3VzKHt9ID0ge30pIHtcbiAgICAvL2NvbnN0IFtmb2N1c2VkRWxlbWVudCwgc2V0Rm9jdXNlZEVsZW1lbnQsIGdldEZvY3VzZWRFbGVtZW50XSA9IHVzZVN0YXRlPEV2ZW50VGFyZ2V0IHwgbnVsbD4obnVsbCk7XG4gICAgLy9jb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy9jb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCgpO1xuICAgIGNvbnN0IHVzZUhhc0ZvY3VzUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGZvY3VzZWQgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQgPT0gYWN0aXZlRWxlbWVudDsgfSwgW2VsZW1lbnQsIGFjdGl2ZUVsZW1lbnRdKTtcbiAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlOyB9LCBbZWxlbWVudCwgYWN0aXZlRWxlbWVudF0pO1xuICAgIGNvbnN0IGxhc3RGb2N1c2VkID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50OyB9LCBbZWxlbWVudCwgbGFzdEFjdGl2ZUVsZW1lbnRdKTtcbiAgICBjb25zdCBsYXN0Rm9jdXNlZElubmVyID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkgPz8gZmFsc2U7IH0sIFtlbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUhhc0ZvY3VzUHJvcHMsXG4gICAgICAgIGZvY3VzZWRFbGVtZW50OiBhY3RpdmVFbGVtZW50LFxuICAgICAgICBsYXN0Rm9jdXNlZEVsZW1lbnQ6IGxhc3RBY3RpdmVFbGVtZW50LFxuICAgICAgICBmb2N1c2VkLFxuICAgICAgICBmb2N1c2VkSW5uZXIsXG4gICAgICAgIGxhc3RGb2N1c2VkLFxuICAgICAgICBsYXN0Rm9jdXNlZElubmVyXG4gICAgfTtcbn1cbi8qXG4oZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coe1xuICAgICAgICAgICAgdHlwZTogXCJmb2N1c1wiLFxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudDogZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHRvRm9jdXM6IGUudGFyZ2V0LFxuICAgICAgICAgICAgdG9CbHVyOiBlLnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfSlcbiAgICB9LCB7IGNhcHR1cmU6IHRydWUgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coe1xuICAgICAgICAgICAgdHlwZTogXCJibHVyXCIsXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50OiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgdG9CbHVyOiBlLnRhcmdldCxcbiAgICAgICAgICAgIHRvRm9jdXM6IGUucmVsYXRlZFRhcmdldFxuICAgICAgICB9KVxuICAgIH0sIHsgY2FwdHVyZTogdHJ1ZSB9KVxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coe1xuICAgICAgICAgICAgdHlwZTogXCJmb2N1c2luXCIsXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50OiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgdG9Gb2N1czogZS50YXJnZXQsXG4gICAgICAgICAgICB0b0JsdXI6IGUucmVsYXRlZFRhcmdldFxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImZvY3Vzb3V0XCIsXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50OiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgdG9CbHVyOiBlLnRhcmdldCxcbiAgICAgICAgICAgIHRvRm9jdXM6IGUucmVsYXRlZFRhcmdldFxuICAgICAgICB9KVxuICAgIH0pXG59KSgpKi9cbi8qKlxuICpcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcbiAqXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cbiAqICAgICogTm8gZm9jdXMgZXZlbnRzIGFyZSBmaXJlZC5cbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXG4gKiAgICAqIEEgYGZvY3VzYC9gZm9jdXNpbmAgZXZlbnQgKk1JR0hUKiBiZSBmaXJlZCBmb3IgYGJvZHlgLiBEZXBlbmRpbmcgb25cbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXG4gKiAzLiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKiAgICAqIGBmb2N1c2AgYW5kIGBmb2N1c2luYCBhcmUgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbC5cbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXG4gKiAgICAqIGBibHVyYCBhbmQgYGZvY3Vzb3V0YCBhcmUgZmlyZWQgb24gdGhlIG9sZCBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxuICogNS4gQW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogICAgKiBgZm9jdXNpbmAgaXMgKm5vdCogZmlyZWQgb24gYGJvZHlgLlxuICpcbiAqXG4gKiBJbiBzdW1tYXJ5OlxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXG4gKiAzLiBBIGBibHVyYCB3aXRob3V0IGEgYGZvY3VzYCBjYW4gYW5kIHdpbGwgb2NjdXIuIFRoaXMgbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHNvbGVseSB1c2UgYGZvY3VzYCB0byBkZXRlY3QgYWxsIGNoYW5nZXMuXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxuICpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEByZXR1cm5zXG4gKi9cbmxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IG51bGw7XG5sZXQgbGFzdEZvY3VzZWRFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIGdldExhc3RGb2N1c2VkRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbGFzdEZvY3VzZWRFbGVtZW50O1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudGx5Rm9jdXNlZEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50O1xufVxuY29uc3QgdXBkYXRlcnMgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBmb2N1c291dChlKSB7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgZiBvZiB1cGRhdGVycykge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBKdXN0IHdhaXQgZm9yIHRoZSBmb2N1c2luIGV2ZW50LlxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvY3VzaW4oZSkge1xuICAgIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gbGFzdEZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgZm9yIChsZXQgZiBvZiB1cGRhdGVycykge1xuICAgICAgICBmKCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgW2ksIHNldEldID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3dpbmRvd0ZvY3VzZWQsIHNldFdpbmRvd0ZvY3VzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3Qgd2ZUcnVlID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRXaW5kb3dGb2N1c2VkKHRydWUpOyB9LCBbXSk7XG4gICAgY29uc3Qgd2ZGYWxzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0V2luZG93Rm9jdXNlZChmYWxzZSk7IH0sIFtdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBGID0gKCkgPT4gc2V0SShpID0+ICsraSk7XG4gICAgICAgIGlmICh1cGRhdGVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2ZUcnVlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2ZGYWxzZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZXJzLmFkZChGKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZXJzLmRlbGV0ZShGKTtcbiAgICAgICAgICAgIGlmICh1cGRhdGVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdmVHJ1ZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdmRmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVFbGVtZW50OiBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCxcbiAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnQ6IGxhc3RGb2N1c2VkRWxlbWVudCxcbiAgICAgICAgZ2V0QWN0aXZlRWxlbWVudDogZ2V0Q3VycmVudGx5Rm9jdXNlZEVsZW1lbnQsXG4gICAgICAgIGdldExhc3RBY3RpdmVFbGVtZW50OiBnZXRMYXN0Rm9jdXNlZEVsZW1lbnQsXG4gICAgICAgIHdpbmRvd0ZvY3VzZWRcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc0ZvY3VzKHt9ID0ge30pIHtcbiAgICAvL2NvbnN0IFtmb2N1c2VkRWxlbWVudCwgc2V0Rm9jdXNlZEVsZW1lbnQsIGdldEZvY3VzZWRFbGVtZW50XSA9IHVzZVN0YXRlPEV2ZW50VGFyZ2V0IHwgbnVsbD4obnVsbCk7XG4gICAgLy9jb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy9jb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCgpO1xuICAgIGNvbnN0IHVzZUhhc0ZvY3VzUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGZvY3VzZWQgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQgPT0gYWN0aXZlRWxlbWVudDsgfSwgW2VsZW1lbnQsIGFjdGl2ZUVsZW1lbnRdKTtcbiAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlOyB9LCBbZWxlbWVudCwgYWN0aXZlRWxlbWVudF0pO1xuICAgIGNvbnN0IGxhc3RGb2N1c2VkID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50OyB9LCBbZWxlbWVudCwgbGFzdEFjdGl2ZUVsZW1lbnRdKTtcbiAgICBjb25zdCBsYXN0Rm9jdXNlZElubmVyID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkgPz8gZmFsc2U7IH0sIFtlbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUhhc0ZvY3VzUHJvcHMsXG4gICAgICAgIGZvY3VzZWRFbGVtZW50OiBhY3RpdmVFbGVtZW50LFxuICAgICAgICBsYXN0Rm9jdXNlZEVsZW1lbnQ6IGxhc3RBY3RpdmVFbGVtZW50LFxuICAgICAgICBmb2N1c2VkLFxuICAgICAgICBmb2N1c2VkSW5uZXIsXG4gICAgICAgIGxhc3RGb2N1c2VkLFxuICAgICAgICBsYXN0Rm9jdXNlZElubmVyXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xuICAgICAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyB0aGF0IGNsZWFycyBhbmQgcmVzZXRzIHRoZSBpbnRlcnZhbCBpZiBpdCBjaGFuZ2VzLlxuICAgICAgICBjb25zdCBhZGp1c3RhYmxlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbGFzdERlbGF5VXNlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgbGFzdERlbGF5VXNlZCA9IGN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGludGVydmFsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKiBBbGxvd3MgYSBwYXJlbnQgY29tcG9uZW50IHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCBjZXJ0YWluXG4gKiBjaGlsZCBjb21wb25lbnRzIG9uY2UgdGhleSBoYXZlIHJlbmRlcmVkLlxuICpcbiAqIFRoaXMgaG9vayBpcyBzbGlnaHRseSBtb3JlIGNvbXBsaWNhdGVkIGluIHRoYXQgaXQgcmV0dXJucyBib3RoIGFcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2ssIGJ1dCBhbHNvIGEgaG9vayB0aGF0IGVhY2ggY2hpbGQgd2lsbCBuZWVkXG4gKiB0byB1c2U6IGB1c2VNYW5hZ2VkQ2hpbGRgLiAgSXQncyBzdGFibGUgYWNyb3NzIHJlbmRlcnMsIHNvIGp1c3RcbiAqIHRvc3MgaXQgaW50byBhIGBDb250ZXh0YCBzbyB0aGUgY2hpbGRyZW4gY2FuIGhhdmUgYWNjZXNzIHRvIGl0LlxuICogVGhpcyBmdW5jdGlvbiByZWdpc3RlcnMgdGhlIGNoaWxkIHdpdGggdGhlIHBhcmVudCBhbmQgcHJvdmlkZXNcbiAqIGl0IHdpdGggYW55IHJlcXVlc3RlZCBpbmZvcm1hdGlvbiwgYnV0IGRvZXNuJ3QgZG8gYW55dGhpbmcgZWxzZVxuICogdW50aWwgaXQgdW5tb3VudHMgYW5kIHJldHJhY3RzIHRoYXQgaW5mb3JtYXRpb24uXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgdXNlTWFuYWdlZENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcbiAgICAgICAgLy8gQXMgc29vbiBhcyB0aGUgY29tcG9uZW50IG1vdW50cywgbm90aWZ5IHRoZSBwYXJlbnQgYW5kIHJlcXVlc3QgYSByZXJlbmRlci5cbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KChbcHJldkVsZW1lbnQsIHByZXZJbmRleF0sIGNoYW5nZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LnNldChlbGVtZW50LCBpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGluZm8uaW5kZXggPT0gdW5kZWZpbmVkLCBcIlR3byBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGluZGV4IHdlcmUgYWRkZWQsIHdoaWNoIG1heSByZXN1bHQgaW4gdW5leHBlY3RlZCBiZWhhdmlvci5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2VsZW1lbnQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xuICAgICAgICByZXR1cm4geyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudCxcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudDogaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlQ2hpbGRNYW5hZ2VyIH0gZnJvbSBcIi4vdXNlLWNoaWxkLW1hbmFnZXJcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VIYXNGb2N1cyB9IGZyb20gXCIuL3VzZS1oYXMtZm9jdXNcIjtcbi8qKlxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxuICogY29tcG9uZW50IGluIGEgc2V0IGlzIGFibGUgdG8gcmVjZWl2ZSBhIHRhYiBmb2N1cy4gKldoaWNoKlxuICogb2YgdGhvc2UgZWxlbWVudHMgcmVjZWl2ZXMgZm9jdXMgaXMgZGV0ZXJtaW5lZCBieSB5b3UsIGJ1dCBpdCdzXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcbiAqIGB1c2VMaW5lYXJOYXZpZ2F0aW9uYCwgd2hpY2ggbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZVxuICogZWxlbWVudCB3aXRoIHRoZSBhcnJvdyBrZXlzLCBgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbmAsIHdoaWNoXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxuICogYHVzZUxpc3ROYXZpZ2F0aW9uYCBpZiB5b3UganVzdCB3YW50IGV2ZXJ5dGhpbmcgYnVuZGxlZCB0b2dldGhlci5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcbiAqIGJ5IGV2ZXJ5IGNoaWxkIHRoYXQgdXNlcyB0aGlzIHJvdmluZyB0YWJpbmRleCBsb2dpYy4gIFRoZVxuICogcHJvcC1tb2RpZnlpbmcgaG9vayAqdGhhdCogaG9vayByZXR1cm5zIHNob3VsZCB0aGVuIGJlIHVzZWRcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcbiAqIHRvIGJlIGV4cGxpY2l0bHkgbWFkZSB1bnRhYmJhYmxlIHRvby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4KHsgdGFiYmFibGVJbmRleCB9KSB7XG4gICAgY29uc3QgeyBmb2N1c2VkLCBmb2N1c2VkSW5uZXIsIHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKCk7XG4gICAgY29uc3QgZ2V0VGFiYmFibGVJbmRleCA9IHVzZVN0YWJsZUdldHRlcih0YWJiYWJsZUluZGV4KTtcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRocmVlIHRoaW5ncyByZWxhdGVkIHRvIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgZWxlbWVudCdzIGluZGV4OlxuICAgIC8vIFdoYXQgaXQgaXMsXG4gICAgLy8gV2hhdCBpdCB3YXMgdGhlIGxhc3QgdGltZSxcbiAgICAvLyBXaGV0aGVyLCB3aGVuIHdlIHJlbmRlciB0aGlzIGNvbXBvbmVudCBhbmQgaXQncyBjaGFuZ2VkLCB0byBhbHNvIGZvY3VzIHRoZSBlbGVtZW50IHRoYXQgd2FzIG1hZGUgdGFiYmFibGUuXG4gICAgLy8gRm9yIHRoaXMgcmVhc29uLCBib29sZWFuIHwgbnVsbCBpcyBzZW1hbnRpY2FsbHkgaW50ZW50aW9uYWwsIGlmIHRlY2huaWNhbGx5IHVubmVjZXNzYXJ5IC0tIFxuICAgIC8vIHRydWUgb3IgZmFsc2UgaW1wbHkgYSBjaGFuZ2UganVzdCBoYXBwZW5lZCBhbmQgdGhhdCB0YWJiYWJsZUluZGV4ICE9IHByZXZUYWJiYWJsZS5jdXJyZW50LCBhbmQgbnVsbCBpbXBsaWVzIG5vIGNoYW5nZS5cbiAgICAvL2NvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gRG9lc24ndCBkbyBhbnl0aGluZywgYnV0IGhlcmUgYmVjYXVzZSB0aGVyZSdzIGEgcHJldHR5IGRlY2VudCBjaGFuY2UgaXQgbWlnaHQgaW4gdGhlIGZ1dHVyZS5cbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHVzZUhhc0ZvY3VzUHJvcHMoe30pLCBwcm9wcyksIFtdKTtcbiAgICBjb25zdCBmb2N1c09uQ2hhbmdlID0gKGZvY3VzZWRJbm5lciAhPSBmYWxzZSk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBwcmV2VGFiYmFibGUuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XSkge1xuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltwcmV2VGFiYmFibGUuY3VycmVudF0/LnNldFRhYmJhYmxlKGZhbHNlLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XS5zZXRUYWJiYWJsZSh0cnVlLCBmb2N1c09uQ2hhbmdlID8gXCJmb2N1c1wiIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBwcmV2VGFiYmFibGUuY3VycmVudCA9IHRhYmJhYmxlSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdGFiYmFibGVJbmRleCwgZm9jdXNPbkNoYW5nZV0pO1xuICAgIGNvbnN0IGZvY3VzU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUsIFwiZm9jdXNcIik7XG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3Qgc2V0VGFiYmFibGUgPSB1c2VDYWxsYmFjaygodGFiYmFibGUsIHNob3VsZEZvY3VzKSA9PiB7XG4gICAgICAgICAgICBzZXRUYWJiYWJsZTIodGFiYmFibGUpO1xuICAgICAgICAgICAgaWYgKHRhYmJhYmxlICYmIHNob3VsZEZvY3VzKVxuICAgICAgICAgICAgICAgIHNldFNob3VsZEZvY3VzKCEhc2hvdWxkRm9jdXMpO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGxldCBuZXdJbmZvID0ge1xuICAgICAgICAgICAgLi4uaW5mbyxcbiAgICAgICAgICAgIHNldFRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcbiAgICAgICAgY29uc3QgW3RhYmJhYmxlLCBzZXRUYWJiYWJsZTJdID0gdXNlU3RhdGUoZ2V0VGFiYmFibGVJbmRleCgpID09IGluZm8uaW5kZXgpO1xuICAgICAgICBjb25zdCBbc2hvdWxkRm9jdXMsIHNldFNob3VsZEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgLy9jb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudDxDaGlsZEVsZW1lbnQ+KCk7XG4gICAgICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHNob3VsZEZvY3VzICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG91bGRGb2N1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW2VsZW1lbnQsIHNob3VsZEZvY3VzXSk7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4UHJvcHMsXG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgZm9jdXNTZWxmXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlLXRpbWVvdXRcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbi8qKlxuICogV2hlbiB1c2VkIGluIHRhbmRlbSB3aXRoIGB1c2VSb3ZpbmdUYWJJbmRleGAsIGFsbG93cyBjb250cm9sIG9mXG4gKiB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0aGUgYXJyb3cga2V5cy5cbiAqXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGluZWFyTmF2aWdhdGlvbih7IGdldEluZGV4LCBzZXRJbmRleCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uIH0pIHtcbiAgICBuYXZpZ2F0aW9uRGlyZWN0aW9uID8/PSBcImVpdGhlclwiO1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHRhYmJhYmxlIGluZGV4IG5ldmVyIGVzY2FwZXMgdGhlIGJvdW5kcyBvZiBhbGwgYXZhaWxhYmxlIGNoaWxkcmVuXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgc2V0SW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgc2V0SW5kZXgoY2hpbGRDb3VudCAtIDEpO1xuICAgICAgICB9XG4gICAgfSwgW2luZGV4LCBjaGlsZENvdW50XSk7XG4gICAgLy8gVGhlc2UgYWxsb3cgdXMgdG8gbWFuaXB1bGF0ZSB3aGF0IG91ciBjdXJyZW50IHRhYmJhYmxlIGNoaWxkIGlzLlxuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleChpID0+ICsraSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoaSA9PiAtLWkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7XG4gICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGNvbnZlcnRFbGVtZW50U2l6ZSwgZ2V0TG9naWNhbERpcmVjdGlvbiB9ID0gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50KTtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcbiAgICAgICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJidHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJlZkVsZW1lbnRQcm9wcyh7IG9uS2V5RG93biB9KSwgcHJvcHMpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLFxuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgsXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxuICAgICAgICBuYXZpZ2F0ZVRvUHJldixcbiAgICAgICAgbmF2aWdhdGVUb1N0YXJ0LFxuICAgICAgICBuYXZpZ2F0ZVRvRW5kLFxuICAgIH07XG59XG4vKipcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAqXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dCwgc2V0SW5kZXggfSkge1xuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXG4gICAgLy8gTmV4dCwga2VlcCBhIG1hcHBpbmcgb2YgdHlwZWFoZWFkIHZhbHVlcyB0byBpbmRpY2VzIGZvciBmYXN0ZXIgc2VhcmNoaW5nLlxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlVGltZW91dCh7IHRpbWVvdXQ6IHR5cGVhaGVhZFRpbWVvdXQgPz8gMTAwMCwgY2FsbGJhY2s6ICgpID0+IHsgc2V0Q3VycmVudFR5cGVhaGVhZChudWxsKTsgc2V0SW52YWxpZFR5cGVhaGVhZChudWxsKTsgfSwgdHJpZ2dlckluZGV4OiBjdXJyZW50VHlwZWFoZWFkIH0pO1xuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBIYW5kbGUgdHlwZWFoZWFkIGZvciBpbnB1dCBtZXRob2QgZWRpdG9ycyBhcyB3ZWxsXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxuICAgIGNvbnN0IFtpbWVBY3RpdmUsIHNldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdXNlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHR5cGVhaGVhZCwgb25seSBjb21wYXJlIGEgc3RyaW5nIG9mIHRoZSBzYW1lIHNpemUgYXMgb3VyIGN1cnJlbnRseSB0eXBlZCBzdHJpbmcuXG4gICAgICAgIC8vIEJ5IG5vcm1hbGl6aW5nIHRoZW0gZmlyc3QsIHdlIGVuc3VyZSB0aGlzIGJ5dGUtYnktYnl0ZSBoYW5kbGluZyBvZiByYXcgY2hhcmFjdGVyIGRhdGEgd29ya3Mgb3V0IG9rYXkuXG4gICAgICAgIGxldCBzYWZlTGhzID0gbGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcbiAgICAgICAgbGV0IHNhZmVSaHMgPSByaHMudGV4dC5ub3JtYWxpemUoXCJORkRcIikuc3Vic3RyKDAsIHNhZmVMaHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGNvbGxhdG9yKVxuICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XG4gICAgICAgIHJldHVybiBjb21wYXJlO1xuICAgIH0sIFtjb2xsYXRvcl0pO1xuICAgIC8vIEhhbmRsZSBjaGFuZ2VzIGluIHR5cGVhaGVhZCB0aGF0IGNhdXNlIGNoYW5nZXMgdG8gdGhlIHRhYmJhYmxlIGluZGV4XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNvcnRlZFR5cGVhaGVhZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgY29tcGFyYXRvcik7XG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIC8vIChvciBtb3JlIHNwZWNpZmljYWxseSBcImZvciB3aGljaCB0aGVyZSBpcyBubyBlbnRyeSB0aGF0IHN0YXJ0cyB3aXRoIHRoYXQgaW5wdXRcIilcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFdlIGtub3cgcm91Z2hseSB3aGVyZSwgaW4gdGhlIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzLCBvdXIgbmV4dCB0eXBlYWhlYWQgbG9jYXRpb24gaXMuXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCB0aGF0IG1hdGNoZXMgdXMgKmFuZCogKGlmIGFueSBzdWNoIGV4aXN0KSBpcyAqYWZ0ZXIqIG91ciBjdXJyZW50IHNlbGVjdGlvbi5cblxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbiBpcyBpZiB0aGUgb25seSBvdGhlciBvcHRpb24gaXMgYmVoaW5kIHVzLlxuXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cbiAgICAgICAgICAgICAgICAgIFRob3VnaCB0aGVyZSdzIGFsc28gYSBjYXNlIGZvciBqdXN0IGdvaW5nIHVwd2FyZHMgdG8gdGhlIG5lYXJlc3QgdG8gcHJldmVudCBqdW1waW5lc3MuXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cblxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgd2UgY2FuIGZpbmQgdGhlIG9uZSB3aG9zZSBgdW5zb3J0ZWRJbmRleGAgaXMgdGhlIGxvd2VzdCBhbW9uZ3N0IGFsbCBvdGhlciBlcXVhbCBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxuXG4gICAgICAgICAgICAgICAgICBUT0RPOiBUaGUgYmluYXJ5IHNlYXJjaCBzdGFydHMgdGhpcyBvZmYgd2l0aCBhIHNvbGlkIE8obG9nIG4pLCBidXQgb25lLWNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXG4gICAgICAgICAgICAgICAgICBleGNlcHRpb24gZm9yIG9uZS1jaGFyYWN0ZXIgc3RyaW5ncywgYnV0IHRoYXQncyBqdXN0IGtpY2tpbmcgdGhlIGNhbiBkb3duXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGFyZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGNhbmRpZGF0ZXMnIHBvc2l0aW9ucyBpbiBib3RoIG91ciBzb3J0ZWQgYXJyYXkgYW5kIHRoZSB1bnNvcnRlZCBET00uXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHR3byBhcmUgb25seSBzZXQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIGFoZWFkIG9mIHVzLCBidXQgdGhlIHByaW5jaXBsZSdzIHRoZSBzYW1lIG90aGVyd2lzZVxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJlc3RGaXQgPSAodSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4QWxsID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gZ2V0SW5kZXgoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhOZXh0XS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWQsIGNvbXBhcmF0b3JdKTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBlbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xuICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleTtcbiAgICAgICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUgJiYgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd2F5IHRoYXQgZG9lc24ndCBzcGxpdCBVVEYtMTYgc3Vycm9nYXRlcy5cbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHQgPT4gdCA9PT0gbnVsbCA/IG51bGwgOiBbLi4udF0ucmV2ZXJzZSgpLnNsaWNlKDEpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUga2V5IHByb3BlcnR5IHJlcHJlc2VudHMgdGhlIHR5cGVkIGNoYXJhY3RlciBPUiB0aGUgXCJuYW1lZCBrZXkgYXR0cmlidXRlXCIgb2YgdGhlIGtleSBwcmVzc2VkLlxuICAgICAgICAgICAgLy8gVGhlcmUncyBubyBkZWZpbml0ZSB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSwgYnV0IGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXNcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBubyBvbmUtY2hhcmFjdGVyIG5hbWVzLCBhbmQgdGhlcmUgYXJlIG5vIG5vbi1BU0NJSS1hbHBoYSBuYW1lcy5cbiAgICAgICAgICAgIC8vIFRodXMsIGFueSBvbmUtY2hhcmFjdGVyIG9yIG5vbi1BU0NJSSB2YWx1ZSBmb3IgYGtleWAgaXMgKmFsbW9zdCBjZXJ0YWlubHkqIGEgdHlwZWQgY2hhcmFjdGVyLlxuICAgICAgICAgICAgY29uc3QgaXNDaGFyYWN0ZXJLZXkgPSAoa2V5Lmxlbmd0aCA9PT0gMSB8fCAhL15bQS1aYS16XS8udGVzdChrZXkpKTtcbiAgICAgICAgICAgIGlmIChpc0NoYXJhY3RlcktleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCIgXCIgJiYgKGdldEN1cnJlbnRUeXBlYWhlYWQoKSA/PyBcIlwiKS50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgYmVjYXVzZSBhIHNwYWNlYmFyIGNhbid0IGV2ZXIgXG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYXRlIGEgdHlwZWFoZWFkLCBvbmx5IGNvbnRpbnVlIG9uZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gKFNwZWNpZmljYWxseSwgbGV0IHRoZSBldmVudCBjb250aW51ZSBwcm9wYWdhdGlvbiBpbiB0aGlzIGNhc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IFdvbid0IGJlIHRydWUgZm9yIHRoZSBmaXJzdCBrZXlkb3duXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJlZm9yZSB1c2VMYXlvdXRFZmZlY3QgaXMgY2FsbGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGFjdHVhbGx5IGFwcGx5IHRoZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0pLCBwcm9wcyk7XG4gICAgfTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDApO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RleHQsIGNvbXBhcmF0b3JdKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICB9O1xufVxuLyoqXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXG4gKlxuICogSXQncyB1c2VkIGhlcmUgdG8gcXVpY2tseSBmaW5kIGEgZ29vZCBzcG90IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3Igb3VyIG5leHQgdHlwZWFoZWFkIGNhbmRpZGF0ZS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyZXMgYHdhbnRlZGAgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbiBgYXJyYXlgXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcbiAgICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xuICAgICAgICB2YXIgY29tcGFyaXNvblJlc3VsdCA9IGNvbXBhcmF0b3Iod2FudGVkLCBhcnJheVt0ZXN0SW5kZXhdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcbi8qKlxuICpcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxuICogYnV0IGl0J3Mgbm90IGJhZCBmb3IgYSBjb2xsYXRpb24gY3Jhc2ggY291cnNlIGFuZCBJIG1pZ2h0IHVzZSBpdCBhZ2Fpbi5cbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxuICpcbiAqIHxMYW5nLnxUYXJnZXR8VXNlciBpbnB1dHxgYmFzZWB8YGFjY2VudGB8YGNhc2VgfGB2YXJpYW50YHxcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcbiAqIHxFTnxIaXzvvKjvvYl84pyFfOKchXzinIV84p2MfFxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxuICogfEVOfEhpfEJ5ZXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxBYXzinIV84pyFfOKdjHzinYx8XG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcbiAqIHxFTnzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt87722fOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844uVfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcbiAqIHxaSHzntIV857qifOKdjHzinYx84p2MfOKdjHxcbiAqXG4gKlxuICogKE5vdGUgdG8gc2VsZjogQXQgc29tZSBwb2ludCwgdGhpcyBmaWxlIHdpbGwgcHJvYmFibHkgYmUgbm9ybWFsaXplZFxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXG4gKlxuICovXG5jb25zdCBkdW1teSA9IG51bGw7XG4vKipcbiAqIEltcGxlbWVudHMgcHJvcGVyIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGNvbXBvbmVudHMgbGlrZSBsaXN0Ym94ZXMsIGJ1dHRvbiBncm91cHMsIG1lbnVzLCBldGMuXG4gKlxuICogSW4gdGhlIGRvY3VtZW50IG9yZGVyLCB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIFwiZm9jdXNlZFwiIG9yIFwidGFiYmFibGVcIiBlbGVtZW50LCBtYWtpbmcgaXQgYWN0IG1vcmUgbGlrZSBvbmUgY29tcGxldGUgdW5pdCBpbiBjb21wYXJpc29uIHRvIGV2ZXJ5dGhpbmcgYXJvdW5kIGl0LlxuICogTmF2aWdhdGluZyBmb3J3YXJkcy9iYWNrd2FyZHMgY2FuIGJlIGRvbmUgd2l0aCB0aGUgYXJyb3cga2V5cywgSG9tZS9FbmQga2V5cywgb3IgYW55IGFueSB0ZXh0IGZvciB0eXBlYWhlYWQgdG8gZm9jdXMgdGhlIG5leHQgaXRlbSB0aGF0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uIH0pIHtcbiAgICBrZXlOYXZpZ2F0aW9uID8/PSBcImVpdGhlclwiO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGluZGV4KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyBjaGlsZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4UHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzU2VsZiB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyB0YWJiYWJsZUluZGV4OiB0YWJiYWJsZUluZGV4IH0pO1xuICAgIGNvbnN0IHsgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0OiAxMDAwIH0pO1xuICAgIGNvbnN0IHsgbmF2aWdhdGVUb0VuZCwgbmF2aWdhdGVUb0luZGV4LCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9TdGFydCwgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4gfSk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsIG5vdGlmeSB0aGUgcHJldmlvdXNcbiAgICAvLyBhbmQgbmV4dCBjaGlsZCBhcyBzdWNoLCBhbmQgb3B0aW9uYWxseSBmb2N1cyB0aGF0IG5leHQgb25lLlxuICAgIC8qdXNlTGF5b3V0RWZmZWN0KChbcHJldlRhYmJhYmxlSW5kZXhdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb3RpZnlpbmcgY2hpbGRyZW4gb2YgaW5kZXggY2hhbmdlIGZyb20gJHtwcmV2VGFiYmFibGVJbmRleH0gdG8gJHt0YWJiYWJsZUluZGV4fWApO1xuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bcHJldlRhYmJhYmxlSW5kZXhdPy5zZXRUYWJiYWJsZShmYWxzZSk7XG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XT8uc2V0VGFiYmFibGUodHJ1ZSlcbiAgICB9LCBbdGFiYmFibGVJbmRleF0pKi9cbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvblByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHAxID0gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHByb3BzKTtcbiAgICAgICAgY29uc3QgcDIgPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMocDEpO1xuICAgICAgICBsZXQgcmV0ID0gdXNlUm92aW5nVGFiSW5kZXhQcm9wcyhwMik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyAuLi5ub3RoaW5nIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IG9uQ2xpY2s6IHJvdmVUb1NlbGYgfSksIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm92ZVRvU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpOyB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wczogdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZSxcbiAgICAgICAgICAgIC8vcm92ZVRvU2VsZixcbiAgICAgICAgICAgIC8vZWxlbWVudFxuICAgICAgICB9O1xuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIG5hdmlnYXRlVG9JbmRleF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXG4gICAgICAgIG5hdmlnYXRlVG9TdGFydCxcbiAgICAgICAgbmF2aWdhdGVUb0VuZCxcbiAgICAgICAgZm9jdXNTZWxmXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0LW5hdmlnYXRpb24uanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290RWxlbWVudCBUaGUgRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMFxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8XG4gIC8qIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c2VkICAqL1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IFwid2ljZy1pbmVydFwiO1xuaW1wb3J0IFwiYmxvY2tpbmctZWxlbWVudHNcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGlzRm9jdXNhYmxlIH0gZnJvbSBcInRhYmJhYmxlXCI7XG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XG4vKipcbiAqIEFsbG93cyBhbiBlbGVtZW50IHRvIHRyYXAgZm9jdXMgYnkgYXBwbHlpbmcgdGhlIFwiaW5lcnRcIiBhdHRyaWJ1dGUgdG8gYWxsIHNpYmxpbmcsIGF1bnQsIGFuZCB1bmNsZSBub2Rlcy5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cbiAqIChzcGVjaWZpY2FsbHkgdmlhIGBibG9ja2luZ0VsZW1lbnRzYCwgd2l0aCBhIHNtYWxsIHBvbHlmaWxsIGJlY2F1c2UgSSdtIG5vdCBzdXJlIGhvdyBsb25nXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxuICogQHBhcmFtIHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xuICAgIGNvbnN0IHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICAgICAgICAvLyB0byB3aGF0ZXZlcidzIGN1cnJlbnRseSBhdCB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLnNldChibG9ja2luZ0VsZW1lbnRzLnRvcCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKSA/PyBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gLi4ucmVhc29ucz9cbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShibG9ja2luZ0VsZW1lbnRzLnRvcCk/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnJlbW92ZSh0YXJnZXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAvLyB0aGF0IGhhcyByZXR1cm5lZCB0byB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uZ2V0KGJsb2NraW5nRWxlbWVudHMudG9wKT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFt0YXJnZXRdKTtcbn1cbmZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XG4gICAgLy8gTm93IHRoYXQgdGhlIGRpYWxvZyBpcyBvcGVuLCBmaW5kIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7IGFjY2VwdE5vZGU6IChub2RlKSA9PiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgaXNGb2N1c2FibGUobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQKSB9KTtcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xuICAgIHJldHVybiBmaXJzdEZvY3VzYWJsZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ibG9ja2luZy1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbi8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IChub3QgaW5jbHVkaW5nIHRoZSBib2R5IGVsZW1lbnQpXG4vLyBVc2VkIGJ5IHRoZSBmb2N1cyB0cmFwIHRvIGtub3cgd2hhdCB0byByZXN0b3JlIHRvLlxuLypcbmxldCBsYXN0Rm9jdXNlZEVsZW1lbnQ6IEhUTUxPclNWR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcbmZ1bmN0aW9uIGhhbmRsZXIoZTogRm9jdXNFdmVudCkge1xuICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG59XG5sZXQgbGlzdGVuZXJzID0gMDtcbmZ1bmN0aW9uIGFkZExpc3RlbmVyKCkge1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IDApXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBcbiAgICAgICAgKytsaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgIC0tbGlzdGVuZXJzO1xuXG4gICAgaWYgKGxpc3RlbmVycyA9PT0gMClcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlcik7XG59Ki9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlIH0pIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgIC8vY29uc3QgW2VsZW1lbnRUb1Jlc3RvcmUsIHNldEVsZW1lbnRUb1Jlc3RvcmUsIGdldEVsZW1lbnRUb1Jlc3RvcmVdID0gdXNlU3RhdGU8SFRNTE9yU1ZHRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAgIC8qdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgfSwgW10pXG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBsYXN0Rm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldEVsZW1lbnRUb1Jlc3RvcmUobGFzdEZvY3VzZWRFbGVtZW50ID8/IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRvUmVzdG9yZSA9IGdldEVsZW1lbnRUb1Jlc3RvcmUoKSE7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvUmVzdG9yZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZV0pOyovXG4gICAgbGV0IGFjdGl2ZSA9ICh0cmFwQWN0aXZlIC8qJiYgISFlbGVtZW50VG9SZXN0b3JlKi8pO1xuICAgIHVzZUJsb2NraW5nRWxlbWVudChhY3RpdmUgPyBlbGVtZW50IDogbnVsbCk7XG4gICAgY29uc3QgdXNlRm9jdXNUcmFwUHJvcHMgPSAoKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLW1vZGFsXCI6IGFjdGl2ZSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0sIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUZvY3VzVHJhcFByb3BzLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbi8qKlxuICogV2UgbmVlZCB0byBrZWVwIGEgc29ydGVkIGxpc3Qgb2YgZWxlbWVudHMgc28gdGhhdCB3ZSBhbHdheXMga25vdyB3aGF0XG4gKiB0aGUgZmlyc3QgYW5kIGxhc3QgZWxlbWVudCBhcmUsIGV2ZW4gaWYgYW4gYXJiaXRyYXJ5IGNoaWxkXG4gKiB1bm1vdW50cyBpdHNlbGYgYXQgYW4gYXJiaXRyYXJ5IHRpbWUuXG4gKlxuICogVGhpcyBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBsaXN0IG9mIGNoaWxkcmVuIHdlIGdldCBiYWNrIGZyb20gYHVzZUNoaWxkTWFuYWdlcmBcbiAqIGJlY2F1c2UgaXQncyBub3doZXJlIG5lYXIgd29ydGggdGhlIGVmZm9ydCB0byBrZWVwIHRoYXQgbGlzdCBzb3J0ZWRcbiAqIHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudCBvcmRlciwgZXNwZWNpYWxseSBzaW5jZSB3ZSBuZWVkIHRvIHdhaXQgdW50aWxcbiAqIHdlJ3ZlIHJlbmRlcmVkIGF0IGxlYXN0IG9uY2UgdG8gZXZlbiBoYXZlIGEgc2hvdCBhdCB0cnlpbmcgdGhhdC5cbiAqL1xuLypjb25zdCBlbGVtZW50QnlEb2N1bWVudE9yZGVyID0gdXNlUmVmPCgoSFRNTE9yU1ZHRWxlbWVudCAmIE5vZGUpIHwgbnVsbClbXT4oW10pO1xuY29uc3QgW3NvcnRlZEVsZW1lbnRDb3VudCwgc2V0U29ydGVkRWxlbWVudENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG5jb25zdCBbb3ZlcnJpZGRlbiwgc2V0T3ZlcnJpZGRlbiwgZ2V0T3ZlcnJpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCB0cmFwQWN0aXZlID0gKG92ZXJyaWRkZW4gPyBmYWxzZSA6IGFjdGl2ZUlmTm90T3ZlcnJpZGRlbik7XG5jb25zdCBnZXRUcmFwQWN0aXZlID0gdXNlU3RhYmxlR2V0dGVyKHRyYXBBY3RpdmUpO1xuY29uc3QgeyBjaGlsZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW4sIHVzZU1hbmFnZWRDaGlsZCB9ID0gdXNlQ2hpbGRNYW5hZ2VyPE5vZGUsIEZvY3VzVHJhcENoaWxkSW5mbyAmIHsgaW5kZXg6IHN0cmluZywgZWxlbWVudDogTm9kZSB8IG51bGwgfT4oKTtcbi8vY29uc3QgZmlyc3RGb2N1c2FibGVDaGlsZCA9IHVzZVJlZjxGb28gfCBudWxsPihudWxsKTtcbi8vY29uc3QgbGFzdEZvY3VzYWJsZUNoaWxkID0gdXNlUmVmPEZvbyB8IG51bGw+KG51bGwpO1xuXG4vKmNvbnN0IGFkZEZvY3VzYWJsZUNoaWxkID0gdXNlQ2FsbGJhY2soKGNoaWxkOiBOb2RlKSA9PiB7XG4gICAgaWYgKGZpcnN0Rm9jdXNhYmxlQ2hpbGQuY3VycmVudCA9PSBudWxsKSB7XG4gICAgICAgIGZpcnN0Rm9jdXNhYmxlQ2hpbGQuY3VycmVudCA9IHsgbm9kZTogY2hpbGQsIHByZXY6IG51bGwsIG5leHQ6IGxhc3RGb2N1c2FibGVDaGlsZC5jdXJyZW50Py5ub2RlID8/IG51bGwgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBwcmVjZWRpbmcgPSAhIShmaXJzdEZvY3VzYWJsZUNoaWxkLmN1cnJlbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oY2hpbGQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpO1xuICAgICAgICBpZiAocHJlY2VkaW5nKVxuICAgICAgICAgICAgZmlyc3RGb2N1c2FibGVDaGlsZC5jdXJyZW50ID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RGb2N1c2FibGVDaGlsZC5jdXJyZW50ID09IG51bGwpIHtcbiAgICAgICAgbGFzdEZvY3VzYWJsZUNoaWxkLmN1cnJlbnQgPSB7bm9kZTogY2hpbGQsIG5leHQ6IG51bGwsIHByZXY6IGZpcnN0Zn07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZm9sbG93aW5nID0gISEobGFzdEZvY3VzYWJsZUNoaWxkLmN1cnJlbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oY2hpbGQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpO1xuICAgICAgICBpZiAoZm9sbG93aW5nKVxuICAgICAgICAgICAgbGFzdEZvY3VzYWJsZUNoaWxkLmN1cnJlbnQgPSBjaGlsZDtcbiAgICB9XG59LCBbXSk7XG5cbmNvbnN0IHJlbW92ZUZvY3VzYWJsZUNoaWxkID0gdXNlQ2FsbGJhY2soKGNoaWxkOiBOb2RlKSA9PiB7XG4gICAgaWYgKGZpcnN0Rm9jdXNhYmxlQ2hpbGQuY3VycmVudCA9PSBudWxsKSB7XG4gICAgICAgIGZpcnN0Rm9jdXNhYmxlQ2hpbGQuY3VycmVudCA9IGNoaWxkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHByZWNlZGluZyA9ICEhKGZpcnN0Rm9jdXNhYmxlQ2hpbGQuY3VycmVudC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihjaGlsZCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyk7XG4gICAgICAgIGlmIChwcmVjZWRpbmcpXG4gICAgICAgICAgICBmaXJzdEZvY3VzYWJsZUNoaWxkLmN1cnJlbnQgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAobGFzdEZvY3VzYWJsZUNoaWxkLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgICAgICBsYXN0Rm9jdXNhYmxlQ2hpbGQuY3VycmVudCA9IGNoaWxkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGZvbGxvd2luZyA9ICEhKGxhc3RGb2N1c2FibGVDaGlsZC5jdXJyZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGNoaWxkKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKTtcbiAgICAgICAgaWYgKGZvbGxvd2luZylcbiAgICAgICAgICAgIGxhc3RGb2N1c2FibGVDaGlsZC5jdXJyZW50ID0gY2hpbGQ7XG4gICAgfVxufSwgW10pOyovXG4vKmNvbnN0IHVzZUZvY3VzVHJhcFByb3BzID0gdXNlQ2FsbGJhY2s8VXNlRm9jdXNUcmFwUHJvcHM8RT4+KDxQIGV4dGVuZHMgVXNlRm9jdXNUcmFwUHJvcHNQYXJhbWV0ZXJzPEU+Pihwcm9wczogUCk6IFVzZUZvY3VzVHJhcFByb3BzUmV0dXJuVHlwZTxFLCBQPiA9PiB7XG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQ8RT4oKTtcbiAgICBjb25zdCB7IHVzZUZvY3VzUHJvcHMsIGZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXM8RT4oKTtcblxuXG4gICAgdXNlQmxvY2tpbmdFbGVtZW50KHRyYXBBY3RpdmU/IGVsZW1lbnQgOiBudWxsKTtcbiAgICBjb25zdCBoYXNGaXJzdEVsZW1lbnRUb0ZvY3VzID0gISEoZWxlbWVudEJ5RG9jdW1lbnRPcmRlci5jdXJyZW50WzBdKVxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoYXNGaXJzdEVsZW1lbnRUb0ZvY3VzICYmIHRyYXBBY3RpdmUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRCeURvY3VtZW50T3JkZXIuY3VycmVudFswXT8uZm9jdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcGx5SW52ZXJzZUluZXJ0KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZSwgaGFzRmlyc3RFbGVtZW50VG9Gb2N1c10pO1xuXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKHsgXCJhcmlhLW1vZGFsXCI6IHRyYXBBY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IGFzIHt9LCB1c2VGb2N1c1Byb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKTtcbn0sIFt0cmFwQWN0aXZlXSk7XG5cbnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZUlmTm90T3ZlcnJpZGRlbikge1xuICAgICAgICBjb25zdCB7IGhhbmRsZSwgcHJldmlvdXMgfSA9IG9uRm9jdXNUcmFwRW5hYmxlKHsgc2V0T3ZlcnJpZGRlbiB9KTtcbiAgICAgICAgcHJldmlvdXM/LnNldE92ZXJyaWRkZW4odHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG9uRm9jdXNUcmFwRGlzYWJsZShoYW5kbGUpPy5zZXRPdmVycmlkZGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn0sIFthY3RpdmVJZk5vdE92ZXJyaWRkZW5dKVxuXG5cbmNvbnN0IHVzZUZvY3VzVHJhcEZvY3VzYWJsZSA9IHVzZUNhbGxiYWNrPFVzZUZvY3VzVHJhcEZvY3VzYWJsZT4oPENoaWxkRWxlbWVudCBleHRlbmRzIChOb2RlICYgSFRNTE9yU1ZHRWxlbWVudCk+KGluZm86IEZvY3VzVHJhcENoaWxkSW5mbykgPT4ge1xuXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQ8Q2hpbGRFbGVtZW50PigpO1xuXG5cblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgd2hlcmUgd2Ugc2hvdWxkIGJlIGluc2VydGVkXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBiaW5hcnlTZWFyY2goZWxlbWVudEJ5RG9jdW1lbnRPcmRlci5jdXJyZW50LCBlbGVtZW50LCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtaW5kZXggLSAxO1xuICAgICAgICAgICAgZWxlbWVudEJ5RG9jdW1lbnRPcmRlci5jdXJyZW50LnNwbGljZShpbmRleCwgMCwgZWxlbWVudCk7XG4gICAgICAgICAgICBzZXRTb3J0ZWRFbGVtZW50Q291bnQoYyA9PiArK2MpO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgd2hlcmUgd2UgY3VycmVudGx5IGFyZSBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyAodGhpcyBpcyBsaWtlbHkgdG8gaGF2ZSBjaGFuZ2VkIHNpbmNlIHdlIHdlcmUgYWRkZWQpXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYmluYXJ5U2VhcmNoKGVsZW1lbnRCeURvY3VtZW50T3JkZXIuY3VycmVudCwgZWxlbWVudCwgY29tcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgZWxlbWVudEJ5RG9jdW1lbnRPcmRlci5jdXJyZW50LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgc2V0U29ydGVkRWxlbWVudENvdW50KGMgPT4gLS1jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSwgW2VsZW1lbnRdKVxuXG5cbiAgICBjb25zdCBpbmRleCA9IGdlbmVyYXRlUmFuZG9tSWQoKTtcbiAgICB1c2VNYW5hZ2VkQ2hpbGQoeyAuLi5pbmZvLCBpbmRleCwgZWxlbWVudCB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUZvY3VzVHJhcEZvY3VzYWJsZVByb3BzOiB1c2VDYWxsYmFjazxVc2VGb2N1c1RyYXBGb2N1c2FibGVQcm9wczxDaGlsZEVsZW1lbnQ+Pig8UCBleHRlbmRzIFVzZUZvY3VzVHJhcEZvY3VzYWJsZVByb3BzUGFyYW1ldGVyczxDaGlsZEVsZW1lbnQ+PihwOiBQKTogVXNlRm9jdXNUcmFwRm9jdXNhYmxlUHJvcHNSZXR1cm5UeXBlPENoaWxkRWxlbWVudCwgUD4gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBvbktleURvd24gPSB1c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvKmNvbnN0IGlzVGFiID0gKGUua2V5ID09PSBcIlRhYlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0VHJhcEFjdGl2ZSgpICYmIGlzVGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRmlyc3QgPSAoZWxlbWVudCA9PSBlbGVtZW50QnlEb2N1bWVudE9yZGVyLmN1cnJlbnRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0xhc3QgPSAoZWxlbWVudCA9PSBlbGVtZW50QnlEb2N1bWVudE9yZGVyLmN1cnJlbnRbZWxlbWVudEJ5RG9jdW1lbnRPcmRlci5jdXJyZW50Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzTmV4dE5hdiA9ICghZS5zaGlmdEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1ByZXZOYXYgPSAoZS5zaGlmdEtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmlyc3QgJiYgaXNQcmV2TmF2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnlEb2N1bWVudE9yZGVyLmN1cnJlbnRbZWxlbWVudEJ5RG9jdW1lbnRPcmRlci5jdXJyZW50Lmxlbmd0aCAtIDFdIS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzTGFzdCAmJiBpc05leHROYXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCeURvY3VtZW50T3JkZXIuY3VycmVudFswXSEuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0qXFwvXG4gICAgICAgICAgICB9LCBbZWxlbWVudF0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHModXNlUmVmRWxlbWVudFByb3BzKHsgb25LZXlEb3duIH0pLCBwKTtcbiAgICAgICAgfSwgW2VsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgdHJhcEFjdGl2ZV0pXG4gICAgfVxuXG5cbn0sIFt1c2VNYW5hZ2VkQ2hpbGRdKSovXG4vKlxuZnVuY3Rpb24gaXNGb2N1c2FibGU8VCBleHRlbmRzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudCB8IFNWR0VsZW1lbnQgfCBNYXRoTUxFbGVtZW50PihlbGVtZW50OiBUKSB7XG4gICAgaWYgKGVsZW1lbnQudGFiSW5kZXggPiAwIHx8IChlbGVtZW50LnRhYkluZGV4ID09PSAwICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGFiSW5kZXhcIikgIT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChcImRpc2FibGVkXCIgaW4gZWxlbWVudCAmJiBlbGVtZW50LmRpc2FibGVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgIHJldHVybiAhIShlbGVtZW50IGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmICYmIChlbGVtZW50IGFzIEhUTUxBbmNob3JFbGVtZW50KS5yZWwgIT0gJ2lnbm9yZSc7XG4gICAgICAgIGNhc2UgXCJJTlBVVFwiOlxuICAgICAgICAgICAgcmV0dXJuIChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgIT0gJ2hpZGRlbicgJiYgKGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSAhPSAnZmlsZSc7XG4gICAgICAgIGNhc2UgXCJCVVRUT05cIjpcbiAgICAgICAgY2FzZSBcIlNFTEVDVFwiOlxuICAgICAgICBjYXNlIFwiVEVYVEFSRUFcIjpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXR0ZW1wdEZvY3VzKGNoaWxkOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQgfCBNYXRoTUxFbGVtZW50KSB7XG4gICAgaWYgKCFpc0ZvY3VzYWJsZShjaGlsZCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNoaWxkLmZvY3VzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb2N1c0ZpcnN0RGVzY2VuZGFudDxUIGV4dGVuZHMgTm9kZT4oZWxlbWVudDogVCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcblxuICAgIH1cbn1cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWZvY3VzLXRyYXAuanMubWFwIixudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsibCIsInUiLCJ0IiwibyIsInIiLCJmIiwiZSIsImMiLCJzIiwiYSIsImgiLCJ2IiwieSIsImQiLCJfIiwiayIsImIiLCJtIiwiZyIsImoiLCJ3IiwieCIsIlAiLCJNIiwiQSIsIkMiLCJIIiwiJCIsIlQiLCJPIiwiTCIsIlMiLCJuIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZVAiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjYXBpdGFsaXplIiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwidXNlTWVtbyIsInRoaXMiLCJjcmVhdGVDb250ZXh0IiwibWVtbyIsInVzZUNvbnRleHQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztBQUFHLEtBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBR0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsb0VBQW9FLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUVYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRUQsR0FBQyxDQUFDLEtBQUssRUFBRUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW1DLFNBQVNhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBT0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWYsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDZ0IsR0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFZCxHQUFDLEdBQUdKLEdBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUNJLEdBQUMsQ0FBQ0osR0FBQyxDQUFDLGlCQUFpQixHQUFHRyxHQUFDLEVBQUVlLEdBQUMsRUFBQyxDQUFDLFNBQVNBLEdBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUNoQixHQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDVSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDSixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTSSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFYixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDRCxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ08sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNlLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUNRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFbkIsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTa0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTNEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNuQixHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJYyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNlLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNwQixHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQ1MsR0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHSSxHQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQ1UsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM5QixHQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVM4QixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFeEIsR0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBR21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUNMLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUwsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUwsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFZ0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTSCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDdkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFDLENBQUMsT0FBTyxFQUFFQSxHQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUV1QixHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN2QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFVSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDL0IsR0FBQyxDQUFDLEVBQUUsRUFBRUEsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQ1IsR0FBQyxDQUFDRSxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVQLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQStPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDRCxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ1ksR0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVixHQUFDLENBQUMsS0FBSyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQXVEYSxHQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQ0wsR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUNILEdBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQ0gsR0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUNELEdBQUMsQ0FBQ1gsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDZSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ2IsR0FBQyxDQUFDLENBQUM7O0NDQWxoVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMyQixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNZLEdBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTUixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUE0TixTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ04sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUNhLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDZCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDYSxHQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDZCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUNkLEdBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNjLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8scUJBQXFCLENBQUMsU0FBU2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0NDQXI0RCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUMsR0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQXFWLElBQTJNLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUlBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBcUwsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJRCxHQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUQsR0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNMLEdBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBdW5CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJSixHQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsa09BQWtPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUErS0YsR0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUNBLEdBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNDLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFJLElBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxNQUFNQSxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENB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QTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtBQUNBO0NBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7O0NDaFBBLE1BQU0sV0FBVyxHQUFHLCtiQUErYixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUUv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
