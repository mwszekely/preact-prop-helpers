var bundle = (function (exports) {
    'use strict';

    var n,l$1,u$1,t$1,o$2,r$1,f$1,e$2={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function d$1(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$2)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z$2(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$2,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P$1(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$2(g[h],g[++h],g[++h]);}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P$1(u,i,i,t,i.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$2:I,o):n.removeEventListener(l,o?T$2:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$2(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P,C,$=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof $){if(m=u.props,g=(s=$.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in $&&$.prototype.render?u.__c=h=new $(m,x):(u.__c=h=new _(m,x),h.constructor=$,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=$.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,$.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==$.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==$.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}if(h.context=x,h.props=m,h.__v=u,h.__P=n,A=l$1.__r,P=0,"prototype"in $&&$.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),s=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),s=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++P<25);h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),C=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(C)?C:[C],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$2(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$2).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$2(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$2(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$2,e$2,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z$2(f,u);}function D(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_.prototype.render=d$1,t$1=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

    var o$1=0;function e$1(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$1,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

    var t,u,r,o,i=0,c=[],f=l$1.__b,e=l$1.__r,a=l$1.diffed,v=l$1.__c,l=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,i||r),i=0;var o=u.__H||(u.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function d(n){return i=1,p(z$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):z$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&w$1(i.__H,o)&&(i.__=r,i.u=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&w$1(i.__H,o)&&(i.__=r,i.u=o,u.__h.push(i));}function s(n){return i=5,A$1(function(){return {current:n}},[])}function A$1(n,u){var r=m(t++,7);return w$1(r.__H,u)?(r.o=n(),r.u=u,r.__h=n,r.o):r.__}function F(n,t){return i=8,A$1(function(){return n},t)}function T$1(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function b(){for(var t;t=c.shift();)if(t.__P)try{t.__H.__h.forEach(j$1),t.__H.__h.forEach(k),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}l$1.__b=function(n){u=null,f&&f(n);},l$1.__r=function(n){e&&e(n),t=0;var o=(u=n.__c).__H;o&&(r===u?(o.__h=[],u.__h=[],o.__.forEach(function(n){n.o=n.u=void 0;})):(o.__.forEach(function(n){n.u&&(n.__H=n.u),n.o&&(n.__=n.o),n.o=n.u=void 0;}),o.__h.forEach(j$1),o.__h.forEach(k),o.__h=[])),r=u;},l$1.diffed=function(t){a&&a(t);var i=t.__c;i&&i.__H&&i.__H.__h.length&&(1!==c.push(i)&&o===l$1.requestAnimationFrame||((o=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),g$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);g$1&&(t=requestAnimationFrame(u));})(b)),u=null,r=null;},l$1.__c=function(t,u){u.some(function(t){try{t.__H&&t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.o&&(n.__=n.o),n.o=n.u=void 0;}),t.__h.forEach(j$1),t.__h=t.__h.filter(function(n){return !n.__||k(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),v&&v(t,u);},l$1.unmount=function(t){l&&l(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{j$1(n);}catch(n){u=n;}}),u&&l$1.__e(u,r.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t=u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u=t;}function k(n){var t=u;n.__c=n.__(),u=t;}function w$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function z$1(n,t){return "function"==typeof t?t(n):t}

    function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);A(n,t,e,r);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M$1(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M$1.prototype=new _).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M$1.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M$1.prototype.componentDidUpdate=M$1.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var P="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,j="undefined"!=typeof document,z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];j&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&V.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=P,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n),n.__c;};

    /**
     * Debug hook.
     *
     * Given a value or set of values, emits a console error if any of them change from one render to the next.
     */
    function useEnsureStability(...values) {
        useHelper(values.length, 0);
        values.forEach(useHelper);
        return;
        function useHelper(value, index) {
            // Make sure that the provided functions are perfectly stable across renders
            const helperToEnsureStability = s(value);
            const shownError = s(false);
            if (helperToEnsureStability.current != value) {
                if (!shownError.current) {
                    console.error(`This hook requires some or all of its arguments remain stable across each render; please check the ${index}-indexed value that was checked.`);
                    debugger;
                    shownError.current = true;
                }
            }
        }
    }
    /**
     * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
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
     * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
     * @param getInitialValue If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
     * @returns
     */
    function usePassiveState(onChange, getInitialValue) {
        const valueRef = s(Unset$1);
        const warningRef = s(false);
        const cleanupCallbackRef = s(undefined);
        // Make sure that the provided functions are perfectly stable across renders
        useEnsureStability(onChange, getInitialValue);
        // Shared between "dependency changed" and "component unmounted".
        const onShouldCleanUp = F(() => {
            let cleanupCallback = cleanupCallbackRef.current;
            if (cleanupCallback)
                cleanupCallback();
        }, []);
        // There are a couple places where we'd like to use our initial
        // value in place of having no value at all yet.
        // This is the shared code for that, used on mount and whenever
        // getValue is called.
        const tryEnsureValue = F(() => {
            if (valueRef.current === Unset$1 && getInitialValue != undefined) {
                try {
                    const initialValue = getInitialValue();
                    valueRef.current = initialValue;
                    cleanupCallbackRef.current = (onChange?.(initialValue, undefined) ?? undefined);
                }
                catch (ex) {
                    // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
                }
            }
        }, [ /* getInitialValue and onChange intentionally omitted */]);
        const getValue = F(() => {
            if (warningRef.current)
                console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
            // The first time we call getValue, if we haven't been given a value yet,
            // (and we were given an initial value to use)
            // return the initial value instead of nothing.
            if (valueRef.current === Unset$1)
                tryEnsureValue();
            return (valueRef.current === Unset$1 ? undefined : valueRef.current);
        }, []);
        h(() => {
            // Make sure we've run our effect at least once on mount.
            // (If we have an initial value, of course)
            tryEnsureValue();
        }, []);
        // The actual code the user calls to (possibly) run a new effect.
        const setValue = F((arg) => {
            const prevDep = valueRef.current === Unset$1 ? undefined : getValue();
            const dep = arg instanceof Function ? arg(prevDep) : arg;
            if (dep !== valueRef.current) {
                // Indicate to the user that they shouldn't call getValue during onChange
                warningRef.current = true;
                // Call any registerd cleanup function
                onShouldCleanUp();
                cleanupCallbackRef.current = (onChange?.(dep, prevDep) ?? undefined);
                valueRef.current = dep;
                // Allow the user to normally call getValue again
                warningRef.current = false;
            }
        }, []);
        return [getValue, setValue];
    }
    const Unset$1 = Symbol();

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
            let combined = F((current) => {
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

    function returnNull$1() { return null; }
    /**
     * Allows accessing the element a ref references as soon as it does so.
     * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
     * adding a RefCallback and merging it with any existing ref that existed on the props.
     *
     * Don't forget to provide the Element as the type argument!
     *
     * @returns The element, and the sub-hook that makes it retrievable.
     */
    function useRefElement(args) {
        const onElementChange = args?.onElementChange;
        // Let us store the actual (reference to) the element we capture
        const [getElement, setElement] = usePassiveState(onElementChange, returnNull$1);
        // Create a RefCallback that's fired when mounted 
        // and that notifies us of our element when we have it
        const myRef = F((e) => {
            if (e)
                setElement(() => e);
        }, []);
        const useRefElementProps = F((props) => useMergedProps()({ ref: myRef }, props), []);
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            useRefElementProps,
            getElement
        };
    }

    function getDocument(element) { return (element?.ownerDocument ?? document ?? window.document ?? globalThis.document); }

    function returnNull() { return null; }
    function useElementSize({ getObserveBox, onSizeChange }) {
        useEnsureStability(getObserveBox, onSizeChange);
        const [getSize, setSize] = usePassiveState(onSizeChange, returnNull);
        const currentObserveBox = s(undefined);
        const needANewObserver = F((element, observeBox) => {
            if (element) {
                const document = getDocument(element);
                const window = document.defaultView;
                const handleUpdate = () => {
                    if (element.isConnected) {
                        const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
                        setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
                    }
                };
                if (window && ("ResizeObserver" in window)) {
                    const observer = new ResizeObserver((entries) => { handleUpdate(); });
                    observer.observe(element, { box: observeBox });
                    return () => observer.disconnect();
                }
                else {
                    document.addEventListener("resize", handleUpdate, { passive: true });
                    return () => document.removeEventListener("resize", handleUpdate);
                }
            }
        }, []);
        const { getElement, useRefElementProps } = useRefElement({ onElementChange: F((e) => needANewObserver(e, getObserveBox?.()), []) });
        y(() => {
            if (getObserveBox) {
                if (currentObserveBox.current !== getObserveBox())
                    needANewObserver(getElement(), getObserveBox());
            }
        });
        return {
            getElement,
            getSize,
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
    function useLogicalDirection({ onLogicalDirectionChange }) {
        useEnsureStability(onLogicalDirectionChange);
        const [getComputedStyles, setComputedStyles] = usePassiveState(null);
        const { getElement, useRefElementProps } = useRefElement({
            onElementChange: F((element) => {
                if (element) {
                    setComputedStyles(window.getComputedStyle(element));
                }
            }, [])
        });
        // TODO: There's no way to refresh which writing mode we have once mounted.
        //   A. There's no way to watch for CSS style changes
        //   B. Calling getComputedStyle after every render for every element gets expensive fast and
        //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
        //      (Those that do will need to mount and unmount the component that uses it)
        //
        // As a solution, here's a cheap workaround that checks when the element's size has changed,
        // and if so, tests if the writing mode has changed too.
        //
        // This will work for at least some number of cases, but a better solution is still needed.
        const { useElementSizeProps } = useElementSize({ onSizeChange: F(_ => onLogicalDirectionChange?.(getLogicalDirectionInfo()), []) });
        const getLogicalDirectionInfo = F(() => {
            const computedStyles = getComputedStyles();
            if (computedStyles) {
                let w = computedStyles.writingMode;
                let d = computedStyles.direction;
                let t = computedStyles.textOrientation;
                if (t == "upright")
                    d = "ltr";
                return ({ ...WritingModes[w || "horizontal-tb"][d || "ltr"] });
            }
            return null;
        }, []);
        //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);
        const convertToLogicalOrientation = F((elementOrientation, direction) => {
            direction ??= getLogicalDirectionInfo();
            if (direction?.inlineOrientation === elementOrientation)
                return "inline";
            return "block";
        }, []);
        const convertToPhysicalSide = F((side, direction) => {
            direction ??= getLogicalDirectionInfo();
            switch (side) {
                case "block-start":
                    return M[(direction?.blockDirection ?? "ttb")[0]];
                case "block-end":
                    return M[(direction?.blockDirection ?? "ttb")[2]];
                case "inline-start":
                    return M[(direction?.inlineDirection ?? "ltr")[0]];
                case "inline-end":
                    return M[(direction?.inlineDirection ?? "ltr")[2]];
            }
        }, []);
        const convertToLogicalSide = F((side, direction) => {
            direction ??= getLogicalDirectionInfo();
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
            }
            else if (direction?.inlineOrientation === "horizontal") {
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
        const convertToPhysicalOrientation = F((elementOrientation, direction) => {
            direction ??= getLogicalDirectionInfo();
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
        }, []);
        const convertElementSize = F((elementSize, direction) => {
            direction ??= getLogicalDirectionInfo();
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
                let offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]));
                let clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
                let scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
                let offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]));
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
        }, []);
        return {
            useLogicalDirectionProps: F((props) => useRefElementProps(useElementSizeProps(props)), []),
            getElement,
            getLogicalDirectionInfo,
            convertToLogicalSize: convertElementSize,
            convertToLogicalOrientation,
            convertToPhysicalOrientation,
            convertToLogicalSide,
            convertToPhysicalSide
        };
    }
    // Helper for extracting info from "ltr", "ttb", etc.
    const M = {
        t: "top",
        b: "bottom",
        l: "left",
        r: "right"
    };
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
     * Slightly enhanced version of `useState` that includes a getter that remains constant
     * (i.e. you can use it in `useEffect` and friends without it being a dependency).
     *
     * @param initialState
     * @returns
     */
    function useState(initialState) {
        // We keep both, but overrride the `setState` functionality
        const [state, setStateP] = d(initialState);
        const ref = s(state);
        // Hijack the normal setter function 
        // to also set our ref to the new value
        const setState = F(value => {
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

    const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
    function base64(value) {
        return Table[value];
    }
    function random6Bits() {
        return Math.floor(Math.random() * 0b1000000);
    }
    function random64Bits() {
        return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
    }
    /**
     * Returns a randomly-generated ID with an optional prefix.
     * Note that if the prefix is *explicitly* set to "", then
     * IDs that are not valid under HTML4 may be generated. Oh no.
     */
    function generateRandomId(prefix) {
        return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
    }

    const previousInputs = new Map();
    const toRun = new Map();
    // TODO: Whether this goes in options.diffed or options._commit
    // is a post-suspense question.
    // Right now, using options._commit has the problem of running
    // *after* refs are applied, but we need to come before even that
    // so `ref={someStableFunction}` works.
    // 
    // Also it's private.
    //
    // ...
    // Well, useEvent or whatever is finally, finally 4 years later finally here
    // which is cool and means we won't need this at all soon.
    // So for now we'll stick with diff to prevent any weirdness with
    // commit being private and all.
    const commitName = "diffed";
    const originalCommit = l$1[commitName];
    const newCommit = (...args) => {
        for (let [id, effectInfo] of toRun) {
            const oldInputs = previousInputs.get(id);
            if (argsChanged(oldInputs, effectInfo.inputs)) {
                effectInfo.cleanup?.();
                effectInfo.cleanup = effectInfo.effect();
                previousInputs.set(id, effectInfo.inputs);
            }
        }
        toRun.clear();
        originalCommit?.(...args);
    };
    l$1[commitName] = newCommit;
    /**
     * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
     *
     * Every render, we send the arguments to be evaluated after diffing has completed,
     * which happens before.
     *
     * @param effect
     * @param inputs
     */
    function useBeforeLayoutEffect(effect, inputs) {
        /*(() => {
            const cleanup = useRef<void | (() => void) | null>(null);
            const prevArgsRef = useRef<Inputs>(null!);
            if (argsChanged(inputs, prevArgsRef.current)) {
                prevArgsRef.current = inputs!;
                if (cleanup.current)
                    cleanup.current();
                cleanup.current = effect();
            }
        })();*/
        const [id] = d(() => generateRandomId());
        toRun.set(id, { effect, inputs, cleanup: null });
        y(() => {
            return () => {
                toRun.delete(id);
                previousInputs.delete(id);
            };
        }, [id]);
    }
    function argsChanged(oldArgs, newArgs) {
        return !!(!oldArgs ||
            oldArgs.length !== newArgs?.length ||
            newArgs?.some((arg, index) => arg !== oldArgs[index]));
    }

    const Unset = Symbol("unset");
    /**
     * Given an input value, returns a constant getter function that can be used
     * inside of `useEffect` and friends without including it in the dependency array.
     *
     * This uses `options.diffed` in order to run before everything, even
     * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
     *
     * @param value
     * @returns
     */
    function useStableGetter(value) {
        const ref = s(Unset);
        useBeforeLayoutEffect(() => { ref.current = value; }, [value]);
        return F(() => {
            if (ref.current === Unset) {
                throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
            }
            return ref.current;
        }, []);
    }

    /**
     * Alternate useCallback() which always returns the same (wrapped) function reference
     * so that it can be excluded from the dependency arrays of `useEffect` and friends.
     *
     * Do not use during the render phase!  `useLayoutEffect` is fine though.
     */
    function useStableCallback(fn) {
        const currentCallbackGetter = useStableGetter(fn);
        return F((...args) => {
            return currentCallbackGetter()(...args);
        }, []);
    }

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
            if (!timeoutIsNull) {
                let timeout = getTimeout();
                console.assert(timeoutIsNull == (timeout == null));
                if (timeout != null) {
                    startTimeRef.current = +(new Date());
                    const handle = setTimeout(stableCallback, timeout);
                    return () => clearTimeout(handle);
                }
            }
        }, [triggerIndex, timeoutIsNull]);
        const getElapsedTime = F(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = F(() => {
            const timeout = getTimeout();
            return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
        }, []);
        return { getElapsedTime, getRemainingTime };
    }

    function useAsync({ debounce }) {
        // Always represents whatever promise is currently being waited on, or null if none.
        const [promise, setPromise, getPromise] = useState(null);
        // Keep track of how many times we've actually called the async handler
        const [runCount, setRunCount] = useState(0);
        const [resolveCount, setResolveCount] = useState(0);
        const [rejectCount, setRejectCount] = useState(0);
        // Keep track of whether we're acting on a sync or async handler, just in case that's important.
        // This can change if the handler switches between being sync or async, technically, and will be
        // null until the first time the handler is called.
        const [currentType, setCurrentType] = useState(null);
        // If we're set to use a debounce, then when the timeout finishes,
        // the promise from this state object is transferred over to either 
        // the current promise or the pending promise.
        const [debouncedPromiseStarter, setDebouncedPromiseStarter, getDebouncedPromiseStarter] = useState(null);
        // When we want to start a new promise, we won't allow it to start if one is still running.
        // In that case, we store the promise (or rather, a way to start the promise) in state.
        const [pendingPromiseStarter, setPendingPromiseStarter, getPendingPromiseStarter] = useState(null);
        // We need to differentiate between `undefined` and "no error has been thrown",
        // so we have two separate error state variables.
        const [error, setError, getError] = useState(undefined);
        const [hasError, setHasError, getHasError] = useState(false);
        // When the debounce timer is up (or the user manually requests the debounce to end)
        // run the normal "please consider running this promise" routine that we would
        // have just run immediately if we weren't debouncing our promises.
        const onDebounceTimeUp = F(() => {
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
        let ret = {
            useSyncHandler,
            callCount: runCount,
            pending: (promise != null),
            hasError,
            error,
            resolveCount,
            rejectCount,
            flushDebouncedPromise: onDebounceTimeUp,
            promise,
            currentType,
            settleCount: rejectCount + resolveCount
        };
        return ret;
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
                const onThen = (value) => { setResolveCount(c => ++c); return value; };
                const onCatch = (ex) => { setError(ex); setHasError(true); setRejectCount(c => ++c); };
                const onFinally = () => { setPromise(null); };
                // Handle the special case where the handler is synchronous
                let result;
                try {
                    result = startPromise();
                    const isPromise = (result != null && typeof result == "object" && "then" in result);
                    if (result == null || !isPromise) {
                        // It's synchronous and returned successfully.
                        // Bail out early.
                        onThen((result ?? undefined));
                        onFinally();
                        setCurrentType("sync");
                    }
                    else {
                        result.then(onThen).catch(onCatch).finally(onFinally);
                        setCurrentType("async");
                    }
                    return result;
                    //console.assert("then" in (result as Promise<any>));
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
                //setCurrentType("async");
                //return (async () => { await result; })().then(onThen).catch(onCatch).finally(onFinally);
            };
            if (!alreadyRunningPromise) {
                // Start the promise immediately, because there wasn't one running already.
                let nextPromise = startPromiseWithBoilerplate();
                const isPromise = (nextPromise != null && typeof nextPromise == "object" && "then" in nextPromise);
                if (nextPromise == null || !isPromise) ;
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
        function useSyncHandler(asyncHandler) {
            const syncHandler = useStableCallback(function syncHandler(...args) {
                if (asyncHandler == null)
                    return;
                const startPromise = () => asyncHandler(...args);
                if (debounce == null) {
                    wantToStartANewPromise(startPromise);
                }
                else {
                    setDebouncedPromiseStarter(_ => startPromise);
                }
            });
            return syncHandler;
        }
    }

    /**
     * Given an asyncronous event handler, returns a syncronous one that works on the DOM,
     * along with some other information related to the current state.
     * Does not modify any props.
     *
     * Note that because the handler you provide may be called with a delay, and
     * because the value of, e.g., an `<input>` element will likely be stale by the
     * time the delay is over, a `capture` function is necessary in order to
     * capture the relevant information from the DOM. Any other simple event data,
     * like `mouseX` or `shiftKey` can stay on the event itself and don't
     * need to be captured &ndash; it's never stale.
     *
     * ```tsx
     * const syncOnInput = async (value: number, e: Event) => {
     *     [...] // Ex. send to a server and setState when done
     * };
     * const {
     *     // When called, returns the synchronous event handler
     *     useSyncHandler,
     *     // True while the handler is running
     *     pending,
     *     // The error thrown, if any
     *     error,
     *     // Show this value while the operation's pending
     *     currentCapture,
     *     // And others, see `UseAsyncHandlerReturnType`
     *     ...rest
     * } = useAsyncHandler<HTMLInputElement>()({
     *     // Pass in the capture function that saves event data
     *     // from being stale.  Note that the async event handler
     *     // isn't passed here, it's passed to `useSyncHandler` above.
     *     capture: e => {
     *         e.preventDefault();
     *
     *         // Save this value so that it's never stale
     *         return e.currentTarget.valueAsNumber;
     *     }
     * });
     *
     * const onInput = useSyncHandler(someAsyncFunction);
     * // OR the following, if you want the input entirely disabled while pending:
     * const onInput = useSyncHandler(pending? null : someAsyncFunction);
     * ```
     *
     * The handler is automatically throttled to only run one at a time.
     * If the handler is called, and then before it finishes, is called again,
     * it will be put on hold until the current one finishes, at which point
     * the second one will run.  If the handler is called a third time before
     * the first has finished, it will *replace* the second, so only the most
     * recently called iteration of the handler will run.
     *
     *
     * You may optionally *also* specify a debounce parameter that waits until the
     * syncronous handler has not been called for the specified number of
     * milliseconds, at which point we *actually* run the asyncronous handler
     * according to the logic in the previous paragraph. This is in
     * *addition* to throttling the handler, and does not replace that behavior.
     */
    function useAsyncHandler() {
        return function ({ capture, debounce }) {
            const { callCount, currentType, error, flushDebouncedPromise, useSyncHandler, hasError, pending, rejectCount, resolveCount, settleCount, promise } = useAsync({ debounce });
            // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
            const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
            const [hasCapture, setHasCapture] = useState(false);
            let ret = {
                useSyncHandler: useSyncHandlerWithCapture,
                getCurrentCapture,
                callCount,
                currentCapture,
                hasCapture,
                pending: (promise != null),
                hasError,
                error,
                promise,
                currentType,
                flushDebouncedPromise,
                resolveCount,
                rejectCount,
                settleCount: rejectCount + resolveCount
            };
            return ret;
            function useSyncHandlerWithCapture(asyncHandler) {
                const syncHandlerWrapper = useSyncHandler(asyncHandler);
                const syncHandler = useStableCallback(function syncHandler(e) {
                    // Get the most significant information from the event at this time,
                    // which is necessary since the promise could actually be called much later
                    // when the element's value (etc.) has changed.
                    let captured = capture(e);
                    if (syncHandlerWrapper == null)
                        return;
                    setCurrentCapture(captured);
                    setHasCapture(true);
                    syncHandlerWrapper(captured, e);
                });
                return syncHandler;
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
        useStableGetter(index);
        const { getLogicalDirectionInfo, useLogicalDirectionProps } = useLogicalDirection({});
        const onKeyDown = (e) => {
            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            if (e.ctrlKey || e.metaKey)
                return;
            const info = getLogicalDirectionInfo();
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
        return {
            useLinearNavigationProps: F((props) => { return useLogicalDirectionProps(useMergedProps()({ onKeyDown }, props)); }, []),
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
        const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
            let compare;
            // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
            // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
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
                // During typeahead, all strings longer than ours should be truncated
                // so that they're all considered equally by that point.
                return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
            }
            return lhs - rhs;
        });
        const useTypeaheadNavigationProps = F(function ({ ...props }) {
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
            return useMergedProps()({ onKeyDown, onCompositionStart, onCompositionEnd, }, props);
        }, []);
        // Handle changes in typeahead that cause changes to the tabbable index
        y(() => {
            if (currentTypeahead && sortedTypeaheadInfo.current.length) {
                let sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
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
                    while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                        updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                        --i;
                    }
                    i = sortedTypeaheadIndex;
                    while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
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
        const useTypeaheadNavigationChild = F(({ text, ...i }) => {
            y(() => {
                if (text) {
                    // Find where to insert this item.
                    // Because all index values should be unique, the returned sortedIndex
                    // should always refer to a new location (i.e. be negative)                
                    let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, insertingComparator);
                    console.assert(sortedIndex < 0 || sortedTypeaheadInfo.current[sortedIndex].text == text);
                    if (sortedIndex < 0) {
                        sortedTypeaheadInfo.current.splice(-sortedIndex - 1, 0, { text, unsortedIndex: i.index });
                    }
                    else {
                        sortedTypeaheadInfo.current.splice(sortedIndex, 0, { text, unsortedIndex: i.index });
                    }
                    return () => {
                        // When unmounting, find where we were and remove ourselves.
                        // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                        let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, insertingComparator);
                        console.assert(sortedIndex >= 0);
                        if (sortedIndex >= 0) {
                            sortedTypeaheadInfo.current.splice(sortedIndex, 1);
                        }
                    };
                }
            }, [text]);
            return {};
        }, []);
        return {
            useTypeaheadNavigationChild,
            useTypeaheadNavigationProps,
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
        const getMountIndex = F((index) => { return mountOrder.current.get(index); }, []);
        const useManagedChild = F((info) => {
            const { getElement, useRefElementProps } = useRefElement({ onElementChange: F((element) => {
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
                }, []) });
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
            return { getElement, useManagedChildProps: useRefElementProps };
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
        const getShouldFocusOnChange = useStableGetter(foc);
        const getTabbableIndex = useStableGetter(tabbableIndex);
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
        F(() => {
            if (tabbableIndex != null)
                managedChildren[tabbableIndex].setTabbable(true);
        }, [tabbableIndex]);
        const useRovingTabIndexChild = F((info) => {
            const [rrafIndex, setRrafIndex] = useState(1);
            const rerenderAndFocus = F(() => { setRrafIndex(i => ++i); }, []);
            const [tabbable, setTabbable, getTabbable] = useState(null);
            let newInfo = {
                ...info,
                rerenderAndFocus,
                setTabbable: F((tabbable) => { setTabbable(tabbable); }, []),
                getTabbable
            };
            const { getElement, useManagedChildProps } = useManagedChild(newInfo);
            y(() => {
                const element = getElement();
                if (tabbable) {
                    const shouldFocusOnChange = getShouldFocusOnChange()();
                    if (shouldFocusOnChange && "focus" in element) {
                        requestAnimationFrame(() => {
                            queueMicrotask(() => {
                                element.focus();
                            });
                        });
                    }
                }
            }, [tabbable, rrafIndex]);
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
            focusCurrent: F(() => {
                if (managedChildren[getTabbableIndex() ?? 0].getTabbable()) {
                    managedChildren[getTabbableIndex() ?? 0]?.rerenderAndFocus();
                }
                else {
                    // For whatever reason, the previously tabbable child
                    // is no longer tabbable without us knowing about it.
                    // Maybe it unmounted?
                    // Either way, try to find the newly-selected child.
                    debugger;
                    let i = getTabbableIndex() ?? 0;
                    let j = i + 1;
                    while (i >= 0) {
                        --i;
                        if (managedChildren[getTabbableIndex() ?? 0].getTabbable()) {
                            managedChildren[getTabbableIndex() ?? 0]?.rerenderAndFocus();
                            return;
                        }
                    }
                    while (j < managedChildren.length) {
                        ++j;
                        if (managedChildren[getTabbableIndex() ?? 0].getTabbable()) {
                            managedChildren[getTabbableIndex() ?? 0]?.rerenderAndFocus();
                            return;
                        }
                    }
                }
            }, []),
            ...rest
        };
    }

    function identity$1(t) { return t; }
    /**
     * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
     *
     * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
     * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
     */
    function useListNavigation({ initialIndex, shouldFocusOnChange, collator, keyNavigation, indexMangler, indexDemangler }) {
        indexMangler ??= identity$1;
        indexDemangler ??= identity$1;
        keyNavigation ??= "either";
        useEnsureStability(indexMangler, indexDemangler);
        // Keep track of three things related to the currently tabbable element's index:
        // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
        const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(initialIndex === undefined ? 0 : initialIndex);
        const { managedChildren, indicesByElement, useRovingTabIndexChild, focusCurrent, ...rest } = useRovingTabIndex({ shouldFocusOnChange, tabbableIndex });
        /*const navigateToIndex = useCallback((i: number | null) => { setTabbableIndex(i); }, []);
        const navigateToFirst = useCallback(() => { tryNavigateToIndex(managedChildren,) setTabbableIndex(indexMangler!(0)); }, []);
        const navigateToLast = useCallback(() => { setTabbableIndex(indexMangler!(managedChildren.length - 1)); }, []);
        const navigateToPrev = useCallback(() => { setTabbableIndex(i => indexMangler!(indexDemangler!(i ?? 0) - 1)) }, [indexDemangler, indexMangler]);
        const navigateToNext = useCallback(() => { setTabbableIndex(i => indexMangler!(indexDemangler!(i ?? 0) + 1)) }, [indexDemangler, indexMangler]);
    */
        const navigateToIndex = F((i) => {
            setTabbableIndex(i == null ? null : tryNavigateToIndex(managedChildren, 0, i, 1, indexMangler ?? identity$1, indexDemangler ?? identity$1));
        }, []);
        const navigateToFirst = F(() => {
            setTabbableIndex(tryNavigateToIndex(managedChildren, 0, 0, 1, indexMangler ?? identity$1, indexDemangler ?? identity$1));
        }, []);
        const navigateToLast = F(() => { setTabbableIndex(tryNavigateToIndex(managedChildren, managedChildren.length, managedChildren.length, -1, indexMangler ?? identity$1, indexDemangler ?? identity$1)); }, []);
        const navigateToPrev = F(() => {
            setTabbableIndex(c => {
                return tryNavigateToIndex(managedChildren, c ?? 0, (c ?? 0) - 1, -1, indexMangler ?? identity$1, indexDemangler ?? identity$1);
            });
        }, []);
        const navigateToNext = F(() => {
            setTabbableIndex(c => {
                return tryNavigateToIndex(managedChildren, c ?? 0, (c ?? 0) + 1, 1, indexMangler ?? identity$1, indexDemangler ?? identity$1);
            });
        }, []);
        const setIndex = F((index) => {
            setTabbableIndex(index);
        }, []);
        const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild, useTypeaheadNavigationProps } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
        const { useLinearNavigationProps } = useLinearNavigation({ navigationDirection: keyNavigation, index: getTabbableIndex() ?? 0, managedChildren, navigateToPrev, navigateToNext, navigateToFirst, navigateToLast });
        const useListNavigationProps = F((props) => {
            return useLinearNavigationProps(useTypeaheadNavigationProps(props));
        }, [useLinearNavigationProps, useTypeaheadNavigationProps]);
        const useListNavigationChild = F((info) => {
            useTypeaheadNavigationChild(info);
            //const { useLinearNavigationChildProps } = useLinearNavigationChild(info as I);
            const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild(info);
            const useListNavigationChildProps = function ({ ...props }) {
                return useMergedProps()(useRovingTabIndexChildProps((({ onClick: roveToSelf, hidden: info.hidden }))), props);
            };
            const roveToSelf = F(() => { navigateToIndex(info.index); }, []);
            return {
                useListNavigationChildProps,
                useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
                tabbable
            };
        }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);
        return {
            useListNavigationChild,
            useListNavigationProps,
            currentTypeahead,
            invalidTypeahead,
            tabbableIndex,
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

    /**
     * Returns a function that will, when called, force the component
     * that uses this hook to re-render itself.
     *
     * It's a bit smelly, so best to use sparingly.
     */
    function useForceUpdate() {
        const [, set] = d(0);
        return s(() => set(i => ++i)).current;
    }

    function identity(t) { return t; }
    function useGridNavigation({ shouldFocusOnChange, indexMangler, indexDemangler }) {
        indexMangler ??= identity;
        indexDemangler ??= identity;
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
        const navigateToFirstRow = F(() => { setCurrentRow2(c => tryNavigateToIndex(managedRows, c ?? 0, 0, 1, indexMangler, indexDemangler)); }, [indexMangler, indexDemangler]);
        const navigateToLastRow = F(() => { setCurrentRow2(c => tryNavigateToIndex(managedRows, c ?? 0, managedRows.length - 1, -1, indexMangler, indexDemangler)); }, [indexMangler, indexDemangler]);
        const navigateToPrevRow = F(() => { setCurrentRow2(c => { return tryNavigateToIndex(managedRows, c ?? 0, indexMangler(Math.max(0, indexDemangler(c ?? 0) - 1)), -1, indexMangler, indexDemangler); }); }, [indexMangler, indexDemangler]);
        const navigateToNextRow = F(() => { setCurrentRow2(c => { return tryNavigateToIndex(managedRows, c ?? 0, indexMangler(Math.min((managedRows.length - 1), indexDemangler(c ?? 0) + 1)), 1, indexMangler, indexDemangler); }); }, [indexMangler, indexDemangler]);
        // Track child rows and manage keyboard navigation among them.
        const { childCount, managedChildren: managedRows, indicesByElement: rowIndicesByElement, getMountIndex: getRowMountIndex, mountedChildren: mountedRows, totalChildrenMounted: totalRowsMounted, totalChildrenUnounted: totalRowsUnmounted, useManagedChild: useManagedRow } = useChildManager();
        const { useLinearNavigationProps: useLinearNavigationRowProps } = useLinearNavigation({
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
        const useGridNavigationColumn = F(({}) => {
            const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ getIndex: getCurrentRow, setIndex: setCurrentRow2 });
            const useGridNavigationColumnChild = F(({ index: rowIndex, text, hidden }) => {
                useTypeaheadNavigationChild({ index: rowIndex, text: hidden ? null : text });
            }, [useTypeaheadNavigationChild]);
            return { useGridNavigationColumnChild, currentTypeahead, invalidTypeahead };
        }, []);
        // Last thing before we return -- here's the hook for individual rows and their cells.
        const useGridNavigationRow = F(({ index: rowIndex, hidden, ...info }) => {
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
                shouldFocusOnChange: F(() => { return !!getFocusCellOnRowChange() && !!getIsTabbableRow(); }, []),
                tabbableIndex: currentColumn
            });
            // More navigation stuff
            const navigateToFirstColumn = F(() => {
                setCurrentColumn2(tryNavigateToIndex(managedCells, 0, 0, 1, identity, identity));
                forceUpdate();
            }, []);
            const navigateToLastColumn = F(() => { setCurrentColumn2(tryNavigateToIndex(managedCells, managedCells.length, managedCells.length, -1, identity, identity)); forceUpdate(); }, []);
            const navigateToPrevColumn = F(() => {
                setCurrentColumn2(c => {
                    return tryNavigateToIndex(managedCells, c, c - 1, -1, identity, identity);
                });
                forceUpdate();
            }, []);
            const navigateToNextColumn = F(() => {
                setCurrentColumn2(c => {
                    return tryNavigateToIndex(managedCells, c, c + 1, 1, identity, identity);
                });
                forceUpdate();
            }, []);
            const { useLinearNavigationProps: useLinearNavigationCellProps } = useLinearNavigation({
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
                    if (cellIndex != null && managedCells[cellIndex]) {
                        managedCells[cellIndex].setTabbable(cellIsTabbable);
                        if (cellIsTabbable)
                            managedCells[cellIndex].rerenderAndFocus();
                    }
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
            //const { useLinearNavigationChildProps: useLinearNavigationChildRowProps } = useLinearNavigationChildRow(info as IR)
            const useGridNavigationRowProps = F((props) => useManagedRowProps(useLinearNavigationCellProps(useMergedProps()({ hidden: !!hidden, "data-index": rowIndex }, props))), [useManagedRowProps, !!hidden]);
            const getRowIndex = useStableGetter(rowIndex);
            const useGridNavigationCell = F((info) => {
                const getTabbable = useStableCallback(() => tabbable);
                const { tabbable, useRovingTabIndexSiblingProps, useRovingTabIndexChildProps } = useRovingTabIndexCell({ ...info, getTabbable });
                //const { useLinearNavigationChildProps: useLinearNavigationChildCellProps } = useLinearNavigationChildCell(info as IC);
                // Any time we interact with this cell, set it to be
                // our "currently tabbable" cell, regardless of
                // any previously selected row/column.
                //
                // TODO: Mouseup/down might be preferable,
                // but it doesn't fire on label elements here?????
                const onClick = F(() => {
                    setCurrentRow2(getRowIndex());
                    setCurrentColumn2(info.index);
                }, [info.index]);
                const useGridNavigationCellProps = F((props) => useRovingTabIndexChildProps((useMergedProps()({ onClick }, props))), [useRovingTabIndexChildProps]);
                return { tabbable, useGridNavigationCellProps };
            }, []);
            return {
                currentColumn,
                useGridNavigationRowProps,
                useGridNavigationCell,
                cellCount,
                isTabbableRow,
                managedCells: managedCells
            };
        }, [useManagedRow, indexDemangler, indexMangler]);
        return {
            useGridNavigationProps: useLinearNavigationRowProps,
            useGridNavigationRow,
            useGridNavigationColumn,
            rowCount: childCount,
            cellIndex: currentColumn,
            rowIndex: currentRow,
            managedRows
        };
    }

    const SharedAnimationFrameContext = D(null);
    /**
     * The (optionally non-stable) `callback` you provide will start running every frame after the component mounts.
     *
     * Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback.
     *
     * **This hook does not return anything at all, including no prop-modifying hooks**
     */
    function useAnimationFrame({ callback }) {
        // Get a wrapper around the given callback that's stable
        const stableCallback = useStableCallback(callback ?? (() => { }));
        const hasCallback = (callback != null);
        const sharedAnimationFrameContext = T$1(SharedAnimationFrameContext);
        y(() => {
            if (sharedAnimationFrameContext) {
                if (hasCallback) {
                    sharedAnimationFrameContext.addCallback(stableCallback);
                }
                else {
                    sharedAnimationFrameContext.removeCallback(stableCallback);
                }
            }
            else {
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
            }
        }, [sharedAnimationFrameContext, hasCallback]);
    }

    function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
        const [dragging, setDragging, getDragging] = useState(false);
        const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
        const useDraggableProps = F((p) => {
            const ref = s(null);
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
            return useMergedProps()({
                draggable: true,
                onDragStart,
                onDragEnd,
                ref
            }, p);
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
            return useMergedProps()({ onDragEnter, onDragLeave, onDragOver, onDrop }, p);
        };
        return {
            useDroppableProps,
            filesForConsideration,
            stringsForConsideration,
            droppedFiles,
            droppedStrings,
            dropError
        };
    }

    const activeElementUpdaters = new Map();
    const lastActiveElementUpdaters = new Map();
    const windowFocusedUpdaters = new Map();
    let windowsFocused = new Map();
    function forEachUpdater(window, map, value) {
        for (let [otherWindow, updaters] of map) {
            if (window === otherWindow) {
                for (let updater of updaters) {
                    updater?.(value);
                }
            }
        }
    }
    function focusout(e) {
        const window = e.target.ownerDocument.defaultView;
        if (e.relatedTarget == null) {
            forEachUpdater(window, activeElementUpdaters, null);
        }
    }
    function focusin(e) {
        const window = e.target.ownerDocument.defaultView;
        let currentlyFocusedElement = e.target;
        forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement);
        forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement);
    }
    function windowFocus(e) {
        const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
        windowsFocused.set(window, true);
        forEachUpdater(window, windowFocusedUpdaters, true);
    }
    function windowBlur(e) {
        const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
        windowsFocused.set(window, false);
        forEachUpdater(window, windowFocusedUpdaters, false);
    }
    /**
     * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus by returning the following functions:
     * * `getActiveElement()`
     * * `getLastActiveElement()`
     * * `getWindowFocused()`
     * * **No prop-modifying hook is returned because none is necessary**
     *
     * (The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes)
     *
     * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
     *
     * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
     */
    function useActiveElement({ onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange }) {
        useEnsureStability(onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange);
        const { getElement, useRefElementProps } = useRefElement({
            onElementChange: F((element) => {
                if (element) {
                    const document = element.ownerDocument;
                    const window = document?.defaultView;
                    if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
                        document?.addEventListener("focusin", focusin, { passive: true });
                        document?.addEventListener("focusout", focusout, { passive: true });
                        window?.addEventListener("focus", windowFocus, { passive: true });
                        window?.addEventListener("blur", windowBlur, { passive: true });
                    }
                    // Add them even if they're undefined to more easily
                    // manage the ">0 means don't add handlers" logic.
                    const localActiveElementUpdaters = activeElementUpdaters.get(window) ?? new Set();
                    const localLastActiveElementUpdaters = lastActiveElementUpdaters.get(window) ?? new Set();
                    const localWindowFocusedUpdaters = windowFocusedUpdaters.get(window) ?? new Set();
                    localActiveElementUpdaters.add(setActiveElement);
                    localLastActiveElementUpdaters.add(setLastActiveElement);
                    localWindowFocusedUpdaters.add(setWindowFocused);
                    activeElementUpdaters.set(window, localActiveElementUpdaters);
                    lastActiveElementUpdaters.set(window, localLastActiveElementUpdaters);
                    windowFocusedUpdaters.set(window, localWindowFocusedUpdaters);
                    return () => {
                        activeElementUpdaters.get(window).delete(setActiveElement);
                        lastActiveElementUpdaters.get(window).delete(setLastActiveElement);
                        windowFocusedUpdaters.get(window).delete(setWindowFocused);
                        if (activeElementUpdaters.size === 0) {
                            document?.removeEventListener("focusin", focusin);
                            document?.removeEventListener("focusout", focusout);
                            window?.removeEventListener("focus", windowFocus);
                            window?.removeEventListener("blur", windowBlur);
                        }
                    };
                }
            }, [])
        });
        const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, undefined);
        const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, undefined);
        const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue);
        return { getElement, useActiveElementProps: useRefElementProps, getActiveElement, getLastActiveElement, getWindowFocused };
    }
    function returnTrue() { return true; }

    function returnFalse() { return false; }
    function useHasFocus({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange }) {
        useEnsureStability(onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange);
        const [getFocused, setFocused] = usePassiveState(onFocusedChanged, returnFalse);
        const [getFocusedInner, setFocusedInner] = usePassiveState(onFocusedInnerChanged, returnFalse);
        const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse);
        const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse);
        const { getActiveElement, getLastActiveElement, getWindowFocused, useActiveElementProps, getElement } = useActiveElement({
            onActiveElementChange: F((activeElement, prevActiveElement) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == activeElement));
                const focusedInner = (!!selfElement?.contains(activeElement));
                setFocused(focused);
                setFocusedInner(focusedInner);
                onActiveElementChange?.(activeElement, prevActiveElement);
            }, []),
            onLastActiveElementChange: F((lastActiveElement, prevLastActiveElement) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == lastActiveElement));
                const focusedInner = (!!selfElement?.contains(lastActiveElement));
                setLastFocused(focused);
                setLastFocusedInner(focusedInner);
                onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement);
            }, []),
            onWindowFocusedChange
        });
        const useHasFocusProps = F((props) => { return useActiveElementProps(props); }, [useActiveElementProps]);
        return { useHasFocusProps, getElement, getFocused, getFocusedInner, getLastFocused, getLastFocusedInner, getActiveElement, getLastActiveElement, getWindowFocused };
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

    /*!
    * tabbable 5.3.3
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    */
    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]:not(slot)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
    var NoElement = typeof Element === 'undefined';
    var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
      return element.getRootNode();
    } : function (element) {
      return element.ownerDocument;
    };

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

    var isZeroArea = function isZeroArea(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width,
          height = _node$getBoundingClie.height;

      return width === 0 && height === 0;
    };

    var isHidden = function isHidden(node, _ref) {
      var displayCheck = _ref.displayCheck,
          getShadowRoot = _ref.getShadowRoot;

      // NOTE: visibility will be `undefined` if node is detached from the document
      //  (see notes about this further down), which means we will consider it visible
      //  (this is legacy behavior from a very long way back)
      // NOTE: we check this regardless of `displayCheck="none"` because this is a
      //  _visibility_ check, not a _display_ check
      if (getComputedStyle(node).visibility === 'hidden') {
        return true;
      }

      var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

      if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
      } // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
      //  (but NOT _the_ document; see second 'If' comment below for more).
      // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
      //  is attached, and the one we need to check if it's in the document or not (because the
      //  shadow, and all nodes it contains, is never considered in the document since shadows
      //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
      //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
      //  visibility, including all the nodes it contains). The host could be any normal node,
      //  or a custom element (i.e. web component). Either way, that's the one that is considered
      //  part of the document, not the shadow root, nor any of its children (i.e. the node being
      //  tested).
      // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
      //  document (per the docs) and while it's a Document-type object, that document does not
      //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
      //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
      //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
      //  node is actually detached.


      var nodeRootHost = getRootNode(node).host;
      var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);

      if (!displayCheck || displayCheck === 'full') {
        if (typeof getShadowRoot === 'function') {
          // figure out if we should consider the node to be in an undisclosed shadow and use the
          //  'non-zero-area' fallback
          var originalNode = node;

          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);

            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
            ) {
              // node has an undisclosed shadow which means we can only treat it as a black box, so we
              //  fall back to a non-zero-area test
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              // iterate up slot
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              // cross shadow boundary
              node = rootNode.host;
            } else {
              // iterate up normal dom
              node = parentElement;
            }
          }

          node = originalNode;
        } // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
        //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
        //  it might be a falsy value, which means shadow DOM support is disabled
        // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
        //  now we can just test to see if it would normally be visible or not, provided it's
        //  attached to the main document.
        // NOTE: We must consider case where node is inside a shadow DOM and given directly to
        //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.


        if (nodeIsAttached) {
          // this works wherever the node is: if there's at least one client rect, it's
          //  somehow displayed; it also covers the CSS 'display: contents' case where the
          //  node itself is hidden in place of its contents; and there's no need to search
          //  up the hierarchy either
          return !node.getClientRects().length;
        } // Else, the node isn't attached to the document, which means the `getClientRects()`
        //  API will __always__ return zero rects (this can happen, for example, if React
        //  is used to render nodes onto a detached tree, as confirmed in this thread:
        //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
        //
        // It also means that even window.getComputedStyle(node).display will return `undefined`
        //  because styles are only computed for nodes that are in the document.
        //
        // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
        //  somehow. Though it was never stated officially, anyone who has ever used tabbable
        //  APIs on nodes in detached containers has actually implicitly used tabbable in what
        //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
        //  considering __everything__ to be visible because of the innability to determine styles.

      } else if (displayCheck === 'non-zero-area') {
        // NOTE: Even though this tests that the node's client rect is non-zero to determine
        //  whether it's displayed, and that a detached node will __always__ have a zero-area
        //  client rect, we don't special-case for whether the node is attached or not. In
        //  this mode, we do want to consider nodes that have a zero area to be hidden at all
        //  times, and that includes attached or not.
        return isZeroArea(node);
      } // visible, as far as we can tell, or per current `displayCheck` mode


      return false;
    }; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
    //  unless they are in the _first_ <legend> element of the top-most disabled
    //  fieldset


    var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement; // check if `node` is contained in a disabled <fieldset>

        while (parentNode) {
          if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
            // look for the first <legend> among the children of the disabled <fieldset>
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i); // when the first <legend> (in document order) is found

              if (child.tagName === 'LEGEND') {
                // if its parent <fieldset> is not nested in another disabled <fieldset>,
                // return whether `node` is a descendant of its first <legend>
                return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
              }
            } // the disabled <fieldset> containing `node` has no <legend>


            return true;
          }

          parentNode = parentNode.parentElement;
        }
      } // else, node's tabbable/focusable state should not be affected by a fieldset's
      //  enabled/disabled state


      return false;
    };

    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
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

    (function (module, exports) {
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
    	       * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
    	       * @param {!InertManager} inertManager The global singleton InertManager object.
    	       */
    	      function InertRoot(rootElement, inertManager) {
    	        _classCallCheck(this, InertRoot);

    	        /** @type {!InertManager} */
    	        this._inertManager = inertManager;

    	        /** @type {!HTMLElement} */
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
    	          var element = /** @type {!HTMLElement} */node;

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
    	         * @param {!HTMLElement} node
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
    	            var target = /** @type {!HTMLElement} */record.target;
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
    	            var element = /** @type {!HTMLElement} */this._node;
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
    	          var element = /** @type {!HTMLElement} */this.node;
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
    	       * @param {!HTMLElement} root
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
    	                var target = /** @type {!HTMLElement} */record.target;
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
    	     * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
    	     *     before descending into child nodes.
    	     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
    	     */


    	    function composedTreeWalk(node, callback, shadowRootAncestor) {
    	      if (node.nodeType == Node.ELEMENT_NODE) {
    	        var element = /** @type {!HTMLElement} */node;
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

    	    if (!HTMLElement.prototype.hasOwnProperty('inert')) {
    	      /** @type {!InertManager} */
    	      var inertManager = new InertManager(document);

    	      Object.defineProperty(HTMLElement.prototype, 'inert', {
    	        enumerable: true,
    	        /** @this {!HTMLElement} */
    	        get: function get() {
    	          return this.hasAttribute('inert');
    	        },
    	        /** @this {!HTMLElement} */
    	        set: function set(inert) {
    	          inertManager.setInert(this, inert);
    	        }
    	      });
    	    }
    	  })();

    	})));
    } ());

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

    function blockingElements() { return getDocument().$blockingElements; }
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
                // Sometimes blockingElements will fail if, for example,
                // the target element isn't connected to document.body.
                // This is rare, but it's better to fail silently with weird tabbing behavior
                // than to crash the entire application.
                try {
                    blockingElements().push(target);
                    return () => {
                        blockingElements().remove(target);
                    };
                }
                catch (ex) {
                    // Well, semi-silently.
                    console.error(ex);
                }
            }
        }, [target]);
    }
    function getTopElement() {
        return blockingElements().top;
    }

    const elementsToRestoreFocusTo = new Map();
    function useFocusTrap({ trapActive }) {
        const [element, setElement] = useState(null);
        const { useRefElementProps, getElement } = useRefElement({ onElementChange: setElement });
        //const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState<Node | null>(null);
        const { getActiveElement, getLastActiveElement, getWindowFocused, useActiveElementProps } = useActiveElement({});
        // When the trap becomes active, before we let the blockingElements hook run,
        // keep track of whatever's currently focused and save it.
        h(() => {
            if (trapActive && element) {
                const document = getDocument(element);
                document.defaultView;
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
            return useMergedProps()({ "aria-modal": trapActive ? "true" : undefined }, useRefElementProps(useActiveElementProps(props)));
        });
        return {
            useFocusTrapProps,
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
        const { useListNavigationChild, currentTypeahead, tabbableIndex, useListNavigationProps, navigateToIndex } = useListNavigation({ shouldFocusOnChange: getLastFocusedInner });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        return (e$1("div", { className: "demo", children: [e$1("h2", { children: "Keyboard & List Navigation" }), e$1("h3", { children: e$1("code", { children: "useRovingTabIndex" }) }), e$1("p", { children: ["Native HTML elements offer fantastic keyboard accessability, but cover a relatively limited number of use cases. There is no native HTML tree element, for example, that allows keyboard navigation of its items, nor is it possible to combine the keyboard navigation behavior of a ", e$1("code", { children: "<select>" }), " menu with the menu in a drawer component."] }), e$1("p", { children: ["When coming across a List or a Menu or a RadioGroup or a ToggleButtonGroup or any other \"one component made up of child components\", the usual expected behavior, at least natively, is that tabbing into the component is one action, and tabbing out is another.  Navigating ", e$1("em", { children: "within" }), " the component is done with the arrow keys or other methods."] }), e$1("p", { children: ["This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ", e$1("em", { children: "every one" }), " of its child elements is extremely important."] }), e$1("p", { children: [e$1("code", { children: "useListNavigation" }), " wraps up the functionality of a few hooks (", e$1("code", { children: "useRovingTabIndex" }), ", ", e$1("code", { children: "useLinearNavigation" }), ", ", e$1("code", { children: "useTypeaheadNavigation" }), "to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually."] }), e$1("p", { children: [e$1("code", { children: "useListNavigation" }), " (and ", e$1("code", { children: "useRovingTabIndex" }), ") internally use ", e$1("code", { children: "useChildManager" }), ", which is how the child elements and the parent communicate with each other. This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the ", e$1("code", { children: "useListNavigationChild" }), " hook that's returned, usually with a simple ", e$1("code", { children: "Context" }), ". If the child element itself has a focusable element, like a button, it can also be wired up to disable itself Feel free to nest them too, as long as you are aware of your ", e$1("code", { children: "Context" }), " management (i.e. remember that you need to create a new ", e$1("code", { children: "Context" }), " for each use case)."] }), e$1("label", { children: ["Tabbable index: ", e$1("input", { type: "number", value: tabbableIndex ?? undefined, onInput: e => { e.preventDefault(); navigateToIndex(e.currentTarget.valueAsNumber); } })] }), e$1("ul", { ...useHasFocusProps(useListNavigationProps({})), children: e$1(RovingChildContext.Provider, { value: useListNavigationChild, children: Array.from((function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield e$1(DemoUseRovingTabIndexChild, { index: i }, i);
                            }
                        })()) }) }), currentTypeahead && e$1("div", { children: ["Typeahead: ", currentTypeahead] })] }));
    });
    const DemoUseRovingTabIndexChild = g((({ index }) => {
        const [randomWord] = useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useRovingTabIndexChild = T$1(RovingChildContext);
        const text = `${randomWord} This is item #${index + 1}`;
        const { useListNavigationChildProps, useListNavigationSiblingProps, tabbable } = useRovingTabIndexChild({ index, text, hidden: (index == 5) });
        const props = useListNavigationChildProps({});
        return (e$1("li", { ...props, children: [text, " (", tabbable ? "Tabbable" : "Not tabbable", ")", e$1("input", { ...useListNavigationSiblingProps({ type: "checkbox" }) })] }));
    }));

    const DemoUseInterval = () => {
        const [interval, setInterval] = d(1000);
        const [fireCount, setFireCount] = d(0);
        useInterval({ interval, callback: () => setFireCount(i => ++i) });
        return (e$1("div", { class: "demo", children: [e$1("label", { children: ["Interval duration: ", e$1("input", { type: "number", value: interval, onInput: e => setInterval(e.currentTarget.valueAsNumber) })] }), e$1("div", { children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."] })] }));
    };

    const DemoUseTimeout = () => {
        const [timeout, setTimeout] = d(1000);
        const [triggerIndex, setTriggerIndex] = d("");
        const [fireCount, setFireCount] = d(0);
        useTimeout({ timeout, triggerIndex, callback: () => setFireCount(i => ++i) });
        return (e$1("div", { class: "demo", children: [e$1("label", { children: ["Timeout duration: ", e$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })] }), e$1("label", { children: ["Refresh key: ", e$1("input", { type: "text", value: triggerIndex, onInput: e => setTriggerIndex(e.currentTarget.value) })] }), e$1("div", { children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."] })] }));
    };

    const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const DemoUseDroppable = () => {
        const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable({ effect: "copy" });
        useMergedProps()({}, { ref: s(null) });
        const p = useDroppableProps({ className: "demo droppable" });
        p.ref;
        return (e$1("div", { ...p, children: [droppedStrings != null && e$1("div", { children: ["Data dropped: ", e$1("ul", { children: Object.entries(droppedStrings).map(([type, value]) => e$1("li", { children: [type, ": ", value] })) })] }), droppedFiles != null && e$1("div", { children: ["Files dropped: ", e$1("table", { children: [e$1("thead", { children: e$1("tr", { children: [e$1("th", { children: "Name" }), e$1("th", { children: "Size" }), e$1("th", { children: "Type" }), e$1("th", { children: "Last modified" })] }) }), e$1("tbody", { children: droppedFiles.map(f => e$1("tr", { children: [e$1("td", { children: f.name }), f.data.byteLength, e$1("td", { children: f.type }), e$1("td", { children: new Date(f.lastModified ?? 0) })] })) })] })] }), e$1("hr", {}), stringsForConsideration != null && e$1("div", { children: ["Data being considered: ", e$1("ul", { children: Array.from(stringsForConsideration).map(type => e$1("li", { children: type })) })] }), filesForConsideration != null && e$1("div", { children: ["Files being considered: ", e$1("ul", { children: filesForConsideration.map(f => e$1("li", { children: JSON.stringify(f) })) })] }), e$1("hr", {}), dropError && e$1("div", { children: dropError instanceof Error ? dropError.message : JSON.stringify(dropError) })] }));
    };
    const DemoUseDraggable = () => {
        const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." } });
        return (e$1("div", { ...useDraggableProps({ className: "demo" }), children: "Draggable content" }));
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
        const { useElementSizeProps } = useElementSize({ onSizeChange: setElementSize });
        return (e$1("div", { ...useElementSizeProps({ ref: undefined, className: "demo", style: { height: `${(height * 100) + 100}px` } }), children: e$1("pre", { children: JSON.stringify(elementSize, null, 2) }) }));
    };
    const DemoUseFocusTrap = g(({ depth }) => {
        const [active, setActive] = useState(false);
        const { useFocusTrapProps } = useFocusTrap({ trapActive: active });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
        if (depth == 2)
            return e$1("div", {});
        return (e$1("div", { className: "demo", children: [e$1("label", { children: ["Active: ", e$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } })] }), e$1("div", { ...divProps, children: e$1(DemoUseFocusTrapChild, { active: active, setActive: setActive, depth: depth ?? 0 }) })] }));
    });
    const DemoUseFocusTrapChild = g(({ setActive, active, depth }) => {
        return (e$1(d$1, { children: [e$1("button", { children: "Button 1" }), e$1("button", { children: "Button 2" }), e$1("button", { children: "Button 3" }), e$1("label", { children: ["Active: ", e$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } })] })] }));
    });
    const DemoUseAsyncHandler1 = g(() => {
        const [timeout, setTimeout] = useState(1000);
        const [debounce, setDebounce] = useState(0);
        const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
        const [disableConsecutive, setDisableConsecutive] = useState(false);
        const { callCount, settleCount, getCurrentCapture, hasCapture, useSyncHandler, currentCapture, pending, error, hasError, rejectCount, resolveCount } = useAsyncHandler()({ capture: () => { }, debounce: debounce == 0 ? undefined : debounce });
        const asyncOnClick = ((v, e) => new Promise((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout)));
        const onClick = useSyncHandler(pending ? null : asyncOnClick);
        return (e$1("div", { className: "demo", children: [e$1("button", { disabled: pending && disableConsecutive, onClick: onClick, children: "Click me!" }), e$1("label", { children: ["Sleep for: ", e$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })] }), e$1("label", { children: ["Throw an error ", e$1("input", { type: "checkbox", checked: shouldThrow, onInput: e => setShouldThrow(e.currentTarget.checked) })] }), e$1("label", { children: ["Disabled while pending ", e$1("input", { type: "checkbox", checked: disableConsecutive, onInput: e => setDisableConsecutive(e.currentTarget.checked) })] }), e$1("label", { children: ["Debounce: ", e$1("input", { type: "number", value: debounce, onInput: e => setDebounce(e.currentTarget.valueAsNumber) })] }), e$1("table", { children: [e$1("thead", { children: e$1("tr", { children: [e$1("th", { children: "Field" }), e$1("th", { children: "Value" })] }) }), e$1("tbody", { children: [e$1("tr", { children: [e$1("td", { children: "callCount" }), e$1("td", { children: callCount })] }), e$1("tr", { children: [e$1("td", { children: "settleCount" }), e$1("td", { children: settleCount })] }), e$1("tr", { children: [e$1("td", { children: "resolveCount" }), e$1("td", { children: resolveCount })] }), e$1("tr", { children: [e$1("td", { children: "rejectCount" }), e$1("td", { children: rejectCount })] }), e$1("tr", { children: [e$1("td", { children: "hasError" }), e$1("td", { children: hasError.toString() })] }), e$1("tr", { children: [e$1("td", { children: "hasCapture" }), e$1("td", { children: hasCapture.toString() })] })] })] })] }));
    });
    const DemoUseAsyncHandler2 = g(() => {
        const [timeout, setTimeout] = useState(1000);
        const [debounce, setDebounce] = useState(0);
        const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
        const [disableConsecutive, setDisableConsecutive] = useState(false);
        const [text, setText] = useState("");
        const { callCount, settleCount, getCurrentCapture, hasCapture, useSyncHandler, currentCapture, pending, error, hasError, rejectCount, resolveCount } = useAsyncHandler()({ capture: e => { e.preventDefault(); return e.currentTarget.value; }, debounce: debounce == 0 ? undefined : debounce });
        const onInput = useSyncHandler(async (v, e) => new Promise((resolve, reject) => window.setTimeout(() => {
            if (getShouldThrow()) {
                reject();
            }
            else {
                setText(v);
                resolve();
            }
        }, timeout)));
        return (e$1("div", { className: "demo", children: [e$1("label", { children: ["Demo text: ", e$1("input", { value: hasCapture ? currentCapture : text, disabled: pending && disableConsecutive, onInput: onInput })] }), e$1("hr", {}), e$1("label", { children: ["Sleep for: ", e$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })] }), e$1("label", { children: ["Throw an error ", e$1("input", { type: "checkbox", checked: shouldThrow, onInput: e => setShouldThrow(e.currentTarget.checked) })] }), e$1("label", { children: ["Disabled while pending ", e$1("input", { type: "checkbox", checked: disableConsecutive, onInput: e => setDisableConsecutive(e.currentTarget.checked) })] }), e$1("label", { children: ["Debounce: ", e$1("input", { type: "number", value: debounce, onInput: e => setDebounce(e.currentTarget.valueAsNumber) })] }), e$1("table", { children: [e$1("thead", { children: e$1("tr", { children: [e$1("th", { children: "Field" }), e$1("th", { children: "Value" })] }) }), e$1("tbody", { children: [e$1("tr", { children: [e$1("td", { children: "callCount" }), e$1("td", { children: callCount })] }), e$1("tr", { children: [e$1("td", { children: "settleCount" }), e$1("td", { children: settleCount })] }), e$1("tr", { children: [e$1("td", { children: "resolveCount" }), e$1("td", { children: resolveCount })] }), e$1("tr", { children: [e$1("td", { children: "rejectCount" }), e$1("td", { children: rejectCount })] }), e$1("tr", { children: [e$1("td", { children: "hasError" }), e$1("td", { children: hasError.toString() })] }), e$1("tr", { children: [e$1("td", { children: "currentCapture" }), e$1("td", { children: currentCapture })] }), e$1("tr", { children: [e$1("td", { children: "\"Saved\" input" }), e$1("td", { children: text })] })] })] })] }));
    });
    const DemoFocus = g(() => {
        const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState(null);
        const [activeElement, setActiveElement, getActiveElement] = useState(null);
        const [windowFocused, setWindowFocused, getWindowFocused] = useState(false);
        const [focused, setFocused, getFocused] = useState(false);
        const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
        const [lastFocused, setLastFocused, getLastFocused] = useState(false);
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({
            onFocusedChanged: setFocused,
            onFocusedInnerChanged: setFocusedInner,
            onLastFocusedChanged: setLastFocused,
            onLastFocusedInnerChanged: setLastFocusedInner,
            onActiveElementChange: setActiveElement,
            onLastActiveElementChange: setLastActiveElement,
            onWindowFocusedChange: setWindowFocused
        });
        return (e$1("div", { class: "demo", children: [e$1("h2", { children: "useHasFocus" }), e$1("div", { ...useHasFocusProps({ style: { border: "1px solid black" }, tabIndex: 0 }), children: ["Outer ", e$1("div", { tabIndex: 0, style: { border: "1px solid black" }, children: "Inner element" })] }), e$1("div", { children: e$1("ul", { children: [e$1("li", { children: ["Strictly focused: ", focused.toString(), ", ", lastFocused.toString()] }), e$1("li", { children: ["Inner focused: ", focusedInner.toString(), ", ", lastFocusedInner.toString()] }), e$1("li", { children: ["Window focused: ", windowFocused.toString()] }), e$1("li", { children: ["activeElement: ", activeElement?.textContent] }), e$1("li", { children: ["lastActiveElement: ", lastActiveElement?.textContent] })] }) })] }));
    });
    const GridRowContext = D(null);
    const GridCellContext = D(null);
    const DemoUseGrid = g(() => {
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setLastFocusedInner });
        const { useGridNavigationRow, useGridNavigationColumn, rowCount, cellIndex, rowIndex, useGridNavigationProps } = useGridNavigation({ shouldFocusOnChange: getLastFocusedInner });
        return (e$1("div", { className: "demo", children: [e$1("div", { children: [cellIndex, "+", rowIndex, "/", rowCount] }), e$1("div", { ...useHasFocusProps(useGridNavigationProps({})), children: e$1(GridRowContext.Provider, { value: useGridNavigationRow, children: Array.from((function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield e$1(DemoUseGridRow, { index: i }, i);
                            }
                        })()) }) })] }));
    });
    const DemoUseGridRow = g((({ index }) => {
        useState(() => RandomWords[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useGridRow = T$1(GridRowContext);
        const { isTabbableRow, cellCount, useGridNavigationRowProps, useGridNavigationCell, managedCells, currentColumn } = useGridRow({ index });
        const props = useGridNavigationRowProps({});
        return (e$1("div", { ...props, children: [e$1("div", { children: [`${isTabbableRow}`, " (", currentColumn, "/", cellCount - 1, ")"] }), e$1("div", { style: "display: flex", children: e$1(GridCellContext.Provider, { value: useGridNavigationCell, children: Array.from((function* () {
                            for (let i = 0; i < 3; ++i) {
                                yield e$1(DemoUseGridCell, { index: i }, i);
                            }
                        })()) }) })] }));
    }));
    const DemoUseGridCell = (({ index }) => {
        const useGridCell = T$1(GridCellContext);
        const { useGridNavigationCellProps } = useGridCell({ index });
        const props = useGridNavigationCellProps({});
        if (index === 0)
            return e$1("div", { ...props, children: ["Grid cell #", index + 1] });
        else
            return e$1("label", { children: [e$1("input", { ...props, type: "checkbox" }), " Test input"] });
    });
    const Component = () => {
        return e$1("div", { class: "flex", style: { flexWrap: "wrap" }, children: [e$1(DemoFocus, {}), e$1("hr", {}), e$1(DemoUseGrid, {}), e$1("hr", {}), e$1(DemoUseTimeout, {}), e$1("hr", {}), e$1(DemoUseInterval, {}), e$1("hr", {}), e$1(DemoUseRovingTabIndex, {}), e$1("hr", {}), e$1(DemoUseFocusTrap, {}), e$1("hr", {}), e$1(DemoUseAsyncHandler1, {}), e$1("hr", {}), e$1(DemoUseAsyncHandler2, {}), e$1("hr", {}), e$1(DemoUseDroppable, {}), e$1("hr", {}), e$1(DemoUseDraggable, {}), e$1("hr", {}), e$1(DemoUseElementSizeAnimation, {}), e$1("hr", {}), e$1("input", {})] });
    };
    requestAnimationFrame(() => {
        S$1(e$1(Component, {}), document.getElementById("root"));
    });

    exports.DemoUseGrid = DemoUseGrid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvZGlzdC9qc3hSdW50aW1lLm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL3VzZS1kb2N1bWVudC1jbGFzcy5qcyIsIi4uL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi91c2Utc3RhdGUuanMiLCIuLi91c2UtcmFuZG9tLWlkLmpzIiwiLi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vdXNlLWVmZmVjdC5qcyIsIi4uL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vdXNlLXRpbWVvdXQuanMiLCIuLi91c2UtYXN5bmMuanMiLCIuLi91c2UtYXN5bmMtaGFuZGxlci5qcyIsIi4uL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzIiwiLi4vdXNlLWNoaWxkLW1hbmFnZXIuanMiLCIuLi91c2Utcm92aW5nLXRhYmluZGV4LmpzIiwiLi4vdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIi4uL3VzZS1mb3JjZS11cGRhdGUuanMiLCIuLi91c2UtZ3JpZC1uYXZpZ2F0aW9uLmpzIiwiLi4vdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL3VzZS1kcmFnZ2FibGUuanMiLCIuLi91c2UtZHJvcHBhYmxlLmpzIiwiLi4vdXNlLWFjdGl2ZS1lbGVtZW50LmpzIiwiLi4vdXNlLWhhcy1mb2N1cy5qcyIsIi4uL3VzZS1pbnRlcnZhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vdXNlLWZvY3VzLXRyYXAuanMiLCJkZW1vcy91c2Utcm92aW5nLXRhYi1pbmRleC50c3giLCJkZW1vcy91c2UtaW50ZXJ2YWwudHN4IiwiZGVtb3MvdXNlLXRpbWVvdXQudHN4IiwiaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUCxDLCQ9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mICQpe2lmKG09dS5wcm9wcyxnPShzPSQuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluICQmJiQucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyAkKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPSQsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9JC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLCQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PSQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09JC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1pZihoLmNvbnRleHQ9eCxoLnByb3BzPW0saC5fX3Y9dSxoLl9fUD1uLEE9bC5fX3IsUD0wLFwicHJvdG90eXBlXCJpbiAkJiYkLnByb3RvdHlwZS5yZW5kZXIpaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSxBJiZBKHUpLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCk7ZWxzZSBkb3toLl9fZD0hMSxBJiZBKHUpLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKytQPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQz1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQyk/QzpbQ10sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixmLHI/clswXTppLl9fayYmayhpLDApLGMpLG51bGwhPXIpZm9yKF89ci5sZW5ndGg7Xy0tOyludWxsIT1yW19dJiZoKHJbX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhX3x8XCJvcHRpb25cIj09PWQmJl8hPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZOKHRbb10sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgbyxyLGY7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLHJ8fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LG8scixmPWEoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgcixGcmFnbWVudCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtGcmFnbWVudH1mcm9tXCJwcmVhY3RcIjt2YXIgbz0wO2Z1bmN0aW9uIGUoXyxlLG4sdCxmKXt2YXIgbCxzLHU9e307Zm9yKHMgaW4gZSlcInJlZlwiPT1zP2w9ZVtzXTp1W3NdPWVbc107dmFyIGE9e3R5cGU6Xyxwcm9wczp1LGtleTpuLHJlZjpsLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tbyxfX3NvdXJjZTpmLF9fc2VsZjp0fTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBfJiYobD1fLmRlZmF1bHRQcm9wcykpZm9yKHMgaW4gbCl2b2lkIDA9PT11W3NdJiYodVtzXT1sW3NdKTtyZXR1cm4gci52bm9kZSYmci52bm9kZShhKSxhfWV4cG9ydHtlIGFzIGpzeCxlIGFzIGpzeHMsZSBhcyBqc3hERVZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4UnVudGltZS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvLGk9MCxjPVtdLGY9bi5fX2IsZT1uLl9fcixhPW4uZGlmZmVkLHY9bi5fX2MsbD1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsaXx8ciksaT0wO3ZhciBvPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1vLl9fLmxlbmd0aCYmby5fXy5wdXNoKHt9KSxvLl9fW3RdfWZ1bmN0aW9uIGQobil7cmV0dXJuIGk9MSxwKHosbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOnoodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZ3KGkuX19ILG8pJiYoaS5fXz1yLGkudT1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZ3KGkuX19ILG8pJiYoaS5fXz1yLGkudT1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIGk9NSxBKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtpPTYsaChmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBBKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIHcoci5fX0gsdSk/KHIubz1uKCksci51PXUsci5fX2g9bixyLm8pOnIuX199ZnVuY3Rpb24gRihuLHQpe3JldHVybiBpPTgsQShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBUKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gcSh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiB4KG4pe3ZhciByPW0odCsrLDEwKSxvPWQoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24gYigpe2Zvcih2YXIgdDt0PWMuc2hpZnQoKTspaWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faC5mb3JFYWNoKGspLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxmJiZmKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtlJiZlKG4pLHQ9MDt2YXIgbz0odT1uLl9fYykuX19IO28mJihyPT09dT8oby5fX2g9W10sdS5fX2g9W10sby5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ubz1uLnU9dm9pZCAwfSkpOihvLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi51JiYobi5fX0g9bi51KSxuLm8mJihuLl9fPW4ubyksbi5vPW4udT12b2lkIDB9KSxvLl9faC5mb3JFYWNoKGopLG8uX19oLmZvckVhY2goayksby5fX2g9W10pKSxyPXV9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2EmJmEodCk7dmFyIGk9dC5fX2M7aSYmaS5fX0gmJmkuX19ILl9faC5sZW5ndGgmJigxIT09Yy5wdXNoKGkpJiZvPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgobz1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksZyYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtnJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoYikpLHU9bnVsbCxyPW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9fSCYmdC5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLnUmJihuLl9fSD1uLnUpLG4ubyYmKG4uX189bi5vKSxuLm89bi51PXZvaWQgMH0pLHQuX19oLmZvckVhY2goaiksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxrKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSx2JiZ2KHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXtsJiZsKHQpO3ZhciB1LHI9dC5fX2M7ciYmci5fX0gmJihyLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe3RyeXtqKG4pfWNhdGNoKG4pe3U9bn19KSx1JiZuLl9fZSh1LHIuX192KSl9O3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBqKG4pe3ZhciB0PXUscj1uLl9fYztcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYobi5fX2M9dm9pZCAwLHIoKSksdT10fWZ1bmN0aW9uIGsobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIHcobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24geihuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtkIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsQSBhcyB1c2VNZW1vLEYgYXMgdXNlQ2FsbGJhY2ssVCBhcyB1c2VDb250ZXh0LHEgYXMgdXNlRGVidWdWYWx1ZSx4IGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Uyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gUyh0aGlzLnByb3BzLG4pfHxTKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQpe3ZhciBlPUMoe30sdCk7cmV0dXJuIGRlbGV0ZSBlLnJlZixuKGUsdC5yZWZ8fG51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUscil7aWYobi50aGVuKWZvcih2YXIgdSxvPXQ7bz1vLl9fOylpZigodT1vLl9fYykmJnUuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSx1Ll9fYyhuLHQpO0Eobix0LGUscil9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sZj0hMD09PXQuX19oO3IuX191Kyt8fGZ8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1DKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3ZhciBlPXMoSSx7X192Om4saTp0fSk7cmV0dXJuIGUuY29udGFpbmVySW5mbz10LGV9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBQPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxWPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8saj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gJChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtqJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uZm9jdXMkL2kudGVzdChvKT9vPVwib25mb2N1c2luXCI6L15vbmJsdXIkL2kudGVzdChvKT9vPVwib25mb2N1c291dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wfENvbXBvKS8udGVzdChvKT9vPW8udG9Mb3dlckNhc2UoKTp1JiZWLnRlc3Qobyk/bz1vLnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1pJiYoaT12b2lkIDApLC9eb25pbnB1dC9pLnRlc3QobykmJihvPW8udG9Mb3dlckNhc2UoKSxyW29dJiYobz1cIm9uaW5wdXRDYXB0dXJlXCIpKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yLGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSl9bi4kJHR5cGVvZj1QLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PVB9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOiQsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmZuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLCQgYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGZuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxjbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5KC4uLnZhbHVlcykge1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYodmFsdWUpO1xuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnQgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXG4gKlxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKlxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGRlcCwgcHJldkRlcCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXBhc3NpdmUtc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XG59XG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8gXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IG9uRWxlbWVudENoYW5nZSA9IGFyZ3M/Lm9uRWxlbWVudENoYW5nZTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoZWxlbWVudCkgeyByZXR1cm4gKGVsZW1lbnQ/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQgPz8gd2luZG93LmRvY3VtZW50ID8/IGdsb2JhbFRoaXMuZG9jdW1lbnQpOyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlRG9jdW1lbnRDbGFzcyhjbGFzc05hbWUsIGFjdGl2ZSwgZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPz89IGdldERvY3VtZW50KCkuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNsYXNzTmFtZSA9IGNsc3goY2xhc3NOYW1lKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY2xhc3NOYW1lLCBhY3RpdmUsIGVsZW1lbnRdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kb2N1bWVudC1jbGFzcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gXCIuL3VzZS1kb2N1bWVudC1jbGFzc1wiO1xuZnVuY3Rpb24gZXh0cmFjdEVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXRyaWV2ZSB0aGUgc2l6ZSBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldFwiKTtcbiAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XG4gICAgcmV0dXJuICh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XG59XG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVsZW1lbnRTaXplKHsgZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0U2l6ZSwgc2V0U2l6ZV0gPSB1c2VQYXNzaXZlU3RhdGUob25TaXplQ2hhbmdlLCByZXR1cm5OdWxsKTtcbiAgICBjb25zdCBjdXJyZW50T2JzZXJ2ZUJveCA9IHVzZVJlZih1bmRlZmluZWQpO1xuICAgIGNvbnN0IG5lZWRBTmV3T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgb2JzZXJ2ZUJveCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgeyBib3g6IG9ic2VydmVCb3ggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGUpID0+IG5lZWRBTmV3T2JzZXJ2ZXIoZSwgZ2V0T2JzZXJ2ZUJveD8uKCkpLCBbXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGdldE9ic2VydmVCb3gpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZUJveC5jdXJyZW50ICE9PSBnZXRPYnNlcnZlQm94KCkpXG4gICAgICAgICAgICAgICAgbmVlZEFOZXdPYnNlcnZlcihnZXRFbGVtZW50KCksIGdldE9ic2VydmVCb3goKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVsZW1lbnRTaXplIH0gZnJvbSBcIi4vdXNlLWVsZW1lbnQtc2l6ZVwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgW2dldENvbXB1dGVkU3R5bGVzLCBzZXRDb21wdXRlZFN0eWxlc10gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHNldENvbXB1dGVkU3R5bGVzKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXG4gICAgLy8gICBBLiBUaGVyZSdzIG5vIHdheSB0byB3YXRjaCBmb3IgQ1NTIHN0eWxlIGNoYW5nZXNcbiAgICAvLyAgIEIuIENhbGxpbmcgZ2V0Q29tcHV0ZWRTdHlsZSBhZnRlciBldmVyeSByZW5kZXIgZm9yIGV2ZXJ5IGVsZW1lbnQgZ2V0cyBleHBlbnNpdmUgZmFzdCBhbmRcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIG1vc3QgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcbiAgICAvLyAgICAgIChUaG9zZSB0aGF0IGRvIHdpbGwgbmVlZCB0byBtb3VudCBhbmQgdW5tb3VudCB0aGUgY29tcG9uZW50IHRoYXQgdXNlcyBpdClcbiAgICAvL1xuICAgIC8vIEFzIGEgc29sdXRpb24sIGhlcmUncyBhIGNoZWFwIHdvcmthcm91bmQgdGhhdCBjaGVja3Mgd2hlbiB0aGUgZWxlbWVudCdzIHNpemUgaGFzIGNoYW5nZWQsXG4gICAgLy8gYW5kIGlmIHNvLCB0ZXN0cyBpZiB0aGUgd3JpdGluZyBtb2RlIGhhcyBjaGFuZ2VkIHRvby5cbiAgICAvL1xuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBhdCBsZWFzdCBzb21lIG51bWJlciBvZiBjYXNlcywgYnV0IGEgYmV0dGVyIHNvbHV0aW9uIGlzIHN0aWxsIG5lZWRlZC5cbiAgICBjb25zdCB7IHVzZUVsZW1lbnRTaXplUHJvcHMgfSA9IHVzZUVsZW1lbnRTaXplKHsgb25TaXplQ2hhbmdlOiB1c2VDYWxsYmFjayhfID0+IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZT8uKGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCkpLCBbXSkgfSk7XG4gICAgY29uc3QgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoKTtcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGVzKSB7XG4gICAgICAgICAgICBsZXQgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xuICAgICAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XG4gICAgICAgICAgICBsZXQgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGlmICh0ID09IFwidXByaWdodFwiKVxuICAgICAgICAgICAgICAgIGQgPSBcImx0clwiO1xuICAgICAgICAgICAgcmV0dXJuICh7IC4uLldyaXRpbmdNb2Rlc1t3IHx8IFwiaG9yaXpvbnRhbC10YlwiXVtkIHx8IFwibHRyXCJdIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIFtdKTtcbiAgICAvL2NvbnN0IFtnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgc2V0TG9naWNhbERpcmVjdGlvbkluZm9dID0gdXNlUGFzc2l2ZVN0YXRlPExvZ2ljYWxEaXJlY3Rpb25JbmZvPihvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBlbGVtZW50T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgICAgY2FzZSBcImJsb2NrLXN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMF1dO1xuICAgICAgICAgICAgY2FzZSBcImJsb2NrLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmJsb2NrRGlyZWN0aW9uID8/IFwidHRiXCIpWzJdXTtcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIilbMF1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1lbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIilbMl1dO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJidHRcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJsdHJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIFwiaW5saW5lLXN0YXJ0XCI7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRFbGVtZW50U2l6ZSA9IHVzZUNhbGxiYWNrKChlbGVtZW50U2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgeyBpbmxpbmVTaXplLCBibG9ja1NpemUsIGlubGluZURpcmVjdGlvbiwgYmxvY2tEaXJlY3Rpb24gfSA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcbiAgICAgICAgICAgIC8vIG9yIHNvbWV0aW1lcyB0d28gKGxpa2UgYGxlZnRgICsgYHdpZHRoYClcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGRpcikgeyBpZiAoZGlyID09PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XG4gICAgICAgICAgICBjb25zdCBmMSA9IGdldFBoeXNpY2FsTGVmdFRvcChpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmNCA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKSk7XG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmNCl9YF0pKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrSW5zZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUVsZW1lbnRTaXplUHJvcHMocHJvcHMpKSwgW10pLFxuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyxcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpemU6IGNvbnZlcnRFbGVtZW50U2l6ZSxcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2lkZSxcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxTaWRlXG4gICAgfTtcbn1cbi8vIEhlbHBlciBmb3IgZXh0cmFjdGluZyBpbmZvIGZyb20gXCJsdHJcIiwgXCJ0dGJcIiwgZXRjLlxuY29uc3QgTSA9IHtcbiAgICB0OiBcInRvcFwiLFxuICAgIGI6IFwiYm90dG9tXCIsXG4gICAgbDogXCJsZWZ0XCIsXG4gICAgcjogXCJyaWdodFwiXG59O1xuO1xuY29uc3QgSG9yaXpvbnRhbFRiTHRyID0ge1xuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIGlubGluZVNpemU6IFwid2lkdGhcIixcbiAgICBibG9ja1NpemU6IFwiaGVpZ2h0XCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJ0dGJcIlxufTtcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcbiAgICAuLi5Ib3Jpem9udGFsVGJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInJ0bFwiLFxufTtcbmNvbnN0IFZlcnRpY2FsUmxMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcbiAgICBibG9ja1NpemU6IFwid2lkdGhcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwidHRiXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXG59O1xuY29uc3QgVmVydGljYWxSbFJ0bCA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIlxufTtcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcbmNvbnN0IFNpZGV3YXlzUmxSdGwgPSB7IC4uLlZlcnRpY2FsUmxSdGwgfTtcbmNvbnN0IFZlcnRpY2FsTHJMdHIgPSB7XG4gICAgLi4uVmVydGljYWxSbEx0cixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxSdGwsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXG59O1xuY29uc3QgU2lkZXdheXNMdEx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbExyTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwiYnR0XCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcImx0clwiXG59O1xuY29uc3QgU2lkZXdheXNMdFJ0bCA9IHtcbiAgICAuLi5TaWRld2F5c0x0THRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxufTtcbmNvbnN0IEhvcml6b250YWxUYiA9IHtcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcbiAgICBydGw6IEhvcml6b250YWxUYlJ0bFxufTtcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XG4gICAgbHRyOiBWZXJ0aWNhbFJsTHRyLFxuICAgIHJ0bDogVmVydGljYWxSbFJ0bFxufTtcbmNvbnN0IFZlcnRpY2FsTHIgPSB7XG4gICAgbHRyOiBWZXJ0aWNhbExyTHRyLFxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxufTtcbmNvbnN0IFNpZGV3YXlzUmwgPSB7XG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxuICAgIHJ0bDogU2lkZXdheXNSbFJ0bFxufTtcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XG4gICAgbHRyOiBTaWRld2F5c0x0THRyLFxuICAgIHJ0bDogU2lkZXdheXNMdFJ0bFxufTtcbmNvbnN0IFdyaXRpbmdNb2RlcyA9IHtcbiAgICBcImhvcml6b250YWwtdGJcIjogSG9yaXpvbnRhbFRiLFxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcbiAgICBcInZlcnRpY2FsLXJsXCI6IFZlcnRpY2FsUmwsXG4gICAgXCJzaWRld2F5cy1sclwiOiBTaWRld2F5c0xyLFxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIFNsaWdodGx5IGVuaGFuY2VkIHZlcnNpb24gb2YgYHVzZVN0YXRlYCB0aGF0IGluY2x1ZGVzIGEgZ2V0dGVyIHRoYXQgcmVtYWlucyBjb25zdGFudFxuICogKGkuZS4geW91IGNhbiB1c2UgaXQgaW4gYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpdCBiZWluZyBhIGRlcGVuZGVuY3kpLlxuICpcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBXZSBrZWVwIGJvdGgsIGJ1dCBvdmVycnJpZGUgdGhlIGBzZXRTdGF0ZWAgZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVQXSA9IHVzZVN0YXRlUChpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGF0ZSk7XG4gICAgLy8gSGlqYWNrIHRoZSBub3JtYWwgc2V0dGVyIGZ1bmN0aW9uIFxuICAgIC8vIHRvIGFsc28gc2V0IG91ciByZWYgdG8gdGhlIG5ldyB2YWx1ZVxuICAgIGNvbnN0IHNldFN0YXRlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHZhbHVlO1xuICAgICAgICAgICAgc2V0U3RhdGVQKHByZXZWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5jb25zdCBUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlfLVwiO1xuZnVuY3Rpb24gYmFzZTY0KHZhbHVlKSB7XG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcbn1cbmZ1bmN0aW9uIHJhbmRvbTZCaXRzKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xufVxuZnVuY3Rpb24gcmFuZG9tNjRCaXRzKCkge1xuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV07XG59XG4vKipcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXG4gKiBOb3RlIHRoYXQgaWYgdGhlIHByZWZpeCBpcyAqZXhwbGljaXRseSogc2V0IHRvIFwiXCIsIHRoZW5cbiAqIElEcyB0aGF0IGFyZSBub3QgdmFsaWQgdW5kZXIgSFRNTDQgbWF5IGJlIGdlbmVyYXRlZC4gT2ggbm8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkge1xuICAgIHJldHVybiBgJHtwcmVmaXggPz8gXCJpZC1cIn0ke3JhbmRvbTY0Qml0cygpLm1hcChuID0+IGJhc2U2NChuKSkuam9pbihcIlwiKX1gO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgaG9vayB0aGF0IG1vZGlmaWVzIGEgc2V0IG9mIHByb3BzIHRvIHByb3ZpZGUgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgaWYgb25lIHdhcyBub3QgcHJvdmlkZWQuXG4gKlxuICogSWYgeW91J2QgbGlrZSB0byB1c2UgdGhlIElEIGluIGEgcHJvcGVydHkgdGhhdCdzICpub3QqIG5hbWVkIGBpZGAgKGxpa2UgYGZvcmAgb3IgYGFyaWEtbGFiZWxsZWRieWAgb3Igd2hhdG5vdCksIGB1c2VSZWZlcmVuY2VkSWRQcm9wc2AgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBBbmQgdGhlIHJhbmRvbWx5LWdlbmVyYXRlZCBpZCBpdHNlbGYgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHlvdSB3YW50IHRvIGhhbmRsZSB0aGUgbG9naWMgeW91cnNlbGYgd2l0aG91dCBgdXNlTWVyZ2VkUHJvcHNgLlxuICpcbiAqIFVubGlrZSBtb3N0IG90aGVyIGB1c2UqUHJvcHNgIGhvb2tzLCB0aGVzZSBhcmUgbW9zdGx5IHN0YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJhbmRvbUlkKHsgcHJlZml4IH0gPSB7fSkge1xuICAgIGNvbnN0IFtyYW5kb21JZCwgc2V0UmFuZG9tSWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpKTtcbiAgICBjb25zdCBbd2F0Y2hQcmVmaXhVcGRhdGVzLCBzZXRXYXRjaFByZWZpeFVwZGF0ZXMsIGdldFdhdGNoUHJlZml4VXBkYXRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2F0Y2hQcmVmaXhVcGRhdGVzID0gZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzKCk7XG4gICAgICAgIGlmICh3YXRjaFByZWZpeFVwZGF0ZXMpXG4gICAgICAgICAgICBzZXRSYW5kb21JZCgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkpO1xuICAgICAgICBzZXRXYXRjaFByZWZpeFVwZGF0ZXModHJ1ZSk7XG4gICAgfSwgW3ByZWZpeF0pO1xuICAgIC8vIFdoYXRldmVyIElEIHdhcyBtb3N0IHJlY2VudGx5IHVzZWQgYnkgdGhlIGFjdHVhbCBcImlkXCIgcHJvcC5cbiAgICAvLyBVc2VkIHNvIHRoYXQgYW55IElELXJlZmVyZW5jaW5nIHByb3BzIGRvbid0IG5lZWQgdG8gcHJvdmlkZSB0aGUgc2FtZSB2YWx1ZS5cbiAgICAvL1xuICAgIC8vIFRPRE86IFRoaXMgZG9lcyBtZWFuIHRoYXQgb24gdGhlIGZpcnN0IHJlbmRlciwgaWYganVzdCB0aGUgSUQgaXMgcHJvdmlkZWQsXG4gICAgLy8gdGhlcmUgd2lsbCBiZSBhIHRlbXBvcmFyeSBtaXNtYXRjaCwgYnV0IGl0J3MgY29ycmVjdGVkIGJlZm9yZSByZW5kZXJpbmcgZmluaXNoZXMuXG4gICAgLy8gSXMgdGhpcyBva2F5P1xuICAgIGNvbnN0IFt1c2VkSWQsIHNldFVzZWRJZCwgZ2V0VXNlZElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgdXNlUmVmZXJlbmNlZElkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhpZFByb3BOYW1lKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IGZ1bmN0aW9uICh7IFtpZFByb3BOYW1lXTogZ2l2ZW5JZCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgY29uc3QgdXNlZElkMiA9IChnaXZlbklkID8/IHVzZWRJZCA/PyByYW5kb21JZCA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKGlkUHJvcE5hbWUgPT09IFwiaWRcIilcbiAgICAgICAgICAgICAgICBzZXRVc2VkSWQodXNlZElkMik7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFtpZFByb3BOYW1lXTogdXNlZElkMiB9LCBwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSwgW3VzZWRJZCwgcmFuZG9tSWRdKTtcbiAgICBjb25zdCB1c2VSYW5kb21JZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmFuZG9tSWRQcm9wcyhwKSB7XG4gICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImlkXCIpKHApO1xuICAgIH0sIFt1c2VSZWZlcmVuY2VkSWRQcm9wc10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbUlkLFxuICAgICAgICBpZDogdXNlZElkLFxuICAgICAgICBnZXRJZDogZ2V0VXNlZElkLFxuICAgICAgICB1c2VSYW5kb21JZFByb3BzLFxuICAgICAgICB1c2VSZWZlcmVuY2VkSWRQcm9wc1xuICAgIH07XG59XG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZCh1KSB7IH1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzcyhzdHIpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c0Nzcyhwcm9wKSB7IH1cbmZ1bmN0aW9uIHRlc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IGlkLCByYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKCk7XG4gICAgLy9jb25zdCBwMWE6IE1lcmdlZFByb3BzPHsgaWQ6IHN0cmluZyB9LCB7ICB9PiA9IHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pXG4gICAgY29uc3QgcDFiID0gdXNlUmFuZG9tSWRQcm9wcyh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwMmIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYyA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHByb3BzKTtcbiAgICBjb25zdCBwM2EgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgaWQ6IHVuZGVmaW5lZCB9KSk7XG4gICAgY29uc3QgcDNiID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwNGEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh1c2VSYW5kb21JZFByb3BzKHsgaWQ6IHVuZGVmaW5lZCB9KSk7XG4gICAgY29uc3QgcDRiID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocDFiKTtcbiAgICAvL3AxYS5pZDtcbiAgICBwMWIuaWQ7XG4gICAgcDJhW1wiZm9yXCJdO1xuICAgIHAyYltcImZvclwiXTtcbiAgICBwMmNbXCJmb3JcIl07XG4gICAgcDNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDNhW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XG4gICAgcDNiW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XG4gICAgcDRhW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XG4gICAgcDRiW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XG4gICAgcDRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogSXQncyBiZWNhdXNlIGl0IHJlc29sdmVzIHRvIFwiaWQ6IHVuZGVmaW5lZCAmIHN0cmluZ1wiIC0tIHRoaXMgc2hvdWxkbid0IGhhcHBlblxuICAgIHA0Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAxYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MocDFiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHAyYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAyYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MocDJiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHAzYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAzYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwNGEuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHA0Yi5zdHlsZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmFuZG9tLWlkLmpzLm1hcCIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21JZCB9IGZyb20gXCIuL3VzZS1yYW5kb20taWRcIjtcbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcCgpO1xuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcbmNvbnN0IG5ld0NvbW1pdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgZm9yIChsZXQgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKC4uLmFyZ3MpO1xufTtcbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQ7XG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtpZF0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICpcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICogQHBhcmFtIGltcGwgWW91IGNhbiBjaG9vc2Ugd2hldGhlciB0byB1c2UgYHVzZUVmZmVjdGAgb3IgYHVzZUxheW91dEVmZmVjdGAgYnlcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgaW1wbCA9IHVzZUVmZmVjdE5hdGl2ZSkge1xuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJbnB1dHMuY3VycmVudFtpXSAhPSBpbnB1dHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBsKGVmZmVjdDIsIGlucHV0cyk7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoeyB0aW1lb3V0LCBjYWxsYmFjaywgdHJpZ2dlckluZGV4IH0pIHtcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xuICAgIC8vIFNldCBhbnkgdGltZSB3ZSBzdGFydCB0aW1lb3V0LlxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0aW1lb3V0SXNOdWxsID0gKHRpbWVvdXQgPT0gbnVsbCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XG4gICAgLy8gd2hlbiB0aGUgZHVyYXRpb24gb3IgY2FsbGJhY2sgY2hhbmdlcywgb25seSB0cmlnZ2VySW5kZXguXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lb3V0SXNOdWxsKSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KHN0YWJsZUNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXN5bmMoeyBkZWJvdW5jZSB9KSB7XG4gICAgLy8gQWx3YXlzIHJlcHJlc2VudHMgd2hhdGV2ZXIgcHJvbWlzZSBpcyBjdXJyZW50bHkgYmVpbmcgd2FpdGVkIG9uLCBvciBudWxsIGlmIG5vbmUuXG4gICAgY29uc3QgW3Byb21pc2UsIHNldFByb21pc2UsIGdldFByb21pc2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gS2VlcCB0cmFjayBvZiBob3cgbWFueSB0aW1lcyB3ZSd2ZSBhY3R1YWxseSBjYWxsZWQgdGhlIGFzeW5jIGhhbmRsZXJcbiAgICBjb25zdCBbcnVuQ291bnQsIHNldFJ1bkNvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyZXNvbHZlQ291bnQsIHNldFJlc29sdmVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVqZWN0Q291bnQsIHNldFJlamVjdENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIC8vIEtlZXAgdHJhY2sgb2Ygd2hldGhlciB3ZSdyZSBhY3Rpbmcgb24gYSBzeW5jIG9yIGFzeW5jIGhhbmRsZXIsIGp1c3QgaW4gY2FzZSB0aGF0J3MgaW1wb3J0YW50LlxuICAgIC8vIFRoaXMgY2FuIGNoYW5nZSBpZiB0aGUgaGFuZGxlciBzd2l0Y2hlcyBiZXR3ZWVuIGJlaW5nIHN5bmMgb3IgYXN5bmMsIHRlY2huaWNhbGx5LCBhbmQgd2lsbCBiZVxuICAgIC8vIG51bGwgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGhhbmRsZXIgaXMgY2FsbGVkLlxuICAgIGNvbnN0IFtjdXJyZW50VHlwZSwgc2V0Q3VycmVudFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gSWYgd2UncmUgc2V0IHRvIHVzZSBhIGRlYm91bmNlLCB0aGVuIHdoZW4gdGhlIHRpbWVvdXQgZmluaXNoZXMsXG4gICAgLy8gdGhlIHByb21pc2UgZnJvbSB0aGlzIHN0YXRlIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCBvdmVyIHRvIGVpdGhlciBcbiAgICAvLyB0aGUgY3VycmVudCBwcm9taXNlIG9yIHRoZSBwZW5kaW5nIHByb21pc2UuXG4gICAgY29uc3QgW2RlYm91bmNlZFByb21pc2VTdGFydGVyLCBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlciwgZ2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gV2hlbiB3ZSB3YW50IHRvIHN0YXJ0IGEgbmV3IHByb21pc2UsIHdlIHdvbid0IGFsbG93IGl0IHRvIHN0YXJ0IGlmIG9uZSBpcyBzdGlsbCBydW5uaW5nLlxuICAgIC8vIEluIHRoYXQgY2FzZSwgd2Ugc3RvcmUgdGhlIHByb21pc2UgKG9yIHJhdGhlciwgYSB3YXkgdG8gc3RhcnQgdGhlIHByb21pc2UpIGluIHN0YXRlLlxuICAgIGNvbnN0IFtwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIsIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlciwgZ2V0UGVuZGluZ1Byb21pc2VTdGFydGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIFdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGB1bmRlZmluZWRgIGFuZCBcIm5vIGVycm9yIGhhcyBiZWVuIHRocm93blwiLFxuICAgIC8vIHNvIHdlIGhhdmUgdHdvIHNlcGFyYXRlIGVycm9yIHN0YXRlIHZhcmlhYmxlcy5cbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yLCBnZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3IsIGdldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBXaGVuIHRoZSBkZWJvdW5jZSB0aW1lciBpcyB1cCAob3IgdGhlIHVzZXIgbWFudWFsbHkgcmVxdWVzdHMgdGhlIGRlYm91bmNlIHRvIGVuZClcbiAgICAvLyBydW4gdGhlIG5vcm1hbCBcInBsZWFzZSBjb25zaWRlciBydW5uaW5nIHRoaXMgcHJvbWlzZVwiIHJvdXRpbmUgdGhhdCB3ZSB3b3VsZFxuICAgIC8vIGhhdmUganVzdCBydW4gaW1tZWRpYXRlbHkgaWYgd2Ugd2VyZW4ndCBkZWJvdW5jaW5nIG91ciBwcm9taXNlcy5cbiAgICBjb25zdCBvbkRlYm91bmNlVGltZVVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWJvdW5jZWRQcm9taXNlU3RhcnRlciA9IGdldERlYm91bmNlZFByb21pc2VTdGFydGVyKCk7XG4gICAgICAgIGlmIChkZWJvdW5jZWRQcm9taXNlU3RhcnRlcilcbiAgICAgICAgICAgIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2UoZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIpO1xuICAgICAgICBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcihudWxsKTtcbiAgICB9LCBbd2FudFRvU3RhcnRBTmV3UHJvbWlzZSwgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGRlYm91bmNlLiBMb2dpY2FsbHkgdGhpcyBoYXBwZW5zIGJlZm9yZSB0aGUgbWFpbiBzdGVwIGFzIGEgc29ydCBvZiBzdGVwIDAuXG4gICAgLy8gUmVzZXRzIHRoZSB0aW1lb3V0IGFueSB0aW1lIHRoZSBoYW5kbGVyIHdhcyByZXF1ZXN0ZWQgdG8gYmUgY2FsbGVkIGFnYWluXG4gICAgLy8gYW5kIHdoZW4gaXQgZmluaXNoZXMsIGFjdHVhbGx5IGNhbGwgdGhlIGhhbmRsZXIgKG9yIHNldCBpdCBhcyB0aGUgcGVuZGluZyBwcm9taXNlKVxuICAgIHVzZVRpbWVvdXQoe1xuICAgICAgICB0aW1lb3V0OiBkZWJvdW5jZSA/PyBudWxsLFxuICAgICAgICBjYWxsYmFjazogb25EZWJvdW5jZVRpbWVVcCxcbiAgICAgICAgdHJpZ2dlckluZGV4OiBkZWJvdW5jZWRQcm9taXNlU3RhcnRlclxuICAgIH0pO1xuICAgIC8vIFNlZSBpZiB3ZSBzaG91bGQgc2V0IG91ciBjdXJyZW50IHByb21pc2UgdG8gYmUgd2hhdGV2ZXIgdGhlIHBlbmRpbmcgcHJvbWlzZSBpc1xuICAgIC8vICh1c3VhbGx5IGJlY2F1c2UgdGhlIGN1cnJlbnQgcHJvbWlzZSBmaW5pc2hlZCBhbmQgYmVjYW1lIG51bGwpLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIE91ciBjdXJyZW50IHByb21pc2UganVzdCBmaW5pc2hlZCBhbmQgdGhlcmUncyBvbmUgd2FpdGluZz9cbiAgICAgICAgaWYgKHByb21pc2UgPT0gbnVsbCAmJiBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIpO1xuICAgICAgICAgICAgc2V0UGVuZGluZ1Byb21pc2VTdGFydGVyKG51bGwpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb21pc2UsIHBlbmRpbmdQcm9taXNlU3RhcnRlcl0pO1xuICAgIGxldCByZXQgPSB7XG4gICAgICAgIHVzZVN5bmNIYW5kbGVyLFxuICAgICAgICBjYWxsQ291bnQ6IHJ1bkNvdW50LFxuICAgICAgICBwZW5kaW5nOiAocHJvbWlzZSAhPSBudWxsKSxcbiAgICAgICAgaGFzRXJyb3IsXG4gICAgICAgIGVycm9yLFxuICAgICAgICByZXNvbHZlQ291bnQsXG4gICAgICAgIHJlamVjdENvdW50LFxuICAgICAgICBmbHVzaERlYm91bmNlZFByb21pc2U6IG9uRGVib3VuY2VUaW1lVXAsXG4gICAgICAgIHByb21pc2UsXG4gICAgICAgIGN1cnJlbnRUeXBlLFxuICAgICAgICBzZXR0bGVDb3VudDogcmVqZWN0Q291bnQgKyByZXNvbHZlQ291bnRcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gICAgLy8gQ2FsbGVkIGFueSB0aW1lIHRoZSBhc3luYyBoYW5kbGVyIGlzIGFib3V0IHRvIGJlIGNhbGxlZCBmb3Igd2hhdGV2ZXIgcmVhc29uLFxuICAgIC8vIGV4Y2VwdCBmb3IgZGVib3VuY2UsIHdoaWNoIGNvbWVzIGZpcnN0LCBhcyBhIHNvcnQgb2YgXCJzdGVwIDBcIi5cbiAgICAvLyBIYW5kbGVzIGFsbCB0aGUgbmVjZXNzYXJ5IGJvaWxlcnBsYXRlIHJlbGF0ZWQgdG8gY2hvb3Npbmcgd2hldGhlciB0b1xuICAgIC8vIHJ1biBvciBzZXQgYXMgcGVuZGluZywgcmVzZXR0aW5nIHN0YXRlIHZhcmlhYmxlcywgZXRjLlxuICAgIGZ1bmN0aW9uIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2Uoc3RhcnRQcm9taXNlKSB7XG4gICAgICAgIGxldCBhbHJlYWR5UnVubmluZ1Byb21pc2UgPSAoZ2V0UHJvbWlzZSgpICE9IG51bGwpO1xuICAgICAgICAvLyBCb2lsZXJwbGF0ZSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gcHJvbWlzZSBzdGFydGVyXG4gICAgICAgIGxldCBzdGFydFByb21pc2VXaXRoQm9pbGVycGxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIGl0IHN0YXJ0cywgbm90aWZ5IHRoZSBjYWxsZXJcbiAgICAgICAgICAgIHNldFJ1bkNvdW50KHIgPT4gKytyKTtcbiAgICAgICAgICAgIC8vIFdoZW4gaXQgY29tcGxldGVzLCBub3RpZnkgdGhlIGNhbGxlclxuICAgICAgICAgICAgLy8gV2hlbiBpdCBmYWlscywgc2F2ZSB0aGUgZXJyb3IgYW5kIG5vdGlmeSB0aGUgY2FsbGVyXG4gICAgICAgICAgICAvLyBXaGVuIGl0IHNldHRsZXMsIHJlc2V0IG91ciBzdGF0ZSBzbyB3ZSBjYW4gcnVuIGEgcGVuZGluZyBwcm9taXNlIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgY29uc3Qgb25UaGVuID0gKHZhbHVlKSA9PiB7IHNldFJlc29sdmVDb3VudChjID0+ICsrYyk7IHJldHVybiB2YWx1ZTsgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uQ2F0Y2ggPSAoZXgpID0+IHsgc2V0RXJyb3IoZXgpOyBzZXRIYXNFcnJvcih0cnVlKTsgc2V0UmVqZWN0Q291bnQoYyA9PiArK2MpOyB9O1xuICAgICAgICAgICAgY29uc3Qgb25GaW5hbGx5ID0gKCkgPT4geyBzZXRQcm9taXNlKG51bGwpOyB9O1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIGhhbmRsZXIgaXMgc3luY2hyb25vdXNcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0YXJ0UHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJvbWlzZSA9IChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09IFwib2JqZWN0XCIgJiYgXCJ0aGVuXCIgaW4gcmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgIWlzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCByZXR1cm5lZCBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5LlxuICAgICAgICAgICAgICAgICAgICBvblRoZW4oKHJlc3VsdCA/PyB1bmRlZmluZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlKFwic3luY1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKG9uVGhlbikuY2F0Y2gob25DYXRjaCkuZmluYWxseShvbkZpbmFsbHkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VHlwZShcImFzeW5jXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5hc3NlcnQoXCJ0aGVuXCIgaW4gKHJlc3VsdCBhcyBQcm9taXNlPGFueT4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEl0J3Mgc3luY2hyb25vdXMgKG9yIGFzeW5jaHJvbm91cyBidXQgZGlkbid0IGF3YWl0IGFueXRoaW5nIHlldCkgYW5kIHRocmV3IGFuIGVycm9yLlxuICAgICAgICAgICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5LlxuICAgICAgICAgICAgICAgIG9uQ2F0Y2goZXgpO1xuICAgICAgICAgICAgICAgIG9uRmluYWxseSgpO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlKFwic3luY1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgaGFuZGxlciBpcyBhc3luY2hyb25vdXNcbiAgICAgICAgICAgIC8vc2V0Q3VycmVudFR5cGUoXCJhc3luY1wiKTtcbiAgICAgICAgICAgIC8vcmV0dXJuIChhc3luYyAoKSA9PiB7IGF3YWl0IHJlc3VsdDsgfSkoKS50aGVuKG9uVGhlbikuY2F0Y2gob25DYXRjaCkuZmluYWxseShvbkZpbmFsbHkpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIWFscmVhZHlSdW5uaW5nUHJvbWlzZSkge1xuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgaW1tZWRpYXRlbHksIGJlY2F1c2UgdGhlcmUgd2Fzbid0IG9uZSBydW5uaW5nIGFscmVhZHkuXG4gICAgICAgICAgICBsZXQgbmV4dFByb21pc2UgPSBzdGFydFByb21pc2VXaXRoQm9pbGVycGxhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzUHJvbWlzZSA9IChuZXh0UHJvbWlzZSAhPSBudWxsICYmIHR5cGVvZiBuZXh0UHJvbWlzZSA9PSBcIm9iamVjdFwiICYmIFwidGhlblwiIGluIG5leHRQcm9taXNlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvbWlzZSA9PSBudWxsIHx8ICFpc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBIb2xkIG9uISBUaGUgaGFuZGxlciB3YXMgYWN0dWFsbHkgc3luY2hyb25vdXMsIGFuZCBhbHJlYWR5IGZpbmlzaGVkLlxuICAgICAgICAgICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBzZXRIYXNFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZShuZXh0UHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBEb24ndCBzdGFydCB0aGUgcHJvbWlzZSB5ZXQsIFxuICAgICAgICAgICAgLy8gYW5kIGFsbG93IGl0IHRvIHN0YXJ0IGluIHRoZSBmdXR1cmUgaW5zdGVhZC5cbiAgICAgICAgICAgIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlcihfID0+IHN0YXJ0UHJvbWlzZVdpdGhCb2lsZXJwbGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXNlU3luY0hhbmRsZXIoYXN5bmNIYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IHN5bmNIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soZnVuY3Rpb24gc3luY0hhbmRsZXIoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKGFzeW5jSGFuZGxlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9ICgpID0+IGFzeW5jSGFuZGxlciguLi5hcmdzKTtcbiAgICAgICAgICAgIGlmIChkZWJvdW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShzdGFydFByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIoXyA9PiBzdGFydFByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN5bmNIYW5kbGVyO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hc3luYy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gXCIuL3VzZS1hc3luY1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKiBHaXZlbiBhbiBhc3luY3Jvbm91cyBldmVudCBoYW5kbGVyLCByZXR1cm5zIGEgc3luY3Jvbm91cyBvbmUgdGhhdCB3b3JrcyBvbiB0aGUgRE9NLFxuICogYWxvbmcgd2l0aCBzb21lIG90aGVyIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBEb2VzIG5vdCBtb2RpZnkgYW55IHByb3BzLlxuICpcbiAqIE5vdGUgdGhhdCBiZWNhdXNlIHRoZSBoYW5kbGVyIHlvdSBwcm92aWRlIG1heSBiZSBjYWxsZWQgd2l0aCBhIGRlbGF5LCBhbmRcbiAqIGJlY2F1c2UgdGhlIHZhbHVlIG9mLCBlLmcuLCBhbiBgPGlucHV0PmAgZWxlbWVudCB3aWxsIGxpa2VseSBiZSBzdGFsZSBieSB0aGVcbiAqIHRpbWUgdGhlIGRlbGF5IGlzIG92ZXIsIGEgYGNhcHR1cmVgIGZ1bmN0aW9uIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0b1xuICogY2FwdHVyZSB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb24gZnJvbSB0aGUgRE9NLiBBbnkgb3RoZXIgc2ltcGxlIGV2ZW50IGRhdGEsXG4gKiBsaWtlIGBtb3VzZVhgIG9yIGBzaGlmdEtleWAgY2FuIHN0YXkgb24gdGhlIGV2ZW50IGl0c2VsZiBhbmQgZG9uJ3RcbiAqIG5lZWQgdG8gYmUgY2FwdHVyZWQgJm5kYXNoOyBpdCdzIG5ldmVyIHN0YWxlLlxuICpcbiAqIGBgYHRzeFxuICogY29uc3Qgc3luY09uSW5wdXQgPSBhc3luYyAodmFsdWU6IG51bWJlciwgZTogRXZlbnQpID0+IHtcbiAqICAgICBbLi4uXSAvLyBFeC4gc2VuZCB0byBhIHNlcnZlciBhbmQgc2V0U3RhdGUgd2hlbiBkb25lXG4gKiB9O1xuICogY29uc3Qge1xuICogICAgIC8vIFdoZW4gY2FsbGVkLCByZXR1cm5zIHRoZSBzeW5jaHJvbm91cyBldmVudCBoYW5kbGVyXG4gKiAgICAgdXNlU3luY0hhbmRsZXIsXG4gKiAgICAgLy8gVHJ1ZSB3aGlsZSB0aGUgaGFuZGxlciBpcyBydW5uaW5nXG4gKiAgICAgcGVuZGluZyxcbiAqICAgICAvLyBUaGUgZXJyb3IgdGhyb3duLCBpZiBhbnlcbiAqICAgICBlcnJvcixcbiAqICAgICAvLyBTaG93IHRoaXMgdmFsdWUgd2hpbGUgdGhlIG9wZXJhdGlvbidzIHBlbmRpbmdcbiAqICAgICBjdXJyZW50Q2FwdHVyZSxcbiAqICAgICAvLyBBbmQgb3RoZXJzLCBzZWUgYFVzZUFzeW5jSGFuZGxlclJldHVyblR5cGVgXG4gKiAgICAgLi4ucmVzdFxuICogfSA9IHVzZUFzeW5jSGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PigpKHtcbiAqICAgICAvLyBQYXNzIGluIHRoZSBjYXB0dXJlIGZ1bmN0aW9uIHRoYXQgc2F2ZXMgZXZlbnQgZGF0YVxuICogICAgIC8vIGZyb20gYmVpbmcgc3RhbGUuICBOb3RlIHRoYXQgdGhlIGFzeW5jIGV2ZW50IGhhbmRsZXJcbiAqICAgICAvLyBpc24ndCBwYXNzZWQgaGVyZSwgaXQncyBwYXNzZWQgdG8gYHVzZVN5bmNIYW5kbGVyYCBhYm92ZS5cbiAqICAgICBjYXB0dXJlOiBlID0+IHtcbiAqICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICpcbiAqICAgICAgICAgLy8gU2F2ZSB0aGlzIHZhbHVlIHNvIHRoYXQgaXQncyBuZXZlciBzdGFsZVxuICogICAgICAgICByZXR1cm4gZS5jdXJyZW50VGFyZ2V0LnZhbHVlQXNOdW1iZXI7XG4gKiAgICAgfVxuICogfSk7XG4gKlxuICogY29uc3Qgb25JbnB1dCA9IHVzZVN5bmNIYW5kbGVyKHNvbWVBc3luY0Z1bmN0aW9uKTtcbiAqIC8vIE9SIHRoZSBmb2xsb3dpbmcsIGlmIHlvdSB3YW50IHRoZSBpbnB1dCBlbnRpcmVseSBkaXNhYmxlZCB3aGlsZSBwZW5kaW5nOlxuICogY29uc3Qgb25JbnB1dCA9IHVzZVN5bmNIYW5kbGVyKHBlbmRpbmc/IG51bGwgOiBzb21lQXN5bmNGdW5jdGlvbik7XG4gKiBgYGBcbiAqXG4gKiBUaGUgaGFuZGxlciBpcyBhdXRvbWF0aWNhbGx5IHRocm90dGxlZCB0byBvbmx5IHJ1biBvbmUgYXQgYSB0aW1lLlxuICogSWYgdGhlIGhhbmRsZXIgaXMgY2FsbGVkLCBhbmQgdGhlbiBiZWZvcmUgaXQgZmluaXNoZXMsIGlzIGNhbGxlZCBhZ2FpbixcbiAqIGl0IHdpbGwgYmUgcHV0IG9uIGhvbGQgdW50aWwgdGhlIGN1cnJlbnQgb25lIGZpbmlzaGVzLCBhdCB3aGljaCBwb2ludFxuICogdGhlIHNlY29uZCBvbmUgd2lsbCBydW4uICBJZiB0aGUgaGFuZGxlciBpcyBjYWxsZWQgYSB0aGlyZCB0aW1lIGJlZm9yZVxuICogdGhlIGZpcnN0IGhhcyBmaW5pc2hlZCwgaXQgd2lsbCAqcmVwbGFjZSogdGhlIHNlY29uZCwgc28gb25seSB0aGUgbW9zdFxuICogcmVjZW50bHkgY2FsbGVkIGl0ZXJhdGlvbiBvZiB0aGUgaGFuZGxlciB3aWxsIHJ1bi5cbiAqXG4gKlxuICogWW91IG1heSBvcHRpb25hbGx5ICphbHNvKiBzcGVjaWZ5IGEgZGVib3VuY2UgcGFyYW1ldGVyIHRoYXQgd2FpdHMgdW50aWwgdGhlXG4gKiBzeW5jcm9ub3VzIGhhbmRsZXIgaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgdGhlIHNwZWNpZmllZCBudW1iZXIgb2ZcbiAqIG1pbGxpc2Vjb25kcywgYXQgd2hpY2ggcG9pbnQgd2UgKmFjdHVhbGx5KiBydW4gdGhlIGFzeW5jcm9ub3VzIGhhbmRsZXJcbiAqIGFjY29yZGluZyB0byB0aGUgbG9naWMgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gVGhpcyBpcyBpblxuICogKmFkZGl0aW9uKiB0byB0aHJvdHRsaW5nIHRoZSBoYW5kbGVyLCBhbmQgZG9lcyBub3QgcmVwbGFjZSB0aGF0IGJlaGF2aW9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQXN5bmNIYW5kbGVyKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoeyBjYXB0dXJlLCBkZWJvdW5jZSB9KSB7XG4gICAgICAgIGNvbnN0IHsgY2FsbENvdW50LCBjdXJyZW50VHlwZSwgZXJyb3IsIGZsdXNoRGVib3VuY2VkUHJvbWlzZSwgdXNlU3luY0hhbmRsZXIsIGhhc0Vycm9yLCBwZW5kaW5nLCByZWplY3RDb3VudCwgcmVzb2x2ZUNvdW50LCBzZXR0bGVDb3VudCwgcHJvbWlzZSB9ID0gdXNlQXN5bmMoeyBkZWJvdW5jZSB9KTtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gXCJub3RoaW5nIGNhcHR1cmVkIHlldFwiIGFuZCBcImB1bmRlZmluZWRgIHdhcyBjYXB0dXJlZFwiXG4gICAgICAgIGNvbnN0IFtjdXJyZW50Q2FwdHVyZSwgc2V0Q3VycmVudENhcHR1cmUsIGdldEN1cnJlbnRDYXB0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFtoYXNDYXB0dXJlLCBzZXRIYXNDYXB0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgbGV0IHJldCA9IHtcbiAgICAgICAgICAgIHVzZVN5bmNIYW5kbGVyOiB1c2VTeW5jSGFuZGxlcldpdGhDYXB0dXJlLFxuICAgICAgICAgICAgZ2V0Q3VycmVudENhcHR1cmUsXG4gICAgICAgICAgICBjYWxsQ291bnQsXG4gICAgICAgICAgICBjdXJyZW50Q2FwdHVyZSxcbiAgICAgICAgICAgIGhhc0NhcHR1cmUsXG4gICAgICAgICAgICBwZW5kaW5nOiAocHJvbWlzZSAhPSBudWxsKSxcbiAgICAgICAgICAgIGhhc0Vycm9yLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgY3VycmVudFR5cGUsXG4gICAgICAgICAgICBmbHVzaERlYm91bmNlZFByb21pc2UsXG4gICAgICAgICAgICByZXNvbHZlQ291bnQsXG4gICAgICAgICAgICByZWplY3RDb3VudCxcbiAgICAgICAgICAgIHNldHRsZUNvdW50OiByZWplY3RDb3VudCArIHJlc29sdmVDb3VudFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICBmdW5jdGlvbiB1c2VTeW5jSGFuZGxlcldpdGhDYXB0dXJlKGFzeW5jSGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3Qgc3luY0hhbmRsZXJXcmFwcGVyID0gdXNlU3luY0hhbmRsZXIoYXN5bmNIYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHN5bmNIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soZnVuY3Rpb24gc3luY0hhbmRsZXIoZSkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbW9zdCBzaWduaWZpY2FudCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBldmVudCBhdCB0aGlzIHRpbWUsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwcm9taXNlIGNvdWxkIGFjdHVhbGx5IGJlIGNhbGxlZCBtdWNoIGxhdGVyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgZWxlbWVudCdzIHZhbHVlIChldGMuKSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBsZXQgY2FwdHVyZWQgPSBjYXB0dXJlKGUpO1xuICAgICAgICAgICAgICAgIGlmIChzeW5jSGFuZGxlcldyYXBwZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDYXB0dXJlKGNhcHR1cmVkKTtcbiAgICAgICAgICAgICAgICBzZXRIYXNDYXB0dXJlKHRydWUpO1xuICAgICAgICAgICAgICAgIHN5bmNIYW5kbGVyV3JhcHBlcihjYXB0dXJlZCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzeW5jSGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYXN5bmMtaGFuZGxlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiB9IGZyb20gXCIuL3VzZS1sb2dpY2FsLWRpcmVjdGlvblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XG4vKipcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxuICogdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdGhlIGFycm93IGtleXMuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpbmVhck5hdmlnYXRpb24oeyBpbmRleCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9QcmV2LCBtYW5hZ2VkQ2hpbGRyZW4sIG5hdmlnYXRpb25EaXJlY3Rpb24sIGRpc2FibGVBcnJvd0tleXMsIGRpc2FibGVIb21lRW5kS2V5cyB9KSB7XG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHRhYmJhYmxlIGluZGV4IG5ldmVyIGVzY2FwZXMgdGhlIGJvdW5kcyBvZiBhbGwgYXZhaWxhYmxlIGNoaWxkcmVuXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZENvdW50ID4gMCAmJiBpbmRleCA+PSBjaGlsZENvdW50KSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtpbmRleCwgY2hpbGRDb3VudCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdF0pO1xuICAgIC8vIFRoZXNlIGFsbG93IHVzIHRvIG1hbmlwdWxhdGUgd2hhdCBvdXIgY3VycmVudCB0YWJiYWJsZSBjaGlsZCBpcy5cbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7IHNldEluZGV4KGluZGV4IDwgMCA/IChtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICsgaW5kZXgpIDogaW5kZXgpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KChpOiBudW1iZXIgfCBudWxsKSA9PiBpID09PSBudWxsPyBudWxsISA6IGkgPj0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDE/IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxIDogKytpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpIDwgMD8gMCA6IC0taSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgwKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9FbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgtMSk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTsqL1xuICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZGV4KTtcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oe30pO1xuICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5mbyA9IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcbiAgICAgICAgbGV0IGFsbG93c0lubGluZU5hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImlubGluZVwiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlTG9naWNhbERpcmVjdGlvblByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgcHJvcHMpKTsgfSwgW10pLFxuICAgIH07XG59XG4vKipcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAqXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dCwgc2V0SW5kZXggfSkge1xuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXG4gICAgLy8gTmV4dCwga2VlcCBhIG1hcHBpbmcgb2YgdHlwZWFoZWFkIHZhbHVlcyB0byBpbmRpY2VzIGZvciBmYXN0ZXIgc2VhcmNoaW5nLlxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlVGltZW91dCh7IHRpbWVvdXQ6IHR5cGVhaGVhZFRpbWVvdXQgPz8gMTAwMCwgY2FsbGJhY2s6ICgpID0+IHsgc2V0Q3VycmVudFR5cGVhaGVhZChudWxsKTsgc2V0SW52YWxpZFR5cGVhaGVhZChudWxsKTsgfSwgdHJpZ2dlckluZGV4OiBjdXJyZW50VHlwZWFoZWFkIH0pO1xuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBIYW5kbGUgdHlwZWFoZWFkIGZvciBpbnB1dCBtZXRob2QgZWRpdG9ycyBhcyB3ZWxsXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxuICAgIGNvbnN0IFtpbWVBY3RpdmUsIHNldEltZUFjdGl2ZSwgZ2V0SW1lQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXG4gICAgLy8gKGJ1dCB3aXRoaW4gdGhlIHNhbWUgdGFzaywgd2hpY2gsIFRPRE8sIGNvdWxkIGJlIGJyb3dzZXItZGVwZW5kZW50KSxcbiAgICAvLyB3ZSBjYW4gdXNlIHRoaXMgdG8ga2VlcCB0cmFjayBvZiB3aGljaCBldmVudCB3ZSdyZSBsaXN0ZW5pbmcgZm9yIG9uIHRoZSBmaXJzdCBrZXlkb3duLlxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG5leHRUeXBlYWhlYWRDaGFyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihudWxsKTtcbiAgICAgICAgfVxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xuICAgIGNvbnN0IGNvbXBhcmF0b3JTaGFyZWQgPSB1c2VTdGFibGVDYWxsYmFjaygoc2FmZUxocywgc2FmZVJocykgPT4ge1xuICAgICAgICBsZXQgY29tcGFyZTtcbiAgICAgICAgLy8gRm9yIHRoZSBwdXJwb3NlcyBvZiB0eXBlYWhlYWQsIG9ubHkgY29tcGFyZSBhIHN0cmluZyBvZiB0aGUgc2FtZSBzaXplIGFzIG91ciBjdXJyZW50bHkgdHlwZWQgc3RyaW5nLlxuICAgICAgICAvLyBCeSBub3JtYWxpemluZyB0aGVtIGZpcnN0LCB3ZSBlbnN1cmUgdGhpcyBieXRlLWJ5LWJ5dGUgaGFuZGxpbmcgb2YgcmF3IGNoYXJhY3RlciBkYXRhIHdvcmtzIG91dCBva2F5LlxuICAgICAgICBzYWZlTGhzID0gc2FmZUxocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgIHNhZmVSaHMgPSBzYWZlUmhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcbiAgICAgICAgaWYgKGNvbGxhdG9yKVxuICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XG4gICAgICAgIHJldHVybiBjb21wYXJlO1xuICAgIH0pO1xuICAgIGNvbnN0IGluc2VydGluZ0NvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBhcmU7XG4gICAgICAgIGlmICh0eXBlb2YgbGhzID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaHMudGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmF0b3JTaGFyZWQobGhzLCByaHMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcbiAgICB9KTtcbiAgICBjb25zdCB0eXBlYWhlYWRDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIER1cmluZyB0eXBlYWhlYWQsIGFsbCBzdHJpbmdzIGxvbmdlciB0aGFuIG91cnMgc2hvdWxkIGJlIHRydW5jYXRlZFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGV5J3JlIGFsbCBjb25zaWRlcmVkIGVxdWFsbHkgYnkgdGhhdCBwb2ludC5cbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQuc3Vic3RyaW5nKDAsIGxocy5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xuICAgIH0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKGUpID0+IHsgc2V0SW1lQWN0aXZlKHRydWUpOyB9O1xuICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XG4gICAgICAgICAgICBzZXRJbWVBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1lQWN0aXZlID0gZ2V0SW1lQWN0aXZlKCk7XG4gICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XG4gICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdheSB0aGF0IGRvZXNuJ3Qgc3BsaXQgVVRGLTE2IHN1cnJvZ2F0ZXMuXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGtleSBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSB0eXBlZCBjaGFyYWN0ZXIgT1IgdGhlIFwibmFtZWQga2V5IGF0dHJpYnV0ZVwiIG9mIHRoZSBrZXkgcHJlc3NlZC5cbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXG4gICAgICAgICAgICAvLyBUaHVzLCBhbnkgb25lLWNoYXJhY3RlciBvciBub24tQVNDSUkgdmFsdWUgZm9yIGBrZXlgIGlzICphbG1vc3QgY2VydGFpbmx5KiBhIHR5cGVkIGNoYXJhY3Rlci5cbiAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiIFwiICYmIChnZXRDdXJyZW50VHlwZWFoZWFkKCkgPz8gXCJcIikudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgIC8vIChTcGVjaWZpY2FsbHksIGxldCB0aGUgZXZlbnQgY29udGludWUgcHJvcGFnYXRpb24gaW4gdGhpcyBjYXNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBiZWZvcmUgdXNlTGF5b3V0RWZmZWN0IGlzIGNhbGxlZFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0sIHByb3BzKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCB0eXBlYWhlYWRDb21wYXJhdG9yKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRUeXBlYWhlYWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCByb3VnaGx5IGlzbid0IGdvb2QgZW5vdWdoIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXG5cbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCBpZiB5b3UncmUgYWxyZWFkeSBkb2luZyB0eXBlYWhlYWQgb24gYW4gdW5zb3J0ZWQgbGlzdCwgbGlrZSwganVtcGluZXNzIGNhbid0IGJlIGF2b2lkZWQuXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxuXG4gICAgICAgICAgICAgICAgICBCYXNpY2FsbHkgd2hhdCB0aGlzIGRvZXM6IFN0YXJ0aW5nIGZyb20gd2hlcmUgd2UgZm91bmQgb3Vyc2VsdmVzIGFmdGVyIG91ciBiaW5hcnkgc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgIChhbmQgYWxzbyB0aGUgbG93ZXN0IGB1bnNvcnRlZEluZGV4YCB5YWRkYSB5YWRkYSBleGNlcHQgdGhhdCBpdCBjb21lcyBhZnRlciB1cykuXG5cbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hlcyBhcmUsIHRoYW5rcyB0byBwaWdlb25ob2xlIHByaW5jaXBhbCwgZXZlbnR1YWxseSBndWFyYW50ZWVkIHRvIGJlY29tZVxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cbiAgICAgICAgICAgICAgICAgIHRoZSByb2FkLiBNYXliZSBvbmUgb3IgdHdvIGNoYXJhY3RlcnMgd291bGQgYmUgZ29vZCBlbm91Z2ggdGhvdWdoLlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleE5leHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCAmJiB0eXBlYWhlYWRDb21wYXJhdG9yKGN1cnJlbnRUeXBlYWhlYWQsIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBhbGwgaW5kZXggdmFsdWVzIHNob3VsZCBiZSB1bmlxdWUsIHRoZSByZXR1cm5lZCBzb3J0ZWRJbmRleFxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGluc2VydGluZ0NvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4IDwgMCB8fCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbc29ydGVkSW5kZXhdLnRleHQgPT0gdGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBzaG91bGQgYWx3YXlzIGZpbmQgb3Vyc2VsdmVzIGJlY2F1c2UgdGhlcmUgc2hvdWxkIGJlIG5vIGR1cGxpY2F0ZSB2YWx1ZXMgaWYgZWFjaCBpbmRleCBpcyB1bmlxdWUuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGluc2VydGluZ0NvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RleHRdKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICB9O1xufVxuLyoqXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXG4gKlxuICogSXQncyB1c2VkIGhlcmUgdG8gcXVpY2tseSBmaW5kIGEgZ29vZCBzcG90IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3Igb3VyIG5leHQgdHlwZWFoZWFkIGNhbmRpZGF0ZS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyZXMgYHdhbnRlZGAgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbiBgYXJyYXlgXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcbiAgICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xuICAgICAgICB2YXIgY29tcGFyaXNvblJlc3VsdCA9IGNvbXBhcmF0b3Iod2FudGVkLCBhcnJheVt0ZXN0SW5kZXhdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cbiAqXG4gKiBUaGlzIGhvb2sgaXMgc2xpZ2h0bHkgbW9yZSBjb21wbGljYXRlZCBpbiB0aGF0IGl0IHJldHVybnMgYm90aCBhXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxuICogdG8gdXNlOiBgdXNlTWFuYWdlZENoaWxkYC4gIEl0J3Mgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBqdXN0XG4gKiB0b3NzIGl0IGludG8gYSBgQ29udGV4dGAgc28gdGhlIGNoaWxkcmVuIGNhbiBoYXZlIGFjY2VzcyB0byBpdC5cbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXG4gKiBpdCB3aXRoIGFueSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24sIGJ1dCBkb2Vzbid0IGRvIGFueXRoaW5nIGVsc2VcbiAqIHVudGlsIGl0IHVubW91bnRzIGFuZCByZXRyYWN0cyB0aGF0IGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgc2V0VG90YWxDaGlsZHJlblVub3VudGVkLCBnZXRUb3RhbENoaWxkcmVuVW5vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkID0gdG90YWxDaGlsZHJlbk1vdW50ZWQgLSB0b3RhbENoaWxkcmVuVW5vdW50ZWQ7XG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xuICAgIGNvbnN0IG1vdW50ZWRDaGlsZHJlbiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgbW91bnRPcmRlciA9IHVzZVJlZihuZXcgTWFwKCkpO1xuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBkZWxldGVkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIC8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiBpbmRpY2VzIHRoYXQgaGF2ZSBcIm92ZXItbW91bnRlZFwiIGFuZCBieSBob3cgbXVjaC5cbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XG4gICAgLy8gXCJvdmVybW91bnRzXCIgb3ZlciBhbm90aGVyIHdoaWNoIHRoZW4sIGNvcnJlY3RseSwgc3dpdGNoZXMgKml0c2VsZiogdG8gc29tZXRoaW5nIGVsc2UuXG4gICAgLy8gSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGQgb25seSBoYXBwZW4gd2hlbiBjb21wb25lbnRzIGFyZSBzd2FwcGluZyBiZXR3ZWVuIGluZGljZXMuXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxuICAgIC8vIGl0J3Mgb2theSB0byBhY3R1YWxseSBydW4gdGhlIHVubW91bnQgY29kZS5cbiAgICAvLyBcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcbiAgICAvLyBcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBjaGlsZCdzIGluZGV4IVwiIGFzc2VydGlvbi5cbiAgICAvLyBOYW1lbHksIGlzIHRoaXMgbWFwIGFsbCAwcyB3aGVuIHRoZSBwYXJlbnQgZWxlbWVudCByZS1yZW5kZXJzPyBcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XG4gICAgY29uc3Qgb3Zlcm1vdW50Q291bnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBnZXRNb3VudEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7IHJldHVybiBtb3VudE9yZGVyLmN1cnJlbnQuZ2V0KGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmFkZChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm8uaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFttYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pIH0pO1xuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWQoKTtcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcbiAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKHQgPT4gKyt0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbaW5mby5pbmRleF0pO1xuICAgICAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlIGdlbmVyYWxseS5cbiAgICAgICAgLy8gKkRvbid0IHJlLXJlbmRlciosIG90aGVyd2lzZSB3ZSdkIGJlIHN0dWNrIGluIGFuXG4gICAgICAgIC8vIGluZmluaXRlIGxvb3AgZXZlcnkgdGltZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gaXMgcGFzc2VkLlxuICAgICAgICAvLyBJdCBjb21lcyBpbiBmcm9tIHRoZSBwcm9wcyBzbyB0aGUgY2hpbGQgd2FzIGFscmVhZHkgdXBkYXRlZCBieSBpdCAtLVxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgdG8gcmUtcmVuZGVyIGV2ZXJ5IHNpbmdsZSBjaGlsZCBhbnkgdGltZVxuICAgICAgICAvLyBcIm9uQ2xpY2tcIiB1cGRhdGVzIG9yIHdoYXRldmVyLiAgVGhlIHJlbGV2YW50IGNoaWxkIGFscmVhZHkga25vd3MsXG4gICAgICAgIC8vIGFuZCB0aGF0J3Mgd2hhdCBtYXR0ZXJzLlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xuICAgICAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCgpXSk7XG4gICAgICAgIHJldHVybiB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTWFuYWdlZENoaWxkLFxuICAgICAgICBjaGlsZENvdW50OiBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQsXG4gICAgICAgIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZENoaWxkcmVuLmN1cnJlbnQsXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQ6IGluZGljZXNCeUVsZW1lbnQuY3VycmVudCxcbiAgICAgICAgdG90YWxDaGlsZHJlbk1vdW50ZWQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZCxcbiAgICAgICAgZ2V0TW91bnRJbmRleCxcbiAgICAgICAgZGVsZXRlZEluZGljZXM6IGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnRcbiAgICB9O1xufVxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxldHRpbmcgY2hpbGRyZW4ga25vdyB3aGVuIHRoZXkgYXJlIG9yIGFyZSBub3QgdGhlXG4gKiBjdXJyZW50IHNlbGVjdGVkL2V4cGFuZGVkL2ZvY3VzZWQvd2hhdGV2ZXIgY2hpbGQuXG4gKlxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIHdoZW4gY2hpbGRyZW4gYXJlIG1vdW50ZWQgJiB1bm1vdW50ZWQgYW5kIHN1Y2guXG4gKlxuICogV2hpbGUgaXQgd2lsbCBiZSBjYWxsZWQgb25jZSBmb3IgZXZlcnkgY2hpbGQgb24gbW91bnQsIGFmdGVyIHRoYXQgc2V0RmxhZ1xuICogaXMgZ3VhcmFudGVlZCB0byBvbmx5IGJlIGNhbGxlZCBvbmNlIG9uIGFjdGl2YXRpb24gYW5kIG9uY2Ugb24gZGVhY3RpdmF0aW9uLFxuICogc28gaXQncyBnZW5lcmFsbHkgc2FmZSB0byBwdXQgc2lkZSBlZmZlY3RzIGluc2lkZSBpZiBuZWNlc3NhcnkuXG4gKiBJdCdzIGFsc28gc2FmZSB0byBtYWtlIGl0IG5vbi1zdGFibGUuXG4gKlxuICogQHBhcmFtIGFjdGl2YXRlZEluZGV4IFdoYXQgaW5kZXggdGhlIGN1cnJlbnQgc2VsZWN0ZWQgKGV0Yy4pIGNoaWxkIGlzXG4gKiBAcGFyYW0gbGVuZ3RoIEhvdyBtYW55IGNoaWxkcmVuIGV4aXN0IChhcyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKVxuICogQHBhcmFtIHNldEZsYWcgQSBmdW5jdGlvbiB0aGF0IHByb2JhYmx5IGxvb2tzIGxpa2UgKGksIGZsYWcpID0+IG1hbmFnZWRDaGlsZHJlbltpXS5zZXRBY3RpdmUoZmxhZylcbiAqIEBwYXJhbSB1c2VFZmZlY3QgV2hpY2ggdmVyc2lvbiBvZiB1c2VFZmZlY3QgdG8gdXNlLiBEZWZhdWx0IGlzIGB1c2VMYXlvdXRFZmZlY3RgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXgsIGNsb3Nlc3RGaXQsIG1hbmFnZWRDaGlsZHJlbiwgc2V0Q2hpbGRGbGFnLCBnZXRDaGlsZEZsYWcsIHVzZUVmZmVjdCB9KSB7XG4gICAgdXNlRWZmZWN0ID8/PSB1c2VMYXlvdXRFZmZlY3Q7XG4gICAgaWYgKGNsb3Nlc3RGaXQpXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBhY3RpdmF0ZWRJbmRleCA9PSBcIm51bWJlclwiIHx8IGFjdGl2YXRlZEluZGV4ID09IG51bGwpO1xuICAgIC8vIFdoZW5ldmVyIHdlIHJlLXJlbmRlciwgbWFrZSBzdXJlIHRoYXQgYW55IGNoaWxkcmVuIHRoYXQgaGF2ZSBtb3VudGVkXG4gICAgLy8gaGF2ZSB0aGVpciBmbGFncyBwcm9wZXJseSBzZXQuICBXZSBrbm93IGl0J3MgdW5zZXQgaWYgaXQgd2FzIG51bGwsXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IHNldCBpdCB0byB0cnVlIG9yIGZhbHNlLlxuICAgIC8vXG4gICAgLy8gQW5kLCBJIG1lYW4sIGFzIGxvbmcgYXMgd2UncmUgYWxyZWFkeSBpdGVyYXRpbmcgdGhyb3VnaCBldmVyeSBjaGlsZFxuICAgIC8vIG9uIGV2ZXJ5IHJlbmRlciB0byBjaGVjayBmb3IgbmV3bHkgbW91bnRlZCBjaGlsZHJlbiwgbWlnaHQgYXMgd2VsbFxuICAgIC8vIGp1c3QgaGFuZGxlIGNoYW5nZWQgaW4gdGhlIGFjdGl2YXRlZEluZGV4IGhlcmUgdG9vLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFdlIGhhdmUgbGltaXRlZCBpbmZvcm1hdGlvbiBhYm91dCB3aGVuIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzXG4gICAgICAgIC8vIGFuZCBzbyB3ZSBkb24ndCBrbm93IHdoZXJlIHRvIGxvb2sgZm9yIGFueSBudWxsIGVudHJpZXMgdGhhdCBuZWVkIGNoYW5naW5nLlxuICAgICAgICAvLyBXZSBrbm93IHdoZW4gYWN0aXZhdGVkSW5kZXggY2hhbmdlcyBhbmQgd2hhdCBpdCB3YXMsIGJ1dCBub3QgbXVjaCBlbHNlLlxuICAgICAgICAvLyBMb29waW5nIG92ZXIgZXZlcnkgY2hpbGQgKndvcmtzKiwgYW5kIGl0J3Mgbm90IGFuIGV4cGVuc2l2ZSBsb29wIGJ5IGFueSBtZWFucyxcbiAgICAgICAgLy8gYnV0LCBsaWtlLCBldWdoLlxuICAgICAgICAvLyBBbHNvLCBiZWZvcmUgd2UgZG8gYW55dGhpbmcsIHNlZSBpZiB3ZSBuZWVkIHRvIFwiY29ycmVjdFwiIGFjdGl2YXRlZEluZGV4LlxuICAgICAgICAvLyBJdCBjb3VsZCBiZSBwb2ludGluZyB0byBhIGNoaWxkIHRoYXQgZG9lc24ndCBleGlzdCwgYW5kIGlmIGNsb3Nlc3RGaXQgaXMgZ2l2ZW4sXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRqdXN0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGEgdmFsaWQgY2hpbGQuXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiAmJiBBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikgJiYgbWFuYWdlZENoaWxkcmVuW2FjdGl2YXRlZEluZGV4XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBPaCBkZWFyLiBBcmUgd2UgYWN0aXZlbHkgY29ycmVjdGluZyB0aGlzP1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXQpIHtcbiAgICAgICAgICAgICAgICAvLyBPaCBkZWFyLlxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCB1cCBhbmQgZG93biB0aGUgbGlzdCBvZiBjaGlsZHJlbiBmb3IgYW55IHRoYXQgYWN0dWFsbHkgZXhpc3QuXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaEhpZ2ggPSBhY3RpdmF0ZWRJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaExvdyA9IGFjdGl2YXRlZEluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddID09IG51bGwpIHx8IChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytzZWFyY2hIaWdoO1xuICAgICAgICAgICAgICAgICAgICAtLXNlYXJjaExvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkSW5kZXggPSBzZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaEhpZ2ggPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hIaWdoXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZG9uZSB0aGF0LCBpZiBhbnkgdmFsaWQgY2hpbGRyZW4gZXhpc3QsIHdlJ3ZlIHJlc2V0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGl0IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgLy8gTm93IHdlJ2xsIGZhbGwgdGhyb3VnaCB0byB0aGUgZm9yIGxvb3Agc2V0IGFuZCB1bnNldCBvdXIgZmxhZ3MgYmFzZWQgb24gdGhpcyBcImNvcnJlY3RlZFwiIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY29ycmVjdCBpdCBvciBzYXZlIGl0IGFueXdoZXJlIGJlY2F1c2Ugd2UnZCB2ZXJ5IG11Y2ggbGlrZSB0byByZXR1cm4gdG8gaXRcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hpbGQgcmVtb3VudHMgaXRzZWxmLlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNob3VsZEJlU2V0ID0gKGkgPT0gYWN0aXZhdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRDaGlsZEZsYWcoaSkgIT0gc2hvdWxkQmVTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRGbGFnKGksIHNob3VsZEJlU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhtYW5hZ2VkQ2hpbGRyZW4pLmZvckVhY2goKFtpLCBpbmZvXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyIH0gZnJvbSBcIi4vdXNlLWNoaWxkLW1hbmFnZXJcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEltcGxlbWVudHMgYSByb3ZpbmcgdGFiaW5kZXggc3lzdGVtIHdoZXJlIG9ubHkgb25lIFwiZm9jdXNhYmxlXCJcbiAqIGNvbXBvbmVudCBpbiBhIHNldCBpcyBhYmxlIHRvIHJlY2VpdmUgYSB0YWIgZm9jdXMuICpXaGljaCpcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xuICogcmVjb21tZW5kZWQgdG8gb2ZmbG9hZCB0aGF0IGxvZ2ljIHRoZW4gdG8gYW5vdGhlciBob29rLCBsaWtlXG4gKiBgdXNlTGluZWFyTmF2aWdhdGlvbmAsIHdoaWNoIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGVcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxuICogbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHR5cGVhaGVhZCwgb3JcbiAqIGB1c2VMaXN0TmF2aWdhdGlvbmAgaWYgeW91IGp1c3Qgd2FudCBldmVyeXRoaW5nIGJ1bmRsZWQgdG9nZXRoZXIuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBjaGlsZCBob29rIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkXG4gKiBieSBldmVyeSBjaGlsZCB0aGF0IHVzZXMgdGhpcyByb3ZpbmcgdGFiaW5kZXggbG9naWMuICBUaGVcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXG4gKiBvbiB0aGUgY2hpbGQncyBlbGVtZW50LCBhcyB3ZWxsIGFzIGFueSBvdGhlciBlbGVtZW50cyB5b3UnZCBsaWtlXG4gKiB0byBiZSBleHBsaWNpdGx5IG1hZGUgdW50YWJiYWJsZSB0b28uXG4gKlxuICogYHNob3VsZEZvY3VzT25DaGFuZ2VgIHNob3VsZCByZXR1cm4gdHJ1ZSBpZiBmb2N1cyBpc1xuICogY29udGFpbmVkIHdpdGhpbiB3aGF0ZXZlciBlbGVtZW50IGNvbnRhaW5zIHRoZSByb3ZpbmcgdGFiIGluZGV4LlxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxuICogYGBgXG4gKiBjb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcbiAqIGNvbnN0IGZvY3VzT25DaGFuZ2UgPSAoZm9jdXNlZElubmVyICE9IGZhbHNlKTtcbiAqIGBgYFxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XG4gKiBhbnl0aGluZyBhYm91dCB0aGUgY29udGFpbmVyIGVsZW1lbnQsIG9ubHkgY2hpbGRyZW4gZWxlbWVudHMuXG4gKiBBbmQganVzdCBhcyB3ZWxsISBDaGlsZHJlbiBzaG91bGQgYmUgYWxsb3dlZCBhdCB0aGUgcm9vdCxcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleCh7IHNob3VsZEZvY3VzT25DaGFuZ2U6IGZvYywgdGFiYmFibGVJbmRleCB9KSB7XG4gICAgY29uc3QgZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSA9IHVzZVN0YWJsZUdldHRlcihmb2MpO1xuICAgIGNvbnN0IGdldFRhYmJhYmxlSW5kZXggPSB1c2VTdGFibGVHZXR0ZXIodGFiYmFibGVJbmRleCk7XG4gICAgY29uc3QgcHJldlRhYmJhYmxlID0gdXNlUmVmKC1JbmZpbml0eSk7XG4gICAgLy8gQ2FsbCB0aGUgaG9vayB0aGF0IGFsbG93cyB1cyB0byBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gd2hvIHByb3ZpZGUgaXRcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgY2hpbGRDb3VudCwgdXNlTWFuYWdlZENoaWxkLCBpbmRpY2VzQnlFbGVtZW50LCAuLi5yZXN0IH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcyxcbiAgICAvLyBub3RpZnkgdGhlIHByZXZpb3VzIGNoaWxkIHRoYXQgaXQncyBubyBsb25nZXIgdGFiYmFibGUsXG4gICAgLy8gYW5kIG5vdGlmeSB0aGUgbmV4dCBjaGlsZCB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdGFiYmVkIHRvLlxuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiB0YWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGNsb3Nlc3RGaXQ6IHRydWUsXG4gICAgICAgIHNldENoaWxkRmxhZzogKGluZGV4LCB0YWJiYWJsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2luZGV4XT8uc2V0VGFiYmFibGUodGFiYmFibGUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpbmRleCkgPT4gKG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LmdldFRhYmJhYmxlKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh0YWJiYWJsZUluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bdGFiYmFibGVJbmRleF0uc2V0VGFiYmFibGUodHJ1ZSk7XG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgW3JyYWZJbmRleCwgc2V0UnJhZkluZGV4XSA9IHVzZVN0YXRlKDEpO1xuICAgICAgICBjb25zdCByZXJlbmRlckFuZEZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRScmFmSW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XG4gICAgICAgIGNvbnN0IFt0YWJiYWJsZSwgc2V0VGFiYmFibGUsIGdldFRhYmJhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBsZXQgbmV3SW5mbyA9IHtcbiAgICAgICAgICAgIC4uLmluZm8sXG4gICAgICAgICAgICByZXJlbmRlckFuZEZvY3VzLFxuICAgICAgICAgICAgc2V0VGFiYmFibGU6IHVzZUNhbGxiYWNrKCh0YWJiYWJsZSkgPT4geyBzZXRUYWJiYWJsZSh0YWJiYWJsZSk7IH0sIFtdKSxcbiAgICAgICAgICAgIGdldFRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzT25DaGFuZ2UgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHJyYWZJbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXggfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgZm9jdXNDdXJyZW50OiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHdoYXRldmVyIHJlYXNvbiwgdGhlIHByZXZpb3VzbHkgdGFiYmFibGUgY2hpbGRcbiAgICAgICAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdGFiYmFibGUgd2l0aG91dCB1cyBrbm93aW5nIGFib3V0IGl0LlxuICAgICAgICAgICAgICAgIC8vIE1heWJlIGl0IHVubW91bnRlZD9cbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5LCB0cnkgdG8gZmluZCB0aGUgbmV3bHktc2VsZWN0ZWQgY2hpbGQuXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMDtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdPy5yZXJlbmRlckFuZEZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSksXG4gICAgICAgIC4uLnJlc3RcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJvdmluZy10YWJpbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKlxuICogVE9ETzogVGhpcyB0YWJsZSB3YXMgc2NyYXBwZWQgd2hlbiB0aGlzIHdhcyBjaGFuZ2VkIHRvIGp1c3QgYWNjZXB0IGEgY29sbGF0b3IgZGlyZWN0bHksXG4gKiBidXQgaXQncyBub3QgYmFkIGZvciBhIGNvbGxhdGlvbiBjcmFzaCBjb3Vyc2UgYW5kIEkgbWlnaHQgdXNlIGl0IGFnYWluLlxuICogRXZlbiBqdXN0IGFzIGEgXCJ0aGlzIGlzIHdoeSBpdCdzIGltcG9ydGFudCBhbmQgZ29vZCB0byB1c2UgdGhlc2UgdGhpbmdzXCIgdGhpbmcuXG4gKlxuICogfExhbmcufFRhcmdldHxVc2VyIGlucHV0fGBiYXNlYHxgYWNjZW50YHxgY2FzZWB8YHZhcmlhbnRgfFxuICogfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18XG4gKiB8RU58SGl8SGl84pyFfOKchXzinIV84pyFfFxuICogfEVOfEhpfO+8qO+9iXzinIV84pyFfOKchXzinYx8XG4gKiB8RU58SGl8aGl84pyFfOKchXzinYx84p2MfFxuICogfEVOfEhpfEjDr3zinIV84p2MfOKdjHzinYx8XG4gKiB8RU58SGl8QnllfOKdjHzinYx84p2MfOKdjHxcbiAqIHxEQXzDpXxhYXzinIV84pyFfOKchXzinYx8XG4gKiB8REF8w6V8QUF84pyFfOKchXzinYx84p2MfFxuICogfERBfMOlfEFhfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnzDpXxhYXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YUF84p2MfOKdjHzinYx84p2MfFxuICogfEVOfMOlfGF84pyFfOKchXzinYx84p2MfFxuICogfERBfMOlfGF84pyFfOKchXzinYx84p2MfFxuICogfEpQfO+qqnznnYB84pyFfOKchXzinIV84pyFfFxuICogfEpQfOOCq3zvvbZ84pyFfOKchXzinIV84pyFfFxuICogfEpQfOOCq3zjgYt84pyFfOKchXzinIV84p2MfFxuICogfEpQfOOCq3zjg7V84pyFfOKchXzinIV84p2MfFxuICogfEpQfOOCq3zji5V84pyFfOKchXzinYx84p2MfFxuICogfEpQfOOCq3zjgqx84pyFfOKdjHzinYx84p2MfFxuICogfEpQfOOCq3zlipt84p2MfOKdjHzinYx84p2MfFxuICogfFpIfOe0hXznuqJ84p2MfOKdjHzinYx84p2MfFxuICpcbiAqXG4gKiAoTm90ZSB0byBzZWxmOiBBdCBzb21lIHBvaW50LCB0aGlzIGZpbGUgd2lsbCBwcm9iYWJseSBiZSBub3JtYWxpemVkXG4gKiBieSBzb21lYm9keSBhbmQg76qqIHdpbGwgdHVybiBiYWNrIGludG8g552ALilcbiAqXG4gKi9cbmNvbnN0IGR1bW15ID0gbnVsbDtcbjtcbmZ1bmN0aW9uIGlkZW50aXR5KHQpIHsgcmV0dXJuIHQ7IH1cbi8qKlxuICogSW1wbGVtZW50cyBwcm9wZXIga2V5Ym9hcmQgbmF2aWdhdGlvbiBmb3IgY29tcG9uZW50cyBsaWtlIGxpc3Rib3hlcywgYnV0dG9uIGdyb3VwcywgbWVudXMsIGV0Yy5cbiAqXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXG4gKiBOYXZpZ2F0aW5nIGZvcndhcmRzL2JhY2t3YXJkcyBjYW4gYmUgZG9uZSB3aXRoIHRoZSBhcnJvdyBrZXlzLCBIb21lL0VuZCBrZXlzLCBvciBhbnkgYW55IHRleHQgZm9yIHR5cGVhaGVhZCB0byBmb2N1cyB0aGUgbmV4dCBpdGVtIHRoYXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgaW5pdGlhbEluZGV4LCBzaG91bGRGb2N1c09uQ2hhbmdlLCBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XG4gICAgaW5kZXhNYW5nbGVyID8/PSBpZGVudGl0eTtcbiAgICBpbmRleERlbWFuZ2xlciA/Pz0gaWRlbnRpdHk7XG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcik7XG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aHJlZSB0aGluZ3MgcmVsYXRlZCB0byB0aGUgY3VycmVudGx5IHRhYmJhYmxlIGVsZW1lbnQncyBpbmRleDpcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxuICAgIGNvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IGluaXRpYWxJbmRleCk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzQ3VycmVudCwgLi4ucmVzdCB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlLCB0YWJiYWJsZUluZGV4IH0pO1xuICAgIC8qY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGk6IG51bWJlciB8IG51bGwpID0+IHsgc2V0VGFiYmFibGVJbmRleChpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwpIHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyISgwKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIhKG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlciEoaW5kZXhEZW1hbmdsZXIhKGkgPz8gMCkgLSAxKSkgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlciEoaW5kZXhEZW1hbmdsZXIhKGkgPz8gMCkgKyAxKSkgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiovXG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGkpID0+IHtcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChpID09IG51bGwgPyBudWxsIDogdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgMCwgaSwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgMCwgMCwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleCh0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCAtMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoYyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgYyA/PyAwLCAoYyA/PyAwKSAtIDEsIC0xLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIGMgPz8gMCwgKGMgPz8gMCkgKyAxLCAxLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHNldEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4OiBnZXRUYWJiYWJsZUluZGV4LCBzZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dDogMTAwMCB9KTtcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpO1xuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wc10pO1xuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZChpbmZvKTtcbiAgICAgICAgLy9jb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoaW5mbyBhcyBJKTtcbiAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLCB0YWJiYWJsZSB9ID0gdXNlUm92aW5nVGFiSW5kZXhDaGlsZChpbmZvKTtcbiAgICAgICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKCgoeyBvbkNsaWNrOiByb3ZlVG9TZWxmLCBoaWRkZW46IGluZm8uaGlkZGVuIH0pKSksIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm92ZVRvU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpOyB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wczogdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIG5hdmlnYXRlVG9JbmRleF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdCxcbiAgICAgICAgbmF2aWdhdGVUb0xhc3QsXG4gICAgICAgIGZvY3VzQ3VycmVudCxcbiAgICAgICAgLi4ucmVzdFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDZWxscywgaW5pdGlhbCwgdGFyZ2V0LCBzZWFyY2hEaXJlY3Rpb24sIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIpIHtcbiAgICBmdW5jdGlvbiBoZWxwZXIoKSB7XG4gICAgICAgIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0ID49IDAgJiYgKG1hbmFnZWRDZWxsc1t0YXJnZXRdID09IG51bGwgfHwgISFtYW5hZ2VkQ2VsbHNbdGFyZ2V0XT8uaGlkZGVuKSlcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIodGFyZ2V0KSAtIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA8IDAgPyBpbml0aWFsIDogdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlYXJjaERpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA8IG1hbmFnZWRDZWxscy5sZW5ndGggJiYgbWFuYWdlZENlbGxzW3RhcmdldF0gPT0gbnVsbCB8fCAhIW1hbmFnZWRDZWxsc1t0YXJnZXRdPy5oaWRkZW4pXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKHRhcmdldCkgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPj0gbWFuYWdlZENlbGxzLmxlbmd0aCA/IGluaXRpYWwgOiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGhlbHBlcigpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0LW5hdmlnYXRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCwgd2hlbiBjYWxsZWQsIGZvcmNlIHRoZSBjb21wb25lbnRcbiAqIHRoYXQgdXNlcyB0aGlzIGhvb2sgdG8gcmUtcmVuZGVyIGl0c2VsZi5cbiAqXG4gKiBJdCdzIGEgYml0IHNtZWxseSwgc28gYmVzdCB0byB1c2Ugc3BhcmluZ2x5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gICAgY29uc3QgWywgc2V0XSA9IHVzZVN0YXRlKDApO1xuICAgIHJldHVybiB1c2VSZWYoKCkgPT4gc2V0KGkgPT4gKytpKSkuY3VycmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb3JjZS11cGRhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB0cnlOYXZpZ2F0ZVRvSW5kZXggfSBmcm9tIFwiLi91c2UtbGlzdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JjZVVwZGF0ZSB9IGZyb20gXCIuL3VzZS1mb3JjZS11cGRhdGVcIjtcbmltcG9ydCB7IHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24gfSBmcm9tIFwiLi91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VSb3ZpbmdUYWJJbmRleCB9IGZyb20gXCIuL3VzZS1yb3ZpbmctdGFiaW5kZXhcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlR3JpZE5hdmlnYXRpb24oeyBzaG91bGRGb2N1c09uQ2hhbmdlLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyIH0pIHtcbiAgICBpbmRleE1hbmdsZXIgPz89IGlkZW50aXR5O1xuICAgIGluZGV4RGVtYW5nbGVyID8/PSBpZGVudGl0eTtcbiAgICBjb25zdCBnZXRGb2N1c0NlbGxPblJvd0NoYW5nZSA9IHVzZVN0YWJsZUNhbGxiYWNrKHNob3VsZEZvY3VzT25DaGFuZ2UpO1xuICAgIC8vIEtlZXAgdHJhY2sgb2Ygb3VyIGN1cnJlbnRseSB0YWJiYWJsZSByb3cgYW5kIGNvbHVtbi5cbiAgICAvLyBUaGVzZSBhcmUgbWFuZ2xlZCwgYW5kIHNvIHJlbGF0aXZlIHRvIHRoZSBET00gb3JkZXIsIG5vdCBjb21wb25lbnQgb3JkZXIuXG4gICAgLy8gQW55IG9wZXJhdGlvbnMgZG9uZSBvbiB0aGVzZSBudW1iZXJzIG5lZWQgdG8gYmUgZGVtYW5nbGVkIGZpcnN0LFxuICAgIC8vIG90aGVyd2lzZSB0aGV5J2xsIGJlIGluY29ycmVjdC5cbiAgICBjb25zdCBbY3VycmVudFJvdywgc2V0Q3VycmVudFJvdzIsIGdldEN1cnJlbnRSb3ddID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRDb2x1bW4sIHNldEN1cnJlbnRDb2x1bW4yLCBnZXRDdXJyZW50Q29sdW1uXSA9IHVzZVN0YXRlKDApO1xuICAgIC8vIEZ1bmN0aW9ucyB1c2VkIGZvciBuYXZpZ2F0aW5nIHRvIGRpZmZlcmVudCByb3dzLlxuICAgIC8vIEVhY2ggcm93IGhhcyBpdHMgb3duIHVzZVJvdmluZ1RhYkluZGV4IC0tIGlmIGl0J3Mgbm90IHRoZSBcbiAgICAvLyBjdXJyZW50IHJvdywgdGhlbiBhbGwgb2YgaXRzIGNoaWxkcmVuIGFyZSBub24tdGFiYmFibGUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyB0YWJiYWJsZSwgd2l0aCB0aGUgdGFiYmFibGUgY2VsbCBiZWluZyBjdXJyZW50Q29sdW1uLlxuICAgIC8vIFRoaXMgaGFwcGVucyBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlc2UgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0Um93ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRDdXJyZW50Um93MihjID0+IHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkUm93cywgYyA/PyAwLCAwLCAxLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3RSb3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEN1cnJlbnRSb3cyKGMgPT4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRSb3dzLCBjID8/IDAsIG1hbmFnZWRSb3dzLmxlbmd0aCAtIDEsIC0xLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXZSb3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEN1cnJlbnRSb3cyKGMgPT4geyByZXR1cm4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRSb3dzLCBjID8/IDAsIGluZGV4TWFuZ2xlcihNYXRoLm1heCgwLCBpbmRleERlbWFuZ2xlcihjID8/IDApIC0gMSkpLCAtMSwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcik7IH0pOyB9LCBbaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcl0pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0Um93ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRDdXJyZW50Um93MihjID0+IHsgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkUm93cywgYyA/PyAwLCBpbmRleE1hbmdsZXIoTWF0aC5taW4oKG1hbmFnZWRSb3dzLmxlbmd0aCAtIDEpLCBpbmRleERlbWFuZ2xlcihjID8/IDApICsgMSkpLCAxLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKTsgfSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XG4gICAgLy8gVHJhY2sgY2hpbGQgcm93cyBhbmQgbWFuYWdlIGtleWJvYXJkIG5hdmlnYXRpb24gYW1vbmcgdGhlbS5cbiAgICBjb25zdCB7IGNoaWxkQ291bnQsIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFJvd3MsIGluZGljZXNCeUVsZW1lbnQ6IHJvd0luZGljZXNCeUVsZW1lbnQsIGdldE1vdW50SW5kZXg6IGdldFJvd01vdW50SW5kZXgsIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZFJvd3MsIHRvdGFsQ2hpbGRyZW5Nb3VudGVkOiB0b3RhbFJvd3NNb3VudGVkLCB0b3RhbENoaWxkcmVuVW5vdW50ZWQ6IHRvdGFsUm93c1VubW91bnRlZCwgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkUm93IH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wczogdXNlTGluZWFyTmF2aWdhdGlvblJvd1Byb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHtcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUm93cyxcbiAgICAgICAgaW5kZXg6IGluZGV4TWFuZ2xlcihnZXRDdXJyZW50Um93KCkgPz8gMCksXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdDogbmF2aWdhdGVUb0ZpcnN0Um93LFxuICAgICAgICBuYXZpZ2F0ZVRvTGFzdDogbmF2aWdhdGVUb0xhc3RSb3csXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0OiBuYXZpZ2F0ZVRvTmV4dFJvdyxcbiAgICAgICAgbmF2aWdhdGVUb1ByZXY6IG5hdmlnYXRlVG9QcmV2Um93LFxuICAgICAgICBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICAvLyBBY3R1YWxseSBoYW5kbGUgbm90aWZ5aW5nIHRoZSByZWxldmFudCByb3dzIHdoZW4gdGhleVxuICAgIC8vIGNoYW5nZSBmcm9tIHVudGFiYmFibGUgdG8gdGFiYmFibGUgb3IgdmljZS12ZXJzYS5cbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogY3VycmVudFJvdyxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUm93cyxcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaW5kZXgsIHRhYmJhYmxlKSA9PiB7IG1hbmFnZWRSb3dzW2luZGV4XT8uc2V0SXNUYWJiYWJsZVJvdyh0YWJiYWJsZSk7IH0sXG4gICAgICAgIGdldENoaWxkRmxhZzogKGluZGV4KSA9PiAobWFuYWdlZFJvd3NbaW5kZXhdPy5nZXRJc1RhYmJhYmxlUm93KCkgPz8gbnVsbCksXG4gICAgICAgIHVzZUVmZmVjdDogdXNlRWZmZWN0XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwsIGJ1dCBwcm92aWRlcyB0eXBlYWhlYWQgZm9yIGVhY2ggY29sdW1uIGluIHRoZSB0YWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCB1c2VHcmlkTmF2aWdhdGlvbkNvbHVtbiA9IHVzZUNhbGxiYWNrKCh7fSkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGdldEluZGV4OiBnZXRDdXJyZW50Um93LCBzZXRJbmRleDogc2V0Q3VycmVudFJvdzIgfSk7XG4gICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uQ29sdW1uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyBpbmRleDogcm93SW5kZXgsIHRleHQsIGhpZGRlbiB9KSA9PiB7XG4gICAgICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoeyBpbmRleDogcm93SW5kZXgsIHRleHQ6IGhpZGRlbiA/IG51bGwgOiB0ZXh0IH0pO1xuICAgICAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUdyaWROYXZpZ2F0aW9uQ29sdW1uQ2hpbGQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfTtcbiAgICB9LCBbXSk7XG4gICAgLy8gTGFzdCB0aGluZyBiZWZvcmUgd2UgcmV0dXJuIC0tIGhlcmUncyB0aGUgaG9vayBmb3IgaW5kaXZpZHVhbCByb3dzIGFuZCB0aGVpciBjZWxscy5cbiAgICBjb25zdCB1c2VHcmlkTmF2aWdhdGlvblJvdyA9IHVzZUNhbGxiYWNrKCh7IGluZGV4OiByb3dJbmRleCwgaGlkZGVuLCAuLi5pbmZvIH0pID0+IHtcbiAgICAgICAgLy8gV2hlbiB3ZSBjaGFuZ2UgdGhlIGN1cnJlbnQgY29sdW1uLCB3ZSBzZW5kIHRoYXQgaW5mb3JtYXRpb25cbiAgICAgICAgLy8gdG8gdGhlIHBhcmVudCB2aWEgc2V0U3RhdGUsIGJ1dCB0aGF0IGRvZXNuJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgLy8gZm9yIHVzLiAgVGhlIHBhcmVudCBkb2Vzbid0IGV2ZXIgbWFuYWdlIHJvd3MnIGNlbGxzIGZvciB0aGVtLlxuICAgICAgICAvLyBcbiAgICAgICAgLy8gU28gdG8gZ2V0IHVzIHRvIGFsc28gdXBkYXRlIGFsb25nc2lkZSB0aGUgcGFyZW50LFxuICAgICAgICAvLyB3ZSBqdXN0IHVzZSBmb3JjZVVwZGF0ZS5cbiAgICAgICAgLy8gV2UgY291bGQgYWxzbyBrZWVwIGEgY29weSBvZiwgbGlrZSwgXCJ3aGF0IHRoaXMgcm93IHRoaW5rc1xuICAgICAgICAvLyB0aGUgY3VycmVudCBjb2x1bW4gaXNcIiB0aGF0ICpzaG91bGQqIGFsd2F5cyBiZSBrZXB0IGluLVxuICAgICAgICAvLyBzeW5jIHdpdGggXCJnZXRDdXJyZW50Q29sdW1uKClcIiBhcyBhIHN0YXRlIHZhcmlhYmxlLFxuICAgICAgICAvLyBidXQgaXQgKmp1c3QqIGJlaW5nIHVzZWQgZm9yIHRoYXQgaXMgYXJndWFibHkgKm1vcmUqIGNvbmZ1c2luZy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQmFzaWNhbGx5LCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2x1bW5cbiAgICAgICAgLy8gXCJiZWxvbmdzXCIgdG8gKmJvdGgqIHRoaXMgcm93IGFuZCB0aGUgcGFyZW50LCBjb25jZXB0dWFsbHksXG4gICAgICAgIC8vIGJ1dCBmb3IgY2xlYW5saW5lc3MnIHNha2UsIGp1c3Qgb25lIG9mIHRoZW0gZ2V0cyBpdCxcbiAgICAgICAgLy8gYW5kIHRoZSBvdGhlciBpcyBtYW51YWxseSB1cGRhdGVkIHdoZW5ldmVyIGl0IGNoYW5nZXMuXG4gICAgICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgICAgICAgLy8gXCJTaG9ydGN1dFwiIGZvciBhbnkgZ2l2ZW4gcm93IHRvIGtub3cgdGhhdCBpdCBzaG91bGQgb3Igc2hvdWxkIG5vdFxuICAgICAgICAvLyBjb25zaWRlciBvbmUgb2YgaXRzIGNlbGxzIHRhYmJhYmxlLiAgQWxzbyB1c2VkIHRvIGRldGVybWluZVxuICAgICAgICAvLyBpZiBhIGNoYW5nZSB0byB0aGUgY3VycmVudCBzZWxlY3RlZCBjZWxsIHNob3VsZCBhbHNvXG4gICAgICAgIC8vIHRyaWdnZXIgZm9jdXNpbmcgdGhhdCBjZWxsLlxuICAgICAgICBjb25zdCBbaXNUYWJiYWJsZVJvdywgc2V0SXNUYWJiYWJsZVJvdywgZ2V0SXNUYWJiYWJsZVJvd10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgLy8gSWYgd2UncmUgbm90IHRoZSB0YWJiYWJsZSByb3csIHRoZW4gZm9yIHRoZSBwdXJwb3NlcyBvZiB0YWJJbmRleFxuICAgICAgICAvLyBjYWxjdWxhdGlvbnMsIHdlIGRvbid0IGhhdmUgYSB0YWJiYWJsZSBjaGlsZCBjZWxsLlxuICAgICAgICBsZXQgY3VycmVudENvbHVtbiA9IGlzVGFiYmFibGVSb3cgPyBnZXRDdXJyZW50Q29sdW1uKCkgOiBudWxsO1xuICAgICAgICAvLyBUcmFjayBjaGlsZCBjZWxscyBhbmQgbWFuYWdlIGtleWJvYXJkIG5hdmlnYXRpb24gYW1vbmcgdGhlbS5cbiAgICAgICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDZWxscywgdXNlUm92aW5nVGFiSW5kZXhDaGlsZDogdXNlUm92aW5nVGFiSW5kZXhDZWxsLCBjaGlsZENvdW50OiBjZWxsQ291bnQgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHtcbiAgICAgICAgICAgIHNob3VsZEZvY3VzT25DaGFuZ2U6IHVzZUNhbGxiYWNrKCgpID0+IHsgcmV0dXJuICEhZ2V0Rm9jdXNDZWxsT25Sb3dDaGFuZ2UoKSAmJiAhIWdldElzVGFiYmFibGVSb3coKTsgfSwgW10pLFxuICAgICAgICAgICAgdGFiYmFibGVJbmRleDogY3VycmVudENvbHVtblxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTW9yZSBuYXZpZ2F0aW9uIHN0dWZmXG4gICAgICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdENvbHVtbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4yKHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIDAsIDAsIDEsIGlkZW50aXR5LCBpZGVudGl0eSkpO1xuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdENvbHVtbiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0Q3VycmVudENvbHVtbjIodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDZWxscywgbWFuYWdlZENlbGxzLmxlbmd0aCwgbWFuYWdlZENlbGxzLmxlbmd0aCwgLTEsIGlkZW50aXR5LCBpZGVudGl0eSkpOyBmb3JjZVVwZGF0ZSgpOyB9LCBbXSk7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2Q29sdW1uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbjIoYyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIGMsIGMgLSAxLCAtMSwgaWRlbnRpdHksIGlkZW50aXR5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dENvbHVtbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4yKGMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENlbGxzLCBjLCBjICsgMSwgMSwgaWRlbnRpdHksIGlkZW50aXR5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wczogdXNlTGluZWFyTmF2aWdhdGlvbkNlbGxQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDZWxscyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiaW5saW5lXCIsXG4gICAgICAgICAgICBpbmRleDogY3VycmVudENvbHVtbiA/PyAwLFxuICAgICAgICAgICAgZGlzYWJsZUhvbWVFbmRLZXlzOiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0OiBuYXZpZ2F0ZVRvRmlyc3RDb2x1bW4sXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdDogbmF2aWdhdGVUb0xhc3RDb2x1bW4sXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldjogbmF2aWdhdGVUb1ByZXZDb2x1bW4sXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dDogbmF2aWdhdGVUb05leHRDb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5vdGlmeSB0aGUgcmVsZXZhbnQgY2hpbGQgY2VsbHMgd2hlbiB0aGV5IHNob3VsZC9zaG91bGQgbm90IGJlIHRhYmJhYmxlXG4gICAgICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgICAgICBhY3RpdmF0ZWRJbmRleDogY3VycmVudENvbHVtbixcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENlbGxzLFxuICAgICAgICAgICAgc2V0Q2hpbGRGbGFnOiAoY2VsbEluZGV4LCBjZWxsSXNUYWJiYWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggIT0gbnVsbCAmJiBtYW5hZ2VkQ2VsbHNbY2VsbEluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2VsbHNbY2VsbEluZGV4XS5zZXRUYWJiYWJsZShjZWxsSXNUYWJiYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsSXNUYWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDZWxsc1tjZWxsSW5kZXhdLnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoY2VsbEluZGV4KSA9PiAobWFuYWdlZENlbGxzW2NlbGxJbmRleF0/LmdldFRhYmJhYmxlKCkgPz8gbnVsbCksXG4gICAgICAgICAgICB1c2VFZmZlY3RcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFueSB0aW1lIHdlIGJlY29tZSB0aGUgY3VycmVudGx5IHRhYmJhYmxlIHJvdyxcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgd2UncmUgaW4gYSB2YWxpZCBjZWxsLCBhbmQgc2hpZnQgbGVmdC9yaWdodCBpZiBub3QgdG8gZmluZCBvbmUuXG4gICAgICAgIC8vIFRPRE86IFNlZW1zIGtpbmRhIGphbmt5PyBJcyB0aGVyZSBubyBjbGVhbmVyIHdheSB0byBhY2NvbXBsaXNoIHRoaXMsXG4gICAgICAgIC8vIGVzcGVjaWFsbHkgc2luY2UgaXQncyBzaW1pbGFyIHRvIG90aGVyIGNvZGU/XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWJiYWJsZVJvdykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsSW5kZXggPSBnZXRDdXJyZW50Q29sdW1uKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNlbGxJbmRleCA+PSAwICYmIG1hbmFnZWRDZWxsc1tjZWxsSW5kZXhdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1jZWxsSW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmRleCA9IGdldEN1cnJlbnRDb2x1bW4oKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNlbGxJbmRleCA8IG1hbmFnZWRDZWxscy5sZW5ndGggJiYgbWFuYWdlZENlbGxzW2NlbGxJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytjZWxsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmRleCA9PSBtYW5hZ2VkQ2VsbHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4ID0gZ2V0Q3VycmVudENvbHVtbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZGV4ICE9IGdldEN1cnJlbnRDb2x1bW4oKSlcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbjIoY2VsbEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2lzVGFiYmFibGVSb3ddKTtcbiAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlTWFuYWdlZFJvd1Byb3BzIH0gPSB1c2VNYW5hZ2VkUm93KHtcbiAgICAgICAgICAgIGluZGV4OiByb3dJbmRleCxcbiAgICAgICAgICAgIHNldElzVGFiYmFibGVSb3csXG4gICAgICAgICAgICBnZXRJc1RhYmJhYmxlUm93OiBnZXRJc1RhYmJhYmxlUm93LFxuICAgICAgICAgICAgaGlkZGVuLFxuICAgICAgICAgICAgLi4uaW5mb1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzOiB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRSb3dQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUm93KGluZm8gYXMgSVIpXG4gICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uUm93UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1hbmFnZWRSb3dQcm9wcyh1c2VMaW5lYXJOYXZpZ2F0aW9uQ2VsbFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBoaWRkZW46ICEhaGlkZGVuLCBcImRhdGEtaW5kZXhcIjogcm93SW5kZXggfSwgcHJvcHMpKSksIFt1c2VNYW5hZ2VkUm93UHJvcHMsICEhaGlkZGVuXSk7XG4gICAgICAgIGNvbnN0IGdldFJvd0luZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHJvd0luZGV4KTtcbiAgICAgICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25DZWxsID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdldFRhYmJhYmxlID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4gdGFiYmFibGUpO1xuICAgICAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyB9ID0gdXNlUm92aW5nVGFiSW5kZXhDZWxsKHsgLi4uaW5mbywgZ2V0VGFiYmFibGUgfSk7XG4gICAgICAgICAgICAvL2NvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHM6IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZENlbGxQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkQ2VsbChpbmZvIGFzIElDKTtcbiAgICAgICAgICAgIC8vIEFueSB0aW1lIHdlIGludGVyYWN0IHdpdGggdGhpcyBjZWxsLCBzZXQgaXQgdG8gYmVcbiAgICAgICAgICAgIC8vIG91ciBcImN1cnJlbnRseSB0YWJiYWJsZVwiIGNlbGwsIHJlZ2FyZGxlc3Mgb2ZcbiAgICAgICAgICAgIC8vIGFueSBwcmV2aW91c2x5IHNlbGVjdGVkIHJvdy9jb2x1bW4uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVE9ETzogTW91c2V1cC9kb3duIG1pZ2h0IGJlIHByZWZlcmFibGUsXG4gICAgICAgICAgICAvLyBidXQgaXQgZG9lc24ndCBmaXJlIG9uIGxhYmVsIGVsZW1lbnRzIGhlcmU/Pz8/P1xuICAgICAgICAgICAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Um93MihnZXRSb3dJbmRleCgpKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uMihpbmZvLmluZGV4KTtcbiAgICAgICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XG4gICAgICAgICAgICBjb25zdCB1c2VHcmlkTmF2aWdhdGlvbkNlbGxQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKCh1c2VNZXJnZWRQcm9wcygpKHsgb25DbGljayB9LCBwcm9wcykpKSwgW3VzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wc10pO1xuICAgICAgICAgICAgcmV0dXJuIHsgdGFiYmFibGUsIHVzZUdyaWROYXZpZ2F0aW9uQ2VsbFByb3BzIH07XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW4sXG4gICAgICAgICAgICB1c2VHcmlkTmF2aWdhdGlvblJvd1Byb3BzLFxuICAgICAgICAgICAgdXNlR3JpZE5hdmlnYXRpb25DZWxsLFxuICAgICAgICAgICAgY2VsbENvdW50LFxuICAgICAgICAgICAgaXNUYWJiYWJsZVJvdyxcbiAgICAgICAgICAgIG1hbmFnZWRDZWxsczogbWFuYWdlZENlbGxzXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRSb3csIGluZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VHcmlkTmF2aWdhdGlvblByb3BzOiB1c2VMaW5lYXJOYXZpZ2F0aW9uUm93UHJvcHMsXG4gICAgICAgIHVzZUdyaWROYXZpZ2F0aW9uUm93LFxuICAgICAgICB1c2VHcmlkTmF2aWdhdGlvbkNvbHVtbixcbiAgICAgICAgcm93Q291bnQ6IGNoaWxkQ291bnQsXG4gICAgICAgIGNlbGxJbmRleDogY3VycmVudENvbHVtbixcbiAgICAgICAgcm93SW5kZXg6IGN1cnJlbnRSb3csXG4gICAgICAgIG1hbmFnZWRSb3dzXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ncmlkLW5hdmlnYXRpb24uanMubWFwIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicHJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG47XG5jb25zdCBTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVCYXRjaGVkQW5pbWF0aW9uRnJhbWVzKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IGFkZENhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5zZXQoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKTsgfSwgW10pO1xuICAgIGNvbnN0IHJlbW92ZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGNhbGxiYWNrKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LmRlbGV0ZShjYWxsYmFjayk7IH0sIFtdKTtcbiAgICBjb25zdCBjb250ZXh0SW5mbyA9IHVzZVJlZihudWxsKTtcbiAgICBpZiAoY29udGV4dEluZm8uY3VycmVudCA9PSBudWxsKVxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcbiAgICBjb25zdCBhbGxDYWxsYmFja3MgPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKGFsbENhbGxiYWNrcy5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGFsbENhbGxiYWNrcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUgPSAtMTtcbiAgICAgICAgZnVuY3Rpb24gcmFmV2l0aEJhdGNoZWRDYWxsYmFja3MobXNTaW5jZUxhc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoX2pzeChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRJbmZvLmN1cnJlbnQsIGNoaWxkcmVuOiBjaGlsZHJlbiB9KSk7XG59XG4vKipcbiAqIFRoZSAob3B0aW9uYWxseSBub24tc3RhYmxlKSBgY2FsbGJhY2tgIHlvdSBwcm92aWRlIHdpbGwgc3RhcnQgcnVubmluZyBldmVyeSBmcmFtZSBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAqXG4gKiBQYXNzaW5nIGBudWxsYCBpcyBmaW5lIGFuZCBzaW1wbHkgc3RvcHMgdGhlIGVmZmVjdCB1bnRpbCB5b3UgcmVzdGFydCBpdCBieSBwcm92aWRpbmcgYSBub24tbnVsbCBjYWxsYmFjay5cbiAqXG4gKiAqKlRoaXMgaG9vayBkb2VzIG5vdCByZXR1cm4gYW55dGhpbmcgYXQgYWxsLCBpbmNsdWRpbmcgbm8gcHJvcC1tb2RpZnlpbmcgaG9va3MqKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5pbWF0aW9uRnJhbWUoeyBjYWxsYmFjayB9KSB7XG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcbiAgICBjb25zdCBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSB1c2VDb250ZXh0KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hbmltYXRpb24tZnJhbWUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGFzdERyb3BFZmZlY3QsIHNldExhc3REcm9wRWZmZWN0LCBnZXRMYXN0RHJvcEVmZmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQsXG4gICAgICAgICAgICBvbkRyYWdFbmQsXG4gICAgICAgICAgICByZWZcbiAgICAgICAgfSwgcCk7XG4gICAgfSwgW2VmZmVjdEFsbG93ZWQsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCwgLi4uT2JqZWN0LmVudHJpZXMoZGF0YSkuZmxhdCgpXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIGxldCByZXQgPSB7XG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxuICAgICAgICBkcmFnZ2luZyxcbiAgICAgICAgZ2V0RHJhZ2dpbmcsXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cbiAgICAgICAgLy8gVXNlZnVsIGZvciByZW1vdmluZyB0aGUgZWxlbWVudCBhZnRlcndhcmRzIGlmIGl0IHdhcyBcIm1vdmVcIlxuICAgICAgICBsYXN0RHJvcEVmZmVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3RcbiAgICAgICAgICovXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyYWdnYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbjtcbjtcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZmlsZU5hbWU7XG4gICAgZXJyb3JUeXBlO1xuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XG4gICAgICAgIHN1cGVyKGJhc2U/Lm1lc3NhZ2UgPz8gXCJBbiB1bnNwZWNpZmllZCBlcnJvciBvY2N1cnJlZCByZWFkaW5nIHRoZSBmaWxlLlwiKTtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XG4gICAgfVxufVxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wcGFibGUoeyBlZmZlY3QgfSkge1xuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wcGVkRmlsZXMsIHNldERyb3BwZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIC8vIEFsbCB0aGUgcHJvbWlzZXMgZ2VuZXJhdGVkIGZyb20gdGhlIGRyb3AgZXZlbnRzLlxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbY3VycmVudFByb21pc2VJbmRleCwgc2V0Q3VycmVudFByb21pc2VJbmRleCwgZ2V0Q3VycmVudFByb21pc2VJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxuICAgIC8vIElmIHRoZXJlIGlzIG9uZSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLCBzaW5jZSBpdCBydW5zIHRoZSBzYW1lIGNoZWNrLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICBpZiAocHJvbWlzZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtwcm9taXNlQ291bnRdKTtcbiAgICAvLyBBbnl0aW1lIG91ciBjdXJyZW50IHByb21pc2UgY2hhbmdlcyxcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxuICAgIC8vIEZpbmFsbHksIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55bW9yZSBwcm9taXNlcy5cbiAgICAvLyBJZiB0aGVyZSBhcmUsIHRoZW4gaW5jcmVhc2UgY3VycmVudFByb21pc2VDb3VudCxcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cbiAgICAvL1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiAqb2Z0ZW4qLCBidXQgbWF5YmUgaW4gdGhlIGNhc2Ugb2ZcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9taXNlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9taXNlLnRoZW4oKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkRmlsZXMoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkU3RyaW5ncyhzdHJpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UncmUgZG9uZSwgYXJlIHRoZXJlIG1vcmUgcHJvbWlzZXMgaW4gdGhlIHF1ZXVlP1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBwcm9taXNlIGhhcyBzdGFydGVkLCBtb3JlIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50UHJvbWlzZUluZGV4XSk7XG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xuICAgICAgICAvL2NvbnN0IHJlZiA9IHVzZVJlZjxFPihudWxsKTtcbiAgICAgICAgLy8gSGFuZGxlIGNvbGxlY3RpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzLlxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IChlZmZlY3QgPz8gXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01pbWVUeXBlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01pbWVUeXBlcy5hZGQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goeyB0eXBlOiBpdGVtLnR5cGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG5ld0ZpbGVzKTtcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihuZXdNaW1lVHlwZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlc1xuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQm9pbGVycGxhdGUsIEkgZ3Vlc3NcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgY29uc3Qgb25Ecm9wID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xuICAgICAgICAgICAgY29uc3QgZHJvcEZpbGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGl0ZW0uZ2V0QXNTdHJpbmcocmVzb2x2ZSkpKS50aGVuKHN0ciA9PiBkcm9wRGF0YVt0eXBlXSA9IHN0cikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcFByb21pc2VzUmVmLmN1cnJlbnQucHVzaChQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogZHJvcERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS5jYXRjaChleCA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IoZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0sIHApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXG4gICAgICAgIGZpbGVzRm9yQ29uc2lkZXJhdGlvbixcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcbiAgICAgICAgZHJvcHBlZFN0cmluZ3MsXG4gICAgICAgIGRyb3BFcnJvclxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLyoqXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlmZmVyZW50IHdheXMgdGhhdCBhIGZvY3VzIGV2ZW50IGNhbiBoYXBwZW4uICBBc3N1bWVcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgaGFwcGVuIGluIG9yZGVyOlxuICpcbiAqIDEuIFRoZSBwYWdlIGxvYWRzLlxuICogICAgKiBOb3RoaW5nIGlzIGZvY3VzZWQsIGJ1dCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYGJvZHlgLlxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxuICogMi4gVGhlIHdpbmRvdyBpcyBmb2N1c2VkLCBhbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCByZW1haW5zIGFzIGBib2R5YC5cbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxuICogICAgICB0aGUgYnJvd3NlciwgdGhpcyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGhhbmRsZXIgd2FzIGF0dGFjaGVkIHRvIGB3aW5kb3dgIG9yIGBkb2N1bWVudGAuXG4gKiAgICAgIFByb2JhYmx5IGp1c3QgYmVzdCB0byBub3QgcmVseSBvbiBpdCwgb3IgbGlzdGVuIHRvIGB3aW5kb3dgIGZvY3VzIGV2ZW50cyBkaXJlY3RseS5cbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIGFueSBldmVudCBldmVuIGZpcmVzLlxuICogICAgKiBgZm9jdXNvdXRgIGFuZCBgYmx1cmAgYXJlICpub3QqIGZpcmVkIG9uIGBib2R5YC5cbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogNC4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXG4gKiAgICAqICoqVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIGBib2R5YCoqIGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgbm93IHNldCB0byB0aGUgbmV3IGVsZW1lbnQuXG4gKiAgICAqIGBmb2N1c2luYCBpcyBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgb2xkIGVsZW1lbnQuXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gYGJvZHlgLlxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKlxuICpcbiAqIEluIHN1bW1hcnk6XG4gKiAxLiBGb2N1cyBldmVudHMgKmRvKiBub3RpZnkgdXMgb2YgYWxsIGNoYW5nZXMgaW4gZm9jdXMsIGJ1dCB0aGVyZSBpcyBubyBvbmUgc2luZ2xlIGNvbXByZWhlbnNpdmUgZXZlbnQgdGhhdCBwcm92aWRlcyB1cyB3aXRoIGFsbCBhdmFpbGFibGUgaW5mb3JtYXRpb24uXG4gKiAyLiBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgKmlzIG5vdCogYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQncyBiZWluZyByZWZlcmVuY2VkIGJ5IGEgZm9jdXMgZXZlbnQuIEluIHBhcnRpY3VsYXIsIGl0IG1heSBiZWNvbWUgYGJvZHlgIGF0IGFueSBhcmJpdHJhcnkgdGltZS5cbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cbiAqIDQuIEEgYGJsdXJgIGV2ZW50IHdob3NlIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsIGluZGljYXRlcyB0aGF0IHRoZXJlIHdpbGwgYmUgbm8gZm9sbG93aW5nIGBmb2N1c2AgZXZlbnQuXG4gKlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHJldHVybnNcbiAqL1xuY29uc3QgZHVtbXkgPSAwO1xuY29uc3QgYWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcbmNvbnN0IHdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IG5ldyBNYXAoKTtcbmxldCB3aW5kb3dzRm9jdXNlZCA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgbWFwLCB2YWx1ZSkge1xuICAgIGZvciAobGV0IFtvdGhlcldpbmRvdywgdXBkYXRlcnNdIG9mIG1hcCkge1xuICAgICAgICBpZiAod2luZG93ID09PSBvdGhlcldpbmRvdykge1xuICAgICAgICAgICAgZm9yIChsZXQgdXBkYXRlciBvZiB1cGRhdGVycykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZXI/Lih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmb2N1c291dChlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBhY3RpdmVFbGVtZW50VXBkYXRlcnMsIG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSnVzdCB3YWl0IGZvciB0aGUgZm9jdXNpbiBldmVudC5cbiAgICB9XG59XG5mdW5jdGlvbiBmb2N1c2luKGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCk7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCk7XG59XG5mdW5jdGlvbiB3aW5kb3dGb2N1cyhlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gKGUudGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS50YXJnZXQgOiBlLmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLmN1cnJlbnRUYXJnZXQgOiBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KTtcbiAgICB3aW5kb3dzRm9jdXNlZC5zZXQod2luZG93LCB0cnVlKTtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIHdpbmRvd0ZvY3VzZWRVcGRhdGVycywgdHJ1ZSk7XG59XG5mdW5jdGlvbiB3aW5kb3dCbHVyKGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICAgIHdpbmRvd3NGb2N1c2VkLnNldCh3aW5kb3csIGZhbHNlKTtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIHdpbmRvd0ZvY3VzZWRVcGRhdGVycywgZmFsc2UpO1xufVxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGluc3BlY3Qgd2hpY2ggZWxlbWVudCBpbiB0aGUgYGRvY3VtZW50YCBjdXJyZW50bHkgaGFzIGZvY3VzLCB3aGljaCB3YXMgbW9zdCByZWNlbnRseSBmb2N1c2VkIGlmIG5vbmUgYXJlIGN1cnJlbnRseSwgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSB3aW5kb3cgaGFzIGZvY3VzIGJ5IHJldHVybmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldEFjdGl2ZUVsZW1lbnQoKWBcbiAqICogYGdldExhc3RBY3RpdmVFbGVtZW50KClgXG4gKiAqIGBnZXRXaW5kb3dGb2N1c2VkKClgXG4gKiAqICoqTm8gcHJvcC1tb2RpZnlpbmcgaG9vayBpcyByZXR1cm5lZCBiZWNhdXNlIG5vbmUgaXMgbmVjZXNzYXJ5KipcbiAqXG4gKiAoVGhlIGRvY3VtZW50J3MgYm9keSByZWNlaXZpbmcgZm9jdXMsIGxpa2UgaXQgZG9lcyB3aGVuIHlvdSBjbGljayBvbiBhbiBlbXB0eSBhcmVhLCBpcyBjb3VudGVkIGFzIG5vIGVsZW1lbnQgaGF2aW5nIGZvY3VzIGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXMpXG4gKlxuICogVGhpcyBpcyBhIHBhc3NpdmUgaG9vaywgc28gYnkgZGVmYXVsdCBpdCByZXR1cm5zIGdldHRlciBmdW5jdGlvbnMgdGhhdCByZXBvcnQgdGhpcyBpbmZvcm1hdGlvbiBidXQgdGhlIGNvbXBvbmVudCB3aWxsIG5vdCByZS1yZW5kZXIgYnkgZGVmYXVsdCB3aGVuIHRoZSBhY3RpdmUgZWxlbWVudCBjaGFuZ2VzLlxuICpcbiAqIElmIHlvdSBuZWVkIHRoZSBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMsIHVzZSB0aGUgYG9uKkNoYW5nZWAgYXJndW1lbnRzIHRvIHNldCBzb21lIHN0YXRlIG9uIHlvdXIgZW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAgICAgaWYgKChhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdyk/LnNpemUgPz8gMCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZW0gZXZlbiBpZiB0aGV5J3JlIHVuZGVmaW5lZCB0byBtb3JlIGVhc2lseVxuICAgICAgICAgICAgICAgIC8vIG1hbmFnZSB0aGUgXCI+MCBtZWFucyBkb24ndCBhZGQgaGFuZGxlcnNcIiBsb2dpYy5cbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMgPSB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGxvY2FsQWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldExhc3RBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycy5hZGQoc2V0V2luZG93Rm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsQWN0aXZlRWxlbWVudFVwZGF0ZXJzKTtcbiAgICAgICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XG4gICAgICAgICAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpLmRlbGV0ZShzZXRMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5nZXQod2luZG93KS5kZWxldGUoc2V0V2luZG93Rm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgY29uc3QgW2dldEFjdGl2ZUVsZW1lbnQsIHNldEFjdGl2ZUVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uQWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcbiAgICBjb25zdCBbZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtnZXRXaW5kb3dGb2N1c2VkLCBzZXRXaW5kb3dGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbldpbmRvd0ZvY3VzZWRDaGFuZ2UsIHJldHVyblRydWUpO1xuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIHVzZUFjdGl2ZUVsZW1lbnRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xufVxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmZ1bmN0aW9uIG5vb3AoKSB7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25Gb2N1c2VkQ2hhbmdlZCwgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRGb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldEZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRJbm5lckNoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWQsIHNldExhc3RGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZElubmVyLCBzZXRMYXN0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHtcbiAgICAgICAgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoYWN0aXZlRWxlbWVudCwgcHJldkFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IChzZWxmRWxlbWVudCAhPSBudWxsICYmIChzZWxmRWxlbWVudCA9PSBhY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSAoISFzZWxmRWxlbWVudD8uY29udGFpbnMoYWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgc2V0Rm9jdXNlZChmb2N1c2VkKTtcbiAgICAgICAgICAgIHNldEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xuICAgICAgICAgICAgb25BY3RpdmVFbGVtZW50Q2hhbmdlPy4oYWN0aXZlRWxlbWVudCwgcHJldkFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSAoc2VsZkVsZW1lbnQgIT0gbnVsbCAmJiAoc2VsZkVsZW1lbnQgPT0gbGFzdEFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgc2V0TGFzdEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZElubmVyKGZvY3VzZWRJbm5lcik7XG4gICAgICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlPy4obGFzdEFjdGl2ZUVsZW1lbnQsIHByZXZMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgb25XaW5kb3dGb2N1c2VkQ2hhbmdlXG4gICAgfSk7XG4gICAgY29uc3QgdXNlSGFzRm9jdXNQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlQWN0aXZlRWxlbWVudFByb3BzKHByb3BzKTsgfSwgW3VzZUFjdGl2ZUVsZW1lbnRQcm9wc10pO1xuICAgIHJldHVybiB7IHVzZUhhc0ZvY3VzUHJvcHMsIGdldEVsZW1lbnQsIGdldEZvY3VzZWQsIGdldEZvY3VzZWRJbm5lciwgZ2V0TGFzdEZvY3VzZWQsIGdldExhc3RGb2N1c2VkSW5uZXIsIGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaGFzLWZvY3VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnZhbCh7IGludGVydmFsLCBjYWxsYmFjayB9KSB7XG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICBjb25zdCBnZXRJbnRlcnZhbCA9IHVzZVN0YWJsZUdldHRlcihpbnRlcnZhbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgbGV0IGxhc3REZWxheVVzZWQgPSBpbnRlcnZhbDtcbiAgICAgICAgaWYgKGludGVydmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgLy8gdGhhdCBjbGVhcnMgYW5kIHJlc2V0cyB0aGUgaW50ZXJ2YWwgaWYgaXQgY2hhbmdlcy5cbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVydmFsLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjMuM1xuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XTpub3Qoc2xvdCknLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScsICdkZXRhaWxzJ107XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xudmFyIE5vRWxlbWVudCA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJztcbnZhciBtYXRjaGVzID0gTm9FbGVtZW50ID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbnZhciBnZXRSb290Tm9kZSA9ICFOb0VsZW1lbnQgJiYgRWxlbWVudC5wcm90b3R5cGUuZ2V0Um9vdE5vZGUgPyBmdW5jdGlvbiAoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xufSA6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIGNvbnRhaW5lciB0byBjaGVjayBpblxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlQ29udGFpbmVyIGFkZCBjb250YWluZXIgdG8gY2hlY2tcbiAqIEBwYXJhbSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAqL1xuXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG5cbiAgaWYgKGluY2x1ZGVDb250YWluZXIgJiYgbWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICB9XG5cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbi8qKlxuICogQGNhbGxiYWNrIEdldFNoYWRvd1Jvb3RcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0byBjaGVjayBmb3Igc2hhZG93IHJvb3RcbiAqIEByZXR1cm5zIHtTaGFkb3dSb290fGJvb2xlYW59IFNoYWRvd1Jvb3QgaWYgYXZhaWxhYmxlIG9yIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBhIHNoYWRvd1Jvb3QgaXMgYXR0YWNoZWQgYnV0IG5vdCBhdmFpbGFibGUuXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2hhZG93Um9vdEZpbHRlclxuICogQHBhcmFtIHtFbGVtZW50fSBzaGFkb3dIb3N0Tm9kZSB0aGUgZWxlbWVudCB3aGljaCBjb250YWlucyBzaGFkb3cgY29udGVudFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYSBzaGFkb3cgcm9vdCBjb3VsZCBwb3RlbnRpYWxseSBjb250YWluIHZhbGlkIGNhbmRpZGF0ZXMuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDYW5kaWRhdGVzU2NvcGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gc2NvcGUgY29udGFpbnMgaW5uZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGNhbmRpZGF0ZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEl0ZXJhdGl2ZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7R2V0U2hhZG93Um9vdHxib29sZWFufSBnZXRTaGFkb3dSb290IHRydWUgaWYgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZDsgZmFsc3kgaWYgbm90O1xuICogIGlmIGEgZnVuY3Rpb24sIGltcGxpZXMgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZCBhbmQgZWl0aGVyIHJldHVybnMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnRcbiAqICBvciBhIGJvb2xlYW4gc3RhdGluZyBpZiBpdCBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHJvb3RcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBmbGF0dGVuIGlmIHRydWUgdGhlbiByZXN1bHQgd2lsbCBmbGF0dGVuIGFueSBDYW5kaWRhdGVzU2NvcGUgaW50byB0aGUgcmV0dXJuZWQgbGlzdFxuICogQHByb3BlcnR5IHtTaGFkb3dSb290RmlsdGVyfSBzaGFkb3dSb290RmlsdGVyIGZpbHRlciBzaGFkb3cgcm9vdHM7XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxlbWVudHMgbGlzdCBvZiBlbGVtZW50IGNvbnRhaW5lcnMgdG8gbWF0Y2ggY2FuZGlkYXRlcyBmcm9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciBsaXN0IHRvIGNoZWNrXG4gKiBAcGFyYW0ge0l0ZXJhdGl2ZU9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fVxuICovXG5cblxudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG5cbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob3B0aW9ucy5mbGF0dGVuKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBuZXN0ZWRDYW5kaWRhdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgc2NvcGU6IGVsZW1lbnQsXG4gICAgICAgICAgY2FuZGlkYXRlczogbmVzdGVkQ2FuZGlkYXRlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgY2FuZGlkYXRlIGVsZW1lbnRcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgICAgIGlmICh2YWxpZENhbmRpZGF0ZSAmJiBvcHRpb25zLmZpbHRlcihlbGVtZW50KSAmJiAoaW5jbHVkZUNvbnRhaW5lciB8fCAhZWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCkpKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaChlbGVtZW50KTtcbiAgICAgIH0gLy8gaXRlcmF0ZSBvdmVyIHNoYWRvdyBjb250ZW50IGlmIHBvc3NpYmxlXG5cblxuICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3QgfHwgLy8gY2hlY2sgZm9yIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgdHlwZW9mIG9wdGlvbnMuZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLmdldFNoYWRvd1Jvb3QoZWxlbWVudCk7XG4gICAgICB2YXIgdmFsaWRTaGFkb3dSb290ID0gIW9wdGlvbnMuc2hhZG93Um9vdEZpbHRlciB8fCBvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzaGFkb3dSb290ICYmIHZhbGlkU2hhZG93Um9vdCkge1xuICAgICAgICAvLyBhZGQgc2hhZG93IGRvbSBzY29wZSBJSUYgYSBzaGFkb3cgcm9vdCBub2RlIHdhcyBnaXZlbjsgb3RoZXJ3aXNlLCBhbiB1bmRpc2Nsb3NlZFxuICAgICAgICAvLyAgc2hhZG93IGV4aXN0cywgc28gbG9vayBhdCBsaWdodCBkb20gY2hpbGRyZW4gYXMgZmFsbGJhY2sgQlVUIGNyZWF0ZSBhIHNjb3BlIGZvciBhbnlcbiAgICAgICAgLy8gIGNoaWxkIGNhbmRpZGF0ZXMgZm91bmQgYmVjYXVzZSB0aGV5J3JlIGxpa2VseSBzbG90dGVkIGVsZW1lbnRzIChlbGVtZW50cyB0aGF0IGFyZVxuICAgICAgICAvLyAgY2hpbGRyZW4gb2YgdGhlIHdlYiBjb21wb25lbnQgZWxlbWVudCAod2hpY2ggaGFzIHRoZSBzaGFkb3cpLCBpbiB0aGUgbGlnaHQgZG9tLCBidXRcbiAgICAgICAgLy8gIHNsb3R0ZWQgc29tZXdoZXJlIF9pbnNpZGVfIHRoZSB1bmRpc2Nsb3NlZCBzaGFkb3cpIC0tIHRoZSBzY29wZSBpcyBjcmVhdGVkIGJlbG93LFxuICAgICAgICAvLyAgX2FmdGVyXyB3ZSByZXR1cm4gZnJvbSB0aGlzIHJlY3Vyc2l2ZSBjYWxsXG4gICAgICAgIHZhciBfbmVzdGVkQ2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShzaGFkb3dSb290ID09PSB0cnVlID8gZWxlbWVudC5jaGlsZHJlbiA6IHNoYWRvd1Jvb3QuY2hpbGRyZW4sIHRydWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmZsYXR0ZW4pIHtcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgX25lc3RlZENhbmRpZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBzY29wZTogZWxlbWVudCxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IF9uZXN0ZWRDYW5kaWRhdGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlJ3Mgbm90IHNoYWRvdyBzbyBqdXN0IGRpZyBpbnRvIHRoZSBlbGVtZW50J3MgKGxpZ2h0IGRvbSkgY2hpbGRyZW5cbiAgICAgICAgLy8gIF9fd2l0aG91dF9fIGdpdmluZyB0aGUgZWxlbWVudCBzcGVjaWFsIHNjb3BlIHRyZWF0bWVudFxuICAgICAgICBlbGVtZW50c1RvQ2hlY2sudW5zaGlmdC5hcHBseShlbGVtZW50c1RvQ2hlY2ssIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSwgaXNTY29wZSkge1xuICBpZiAobm9kZS50YWJJbmRleCA8IDApIHtcbiAgICAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gICAgLy8gYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgICAvLyB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAgIC8vIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cbiAgICAvLyBBbHNvIGJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgICAvL1xuICAgIC8vIGlzU2NvcGUgaXMgcG9zaXRpdmUgZm9yIGN1c3RvbSBlbGVtZW50IHdpdGggc2hhZG93IHJvb3Qgb3Igc2xvdCB0aGF0IGJ5IGRlZmF1bHRcbiAgICAvLyBoYXZlIHRhYkluZGV4IC0xLCBidXQgbmVlZCB0byBiZSBzb3J0ZWQgYnkgZG9jdW1lbnQgb3JkZXIgaW4gb3JkZXIgZm9yIHRoZWlyXG4gICAgLy8gY29udGVudCB0byBiZSBpbnNlcnRlZCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvblxuICAgIGlmICgoaXNTY29wZSB8fCAvXihBVURJT3xWSURFT3xERVRBSUxTKSQvLnRlc3Qobm9kZS50YWdOYW1lKSB8fCBub2RlLmlzQ29udGVudEVkaXRhYmxlKSAmJiBpc05hTihwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IGdldFJvb3ROb2RlKG5vZGUpO1xuXG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuXG4gIHZhciByYWRpb1NldDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG5cbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG5cbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxudmFyIGlzWmVyb0FyZWEgPSBmdW5jdGlvbiBpc1plcm9BcmVhKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aWR0aCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIF9yZWYpIHtcbiAgdmFyIGRpc3BsYXlDaGVjayA9IF9yZWYuZGlzcGxheUNoZWNrLFxuICAgICAgZ2V0U2hhZG93Um9vdCA9IF9yZWYuZ2V0U2hhZG93Um9vdDtcblxuICAvLyBOT1RFOiB2aXNpYmlsaXR5IHdpbGwgYmUgYHVuZGVmaW5lZGAgaWYgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb2N1bWVudFxuICAvLyAgKHNlZSBub3RlcyBhYm91dCB0aGlzIGZ1cnRoZXIgZG93biksIHdoaWNoIG1lYW5zIHdlIHdpbGwgY29uc2lkZXIgaXQgdmlzaWJsZVxuICAvLyAgKHRoaXMgaXMgbGVnYWN5IGJlaGF2aW9yIGZyb20gYSB2ZXJ5IGxvbmcgd2F5IGJhY2spXG4gIC8vIE5PVEU6IHdlIGNoZWNrIHRoaXMgcmVnYXJkbGVzcyBvZiBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBiZWNhdXNlIHRoaXMgaXMgYVxuICAvLyAgX3Zpc2liaWxpdHlfIGNoZWNrLCBub3QgYSBfZGlzcGxheV8gY2hlY2tcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJyk7XG4gIHZhciBub2RlVW5kZXJEZXRhaWxzID0gaXNEaXJlY3RTdW1tYXJ5ID8gbm9kZS5wYXJlbnRFbGVtZW50IDogbm9kZTtcblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFRoZSByb290IG5vZGUgaXMgdGhlIHNoYWRvdyByb290IGlmIHRoZSBub2RlIGlzIGluIGEgc2hhZG93IERPTTsgc29tZSBkb2N1bWVudCBvdGhlcndpc2VcbiAgLy8gIChidXQgTk9UIF90aGVfIGRvY3VtZW50OyBzZWUgc2Vjb25kICdJZicgY29tbWVudCBiZWxvdyBmb3IgbW9yZSkuXG4gIC8vIElmIHJvb3ROb2RlIGlzIHNoYWRvdyByb290LCBpdCdsbCBoYXZlIGEgaG9zdCwgd2hpY2ggaXMgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHNoYWRvd1xuICAvLyAgaXMgYXR0YWNoZWQsIGFuZCB0aGUgb25lIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXQncyBpbiB0aGUgZG9jdW1lbnQgb3Igbm90IChiZWNhdXNlIHRoZVxuICAvLyAgc2hhZG93LCBhbmQgYWxsIG5vZGVzIGl0IGNvbnRhaW5zLCBpcyBuZXZlciBjb25zaWRlcmVkIGluIHRoZSBkb2N1bWVudCBzaW5jZSBzaGFkb3dzXG4gIC8vICBiZWhhdmUgbGlrZSBzZWxmLWNvbnRhaW5lZCBET01zOyBidXQgaWYgdGhlIHNoYWRvdydzIEhPU1QsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRvY3VtZW50LFxuICAvLyAgaXMgaGlkZGVuLCBvciBpcyBub3QgaW4gdGhlIGRvY3VtZW50IGl0c2VsZiBidXQgaXMgZGV0YWNoZWQsIGl0IHdpbGwgYWZmZWN0IHRoZSBzaGFkb3cnc1xuICAvLyAgdmlzaWJpbGl0eSwgaW5jbHVkaW5nIGFsbCB0aGUgbm9kZXMgaXQgY29udGFpbnMpLiBUaGUgaG9zdCBjb3VsZCBiZSBhbnkgbm9ybWFsIG5vZGUsXG4gIC8vICBvciBhIGN1c3RvbSBlbGVtZW50IChpLmUuIHdlYiBjb21wb25lbnQpLiBFaXRoZXIgd2F5LCB0aGF0J3MgdGhlIG9uZSB0aGF0IGlzIGNvbnNpZGVyZWRcbiAgLy8gIHBhcnQgb2YgdGhlIGRvY3VtZW50LCBub3QgdGhlIHNoYWRvdyByb290LCBub3IgYW55IG9mIGl0cyBjaGlsZHJlbiAoaS5lLiB0aGUgbm9kZSBiZWluZ1xuICAvLyAgdGVzdGVkKS5cbiAgLy8gSWYgcm9vdE5vZGUgaXMgbm90IGEgc2hhZG93IHJvb3QsIGl0IHdvbid0IGhhdmUgYSBob3N0LCBhbmQgc28gcm9vdE5vZGUgc2hvdWxkIGJlIHRoZVxuICAvLyAgZG9jdW1lbnQgKHBlciB0aGUgZG9jcykgYW5kIHdoaWxlIGl0J3MgYSBEb2N1bWVudC10eXBlIG9iamVjdCwgdGhhdCBkb2N1bWVudCBkb2VzIG5vdFxuICAvLyAgYXBwZWFyIHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBub2RlJ3MgYG93bmVyRG9jdW1lbnRgIGZvciBzb21lIHJlYXNvbiwgc28gaXQncyBzYWZlclxuICAvLyAgdG8gaWdub3JlIHRoZSByb290Tm9kZSBhdCB0aGlzIHBvaW50LCBhbmQgdXNlIGBub2RlLm93bmVyRG9jdW1lbnRgLiBPdGhlcndpc2UsXG4gIC8vICB1c2luZyBgcm9vdE5vZGUuY29udGFpbnMobm9kZSlgIHdpbGwgX2Fsd2F5c18gYmUgdHJ1ZSB3ZSdsbCBnZXQgZmFsc2UtcG9zaXRpdmVzIHdoZW5cbiAgLy8gIG5vZGUgaXMgYWN0dWFsbHkgZGV0YWNoZWQuXG5cblxuICB2YXIgbm9kZVJvb3RIb3N0ID0gZ2V0Um9vdE5vZGUobm9kZSkuaG9zdDtcbiAgdmFyIG5vZGVJc0F0dGFjaGVkID0gKG5vZGVSb290SG9zdCA9PT0gbnVsbCB8fCBub2RlUm9vdEhvc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVSb290SG9zdC5vd25lckRvY3VtZW50LmNvbnRhaW5zKG5vZGVSb290SG9zdCkpIHx8IG5vZGUub3duZXJEb2N1bWVudC5jb250YWlucyhub2RlKTtcblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIGlmICh0eXBlb2YgZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gZmlndXJlIG91dCBpZiB3ZSBzaG91bGQgY29uc2lkZXIgdGhlIG5vZGUgdG8gYmUgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IGFuZCB1c2UgdGhlXG4gICAgICAvLyAgJ25vbi16ZXJvLWFyZWEnIGZhbGxiYWNrXG4gICAgICB2YXIgb3JpZ2luYWxOb2RlID0gbm9kZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZhciByb290Tm9kZSA9IGdldFJvb3ROb2RlKG5vZGUpO1xuXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QgJiYgZ2V0U2hhZG93Um9vdChwYXJlbnRFbGVtZW50KSA9PT0gdHJ1ZSAvLyBjaGVjayBpZiB0aGVyZSdzIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBub2RlIGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgd2hpY2ggbWVhbnMgd2UgY2FuIG9ubHkgdHJlYXQgaXQgYXMgYSBibGFjayBib3gsIHNvIHdlXG4gICAgICAgICAgLy8gIGZhbGwgYmFjayB0byBhIG5vbi16ZXJvLWFyZWEgdGVzdFxuICAgICAgICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgLy8gaXRlcmF0ZSB1cCBzbG90XG4gICAgICAgICAgbm9kZSA9IG5vZGUuYXNzaWduZWRTbG90O1xuICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlICE9PSBub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAvLyBjcm9zcyBzaGFkb3cgYm91bmRhcnlcbiAgICAgICAgICBub2RlID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIG5vcm1hbCBkb21cbiAgICAgICAgICBub2RlID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gb3JpZ2luYWxOb2RlO1xuICAgIH0gLy8gZWxzZSwgYGdldFNoYWRvd1Jvb3RgIG1pZ2h0IGJlIHRydWUsIGJ1dCBhbGwgdGhhdCBkb2VzIGlzIGVuYWJsZSBzaGFkb3cgRE9NIHN1cHBvcnRcbiAgICAvLyAgKGkuZS4gaXQgZG9lcyBub3QgYWxzbyBwcmVzdW1lIHRoYXQgYWxsIG5vZGVzIG1pZ2h0IGhhdmUgdW5kaXNjbG9zZWQgc2hhZG93cyk7IG9yXG4gICAgLy8gIGl0IG1pZ2h0IGJlIGEgZmFsc3kgdmFsdWUsIHdoaWNoIG1lYW5zIHNoYWRvdyBET00gc3VwcG9ydCBpcyBkaXNhYmxlZFxuICAgIC8vIFNpbmNlIHdlIGRpZG4ndCBmaW5kIGl0IHNpdHRpbmcgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IChvciBzaGFkb3dzIGFyZSBkaXNhYmxlZClcbiAgICAvLyAgbm93IHdlIGNhbiBqdXN0IHRlc3QgdG8gc2VlIGlmIGl0IHdvdWxkIG5vcm1hbGx5IGJlIHZpc2libGUgb3Igbm90LCBwcm92aWRlZCBpdCdzXG4gICAgLy8gIGF0dGFjaGVkIHRvIHRoZSBtYWluIGRvY3VtZW50LlxuICAgIC8vIE5PVEU6IFdlIG11c3QgY29uc2lkZXIgY2FzZSB3aGVyZSBub2RlIGlzIGluc2lkZSBhIHNoYWRvdyBET00gYW5kIGdpdmVuIGRpcmVjdGx5IHRvXG4gICAgLy8gIGBpc1RhYmJhYmxlKClgIG9yIGBpc0ZvY3VzYWJsZSgpYCAtLSByZWdhcmRsZXNzIG9mIGBnZXRTaGFkb3dSb290YCBvcHRpb24gc2V0dGluZy5cblxuXG4gICAgaWYgKG5vZGVJc0F0dGFjaGVkKSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIHdoZXJldmVyIHRoZSBub2RlIGlzOiBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSBjbGllbnQgcmVjdCwgaXQnc1xuICAgICAgLy8gIHNvbWVob3cgZGlzcGxheWVkOyBpdCBhbHNvIGNvdmVycyB0aGUgQ1NTICdkaXNwbGF5OiBjb250ZW50cycgY2FzZSB3aGVyZSB0aGVcbiAgICAgIC8vICBub2RlIGl0c2VsZiBpcyBoaWRkZW4gaW4gcGxhY2Ugb2YgaXRzIGNvbnRlbnRzOyBhbmQgdGhlcmUncyBubyBuZWVkIHRvIHNlYXJjaFxuICAgICAgLy8gIHVwIHRoZSBoaWVyYXJjaHkgZWl0aGVyXG4gICAgICByZXR1cm4gIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg7XG4gICAgfSAvLyBFbHNlLCB0aGUgbm9kZSBpc24ndCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQsIHdoaWNoIG1lYW5zIHRoZSBgZ2V0Q2xpZW50UmVjdHMoKWBcbiAgICAvLyAgQVBJIHdpbGwgX19hbHdheXNfXyByZXR1cm4gemVybyByZWN0cyAodGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgUmVhY3RcbiAgICAvLyAgaXMgdXNlZCB0byByZW5kZXIgbm9kZXMgb250byBhIGRldGFjaGVkIHRyZWUsIGFzIGNvbmZpcm1lZCBpbiB0aGlzIHRocmVhZDpcbiAgICAvLyAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy85MTE3I2lzc3VlY29tbWVudC0yODQyMjg4NzApXG4gICAgLy9cbiAgICAvLyBJdCBhbHNvIG1lYW5zIHRoYXQgZXZlbiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5IHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgLy8gIGJlY2F1c2Ugc3R5bGVzIGFyZSBvbmx5IGNvbXB1dGVkIGZvciBub2RlcyB0aGF0IGFyZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgLy9cbiAgICAvLyBOT1RFOiBUSElTIEhBUyBCRUVOIFRIRSBDQVNFIEZPUiBZRUFSUy4gSXQgaXMgbm90IG5ldywgbm9yIGlzIGl0IGNhdXNlZCBieSB0YWJiYWJsZVxuICAgIC8vICBzb21laG93LiBUaG91Z2ggaXQgd2FzIG5ldmVyIHN0YXRlZCBvZmZpY2lhbGx5LCBhbnlvbmUgd2hvIGhhcyBldmVyIHVzZWQgdGFiYmFibGVcbiAgICAvLyAgQVBJcyBvbiBub2RlcyBpbiBkZXRhY2hlZCBjb250YWluZXJzIGhhcyBhY3R1YWxseSBpbXBsaWNpdGx5IHVzZWQgdGFiYmFibGUgaW4gd2hhdFxuICAgIC8vICB3YXMgbGF0ZXIgKGFzIG9mIHY1LjIuMCBvbiBBcHIgOSwgMjAyMSkgY2FsbGVkIGBkaXNwbGF5Q2hlY2s9XCJub25lXCJgIG1vZGUgLS0gZXNzZW50aWFsbHlcbiAgICAvLyAgY29uc2lkZXJpbmcgX19ldmVyeXRoaW5nX18gdG8gYmUgdmlzaWJsZSBiZWNhdXNlIG9mIHRoZSBpbm5hYmlsaXR5IHRvIGRldGVybWluZSBzdHlsZXMuXG5cbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIC8vIE5PVEU6IEV2ZW4gdGhvdWdoIHRoaXMgdGVzdHMgdGhhdCB0aGUgbm9kZSdzIGNsaWVudCByZWN0IGlzIG5vbi16ZXJvIHRvIGRldGVybWluZVxuICAgIC8vICB3aGV0aGVyIGl0J3MgZGlzcGxheWVkLCBhbmQgdGhhdCBhIGRldGFjaGVkIG5vZGUgd2lsbCBfX2Fsd2F5c19fIGhhdmUgYSB6ZXJvLWFyZWFcbiAgICAvLyAgY2xpZW50IHJlY3QsIHdlIGRvbid0IHNwZWNpYWwtY2FzZSBmb3Igd2hldGhlciB0aGUgbm9kZSBpcyBhdHRhY2hlZCBvciBub3QuIEluXG4gICAgLy8gIHRoaXMgbW9kZSwgd2UgZG8gd2FudCB0byBjb25zaWRlciBub2RlcyB0aGF0IGhhdmUgYSB6ZXJvIGFyZWEgdG8gYmUgaGlkZGVuIGF0IGFsbFxuICAgIC8vICB0aW1lcywgYW5kIHRoYXQgaW5jbHVkZXMgYXR0YWNoZWQgb3Igbm90LlxuICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICB9IC8vIHZpc2libGUsIGFzIGZhciBhcyB3ZSBjYW4gdGVsbCwgb3IgcGVyIGN1cnJlbnQgYGRpc3BsYXlDaGVja2AgbW9kZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50OyAvLyBjaGVjayBpZiBgbm9kZWAgaXMgY29udGFpbmVkIGluIGEgZGlzYWJsZWQgPGZpZWxkc2V0PlxuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYW1vbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTsgLy8gd2hlbiB0aGUgZmlyc3QgPGxlZ2VuZD4gKGluIGRvY3VtZW50IG9yZGVyKSBpcyBmb3VuZFxuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICAvLyBpZiBpdHMgcGFyZW50IDxmaWVsZHNldD4gaXMgbm90IG5lc3RlZCBpbiBhbm90aGVyIGRpc2FibGVkIDxmaWVsZHNldD4sXG4gICAgICAgICAgICAvLyByZXR1cm4gd2hldGhlciBgbm9kZWAgaXMgYSBkZXNjZW5kYW50IG9mIGl0cyBmaXJzdCA8bGVnZW5kPlxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChwYXJlbnROb2RlLCAnZmllbGRzZXRbZGlzYWJsZWRdIConKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+IGNvbnRhaW5pbmcgYG5vZGVgIGhhcyBubyA8bGVnZW5kPlxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCB8fCAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUgPSBmdW5jdGlvbiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlKHNoYWRvd0hvc3ROb2RlKSB7XG4gIHZhciB0YWJJbmRleCA9IHBhcnNlSW50KHNoYWRvd0hvc3ROb2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuXG4gIGlmIChpc05hTih0YWJJbmRleCkgfHwgdGFiSW5kZXggPj0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaGFzIGFuIGV4cGxpY2l0IG5lZ2F0aXZlIHRhYmluZGV4LFxuICAvLyBicm93c2VycyB3aWxsIG5vdCBhbGxvdyB0YWIgdGFyZ2V0aW5nIHNhaWQgZWxlbWVudCdzIGNoaWxkcmVuLlxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fSBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyBFbGVtZW50W11cbiAqL1xuXG5cbnZhciBzb3J0QnlPcmRlciA9IGZ1bmN0aW9uIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgdmFyIGlzU2NvcGUgPSAhIWl0ZW0uc2NvcGU7XG4gICAgdmFyIGVsZW1lbnQgPSBpc1Njb3BlID8gaXRlbS5zY29wZSA6IGl0ZW07XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoZWxlbWVudCwgaXNTY29wZSk7XG4gICAgdmFyIGVsZW1lbnRzID0gaXNTY29wZSA/IHNvcnRCeU9yZGVyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICBpc1Njb3BlID8gcmVndWxhclRhYmJhYmxlcy5wdXNoLmFwcGx5KHJlZ3VsYXJUYWJiYWJsZXMsIGVsZW1lbnRzKSA6IHJlZ3VsYXJUYWJiYWJsZXMucHVzaChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpc1Njb3BlOiBpc1Njb3BlLFxuICAgICAgICBjb250ZW50OiBlbGVtZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuXG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290LFxuICAgICAgc2hhZG93Um9vdEZpbHRlcjogaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHJldHVybiBzb3J0QnlPcmRlcihjYW5kaWRhdGVzKTtcbn07XG5cbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuXG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucyksXG4gICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghSFRNTEVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgXCJ3aWNnLWluZXJ0XCI7XG5pbXBvcnQgXCJibG9ja2luZy1lbGVtZW50c1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tIFwiLi91c2UtZG9jdW1lbnQtY2xhc3NcIjtcbmZ1bmN0aW9uIGJsb2NraW5nRWxlbWVudHMoKSB7IHJldHVybiBnZXREb2N1bWVudCgpLiRibG9ja2luZ0VsZW1lbnRzOyB9XG47XG4vKipcbiAqIEFsbG93cyBhbiBlbGVtZW50IHRvIHRyYXAgZm9jdXMgYnkgYXBwbHlpbmcgdGhlIFwiaW5lcnRcIiBhdHRyaWJ1dGUgdG8gYWxsIHNpYmxpbmcsIGF1bnQsIGFuZCB1bmNsZSBub2Rlcy5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cbiAqIChzcGVjaWZpY2FsbHkgdmlhIGBibG9ja2luZ0VsZW1lbnRzYCwgd2l0aCBhIHNtYWxsIHBvbHlmaWxsIGJlY2F1c2UgSSdtIG5vdCBzdXJlIGhvdyBsb25nXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxuICogQHBhcmFtIHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xuICAgIC8qKlxuICAgICAqIFB1c2gvcG9wIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nRWxlbWVudHMgc3RhY2suXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gU29tZXRpbWVzIGJsb2NraW5nRWxlbWVudHMgd2lsbCBmYWlsIGlmLCBmb3IgZXhhbXBsZSxcbiAgICAgICAgICAgIC8vIHRoZSB0YXJnZXQgZWxlbWVudCBpc24ndCBjb25uZWN0ZWQgdG8gZG9jdW1lbnQuYm9keS5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmFyZSwgYnV0IGl0J3MgYmV0dGVyIHRvIGZhaWwgc2lsZW50bHkgd2l0aCB3ZWlyZCB0YWJiaW5nIGJlaGF2aW9yXG4gICAgICAgICAgICAvLyB0aGFuIHRvIGNyYXNoIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMoKS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cygpLnJlbW92ZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBXZWxsLCBzZW1pLXNpbGVudGx5LlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3RhcmdldF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMoKS50b3A7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmxvY2tpbmctZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBpc0ZvY3VzYWJsZSB9IGZyb20gXCJ0YWJiYWJsZVwiO1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tIFwiLi91c2UtZG9jdW1lbnQtY2xhc3NcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZSB9KSB7XG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldEVsZW1lbnQgfSk7XG4gICAgLy9jb25zdCBbbGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VTdGF0ZTxOb2RlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHt9KTtcbiAgICAvLyBXaGVuIHRoZSB0cmFwIGJlY29tZXMgYWN0aXZlLCBiZWZvcmUgd2UgbGV0IHRoZSBibG9ja2luZ0VsZW1lbnRzIGhvb2sgcnVuLFxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICAgICAgICAvLyB0byB3aGF0ZXZlcidzIGN1cnJlbnRseSBhdCB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLnNldChnZXRUb3BFbGVtZW50KCksIGdldExhc3RBY3RpdmVFbGVtZW50KCkgPz8gZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xuICAgIHVzZUJsb2NraW5nRWxlbWVudCh0cmFwQWN0aXZlID8gZWxlbWVudCA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEFueSB0aW1lIHdlIGFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIHRyYXAsXG4gICAgICogY2hhbmdlIGZvY3VzIHRvIHNvbWV0aGluZyBlbHNlIChzb21ldGhpbmcgaW5cbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcbiAgICAgKiB0cmFja2VkIGluIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyBpZiBub3QpXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gLi4ucmVhc29ucz9cbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1cyB0byB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gdGhhdCBoYXMgcmV0dXJuZWQgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLmdldChnZXRUb3BFbGVtZW50KCkpPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbW9kYWxcIjogdHJhcEFjdGl2ZSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0sIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRm9jdXNUcmFwUHJvcHMsXG4gICAgICAgIGdldEVsZW1lbnRcbiAgICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCkge1xuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7IGFjY2VwdE5vZGU6IChub2RlKSA9PiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgaXNGb2N1c2FibGUobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQKSB9KTtcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xuICAgIHJldHVybiBmaXJzdEZvY3VzYWJsZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImwiLCJ1IiwidCIsIm8iLCJyIiwiZiIsImUiLCJjIiwicyIsImEiLCJoIiwidiIsInkiLCJkIiwiayIsImIiLCJtIiwiZyIsImoiLCJ6IiwidyIsIlAiLCJNIiwiQSIsIkMiLCJIIiwiVCIsIk8iLCJMIiwiUyIsIm4iLCJ1c2VSZWYiLCJVbnNldCIsInVzZUNhbGxiYWNrIiwidXNlTGF5b3V0RWZmZWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmV0dXJuTnVsbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlUCIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsImlkZW50aXR5IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ0aGlzIiwiUmFuZG9tV29yZHMiLCJtZW1vIiwiX2pzeHMiLCJfanN4IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7QUFBRyxRQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQyxHQUFDLENBQUdDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLG9FQUFvRSxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU9DLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBU0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFWCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRUQsR0FBQyxDQUFDLEtBQUssRUFBRUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW1DLFNBQVNhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFZCxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNlLEdBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRWIsR0FBQyxHQUFHSixHQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDSSxHQUFDLENBQUNKLEdBQUMsQ0FBQyxpQkFBaUIsR0FBR0csR0FBQyxFQUFFYyxHQUFDLEVBQUMsQ0FBQyxTQUFTQSxHQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDZixHQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDUyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDSixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQ0ssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRUosR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0ssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRWIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0QsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUNQLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQ1EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUVqQixHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVNpQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTMEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTa0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2xCLEdBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDMkIsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQ2xCLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1QsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUNTLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBR0ksR0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQ08sR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUNRLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ25CLEdBQUMsQ0FBQyxHQUFHLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTNEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRXRCLEdBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEdBQUdrQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDSixHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUVOLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVKLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFZSxHQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNILEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN0QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRXNCLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3RCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUVVLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLFNBQVNpQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM3QixHQUFDLENBQUMsRUFBRSxFQUFFQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNrQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDUCxHQUFDLENBQUNFLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRVAsR0FBQyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQStPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDZCxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ1csR0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxHQUFDLENBQUMsS0FBSyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUF1RCxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQ1EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDSCxHQUFDLENBQUNYLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQ2MsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNaLEdBQUMsQ0FBQyxDQUFDOztJQ0F6b1QsSUFBSUYsR0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRUgsR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0MsR0FBQyxDQUFDLEtBQUssRUFBRUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQ0F4WCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDMEIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVyxHQUFDLENBQUMsR0FBRyxFQUFFVixHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNVLEdBQUMsQ0FBQyxHQUFHLEVBQUVWLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFDLENBQUMsVUFBVSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBc0wsU0FBU0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0gsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQTROLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDUixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDWSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDWSxHQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQ2IsR0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDQSxHQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ1osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDWSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDWixHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRVksR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJYixHQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8scUJBQXFCLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUNBaHVFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ1gsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNDLEdBQUMsQ0FBQyxHQUFHLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBc1MsSUFBMk0sQ0FBQyxDQUFDQSxHQUFDLENBQUMsSUFBSUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQXFMLFNBQVNZLEdBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDWixHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUlELENBQUMsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFRCxHQUFDLENBQUNHLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0gsR0FBQyxDQUFDRyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFpcEIsQ0FBQ1csR0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJYixDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQ2EsR0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDVCxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNTLEdBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUNBLEdBQUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMk9BQTJPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQStLYixDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQ0EsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUksSUFBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE1BQU1BLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDRyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FB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LFlBQVksT0FBTyxRQUFRLENBQUM7SUFDNUIsU0FBUztJQUNULEtBQUssQ0FBQztJQUNOLENBQUM7SUFDRDtJQUNBO0FBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lDNUVBLFNBQVMsbUJBQW1CLENBQUMsS0FBSyxFQUFFO0lBQ3BDO0lBQ0EsSUFBSSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDMUM7SUFDQSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUs7SUFDbEMsUUFBUSxPQUFPLFNBQVMsQ0FBQztJQUN6QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLEVBQUU7SUFDbEM7SUFDQSxRQUFRLElBQUksR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLO0lBQ3JDLFlBQVksT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQzdCLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFLEtBQUs7SUFDckMsWUFBWSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDN0I7SUFDQTtJQUNBLFFBQVEsSUFBSSxHQUFHLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUU7SUFDdEM7SUFD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SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lDclFBLFNBQVNJLFlBQVUsR0FBRyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7SUFDdEM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ3BDLElBQUksTUFBTSxlQUFlLEdBQUcsSUFBSSxFQUFFLGVBQWUsQ0FBQztJQUNsRDtJQUNBLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsR0FBRyxlQUFlLENBQUMsZUFBZSxFQUFFQSxZQUFVLENBQUMsQ0FBQztJQUNsRjtJQUNBO0lBQ0EsSUFBSSxNQUFNLEtBQUssR0FBR0osQ0FBVyxD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QUEsR0FBQSxDQUFBLElBQUEsRUFBQSxFQUFBLFFBQUEsRUFBQSxlQUFBLEVBQUEsQ0FBc0IsSUFBSyxFQUFRLENBQUEsRUFDckZBLHlCQUFRLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJRCx1QkFBSUMsR0FBSyxDQUFBLElBQUEsRUFBQSxFQUFBLFFBQUEsRUFBQSxDQUFDLENBQUMsSUFBSSxHQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUNBLEdBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBQSxRQUFBLEVBQUssQ0FBQyxDQUFDLElBQUksR0FBTSxFQUFBQSxHQUFBLENBQUEsSUFBQSxFQUFBLEVBQUEsUUFBQSxFQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEVBQU0sQ0FBQSxDQUFBLEVBQUEsQ0FBSyxDQUFDLEVBQVMsQ0FBQSxDQUFBLEVBQUEsQ0FDMUksSUFBTSxFQUNkQSxHQUFBLENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBTSxFQUVMLHVCQUF1QixJQUFJLElBQUksSUFBSUQsR0FBQSxDQUFBLEtBQUEsRUFBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLHlCQUFBLEVBQTRCQyxzQkFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSUEsc0JBQUssSUFBSSxFQUFBLENBQU0sQ0FBQyxFQUFNLENBQUEsQ0FBQSxFQUFBLENBQU0sRUFDaEoscUJBQXFCLElBQUksSUFBSSxJQUFJRCxHQUFBLENBQUEsS0FBQSxFQUFBLEVBQUEsUUFBQSxFQUFBLENBQUEsMEJBQUEsRUFBNkJDLHNCQUFLLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUlBLEdBQUssQ0FBQSxJQUFBLEVBQUEsRUFBQSxRQUFBLEVBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQSxDQUFNLENBQUMsRUFBTSxDQUFBLENBQUEsRUFBQSxDQUFNLEVBRTVJQSxHQUFNLENBQUEsSUFBQSxFQUFBLEVB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
