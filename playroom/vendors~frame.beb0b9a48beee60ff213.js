(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1101:function(e,t,n){(t=e.exports=n(43)(!1)).push([e.i,".CatchErrors__root--2Kwvq {\n  font-family: Helvetica, arial, sans-serif;\n  font-size: 18px;\n  color: red;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  padding: 0 20px;\n}\n.CatchErrors__strong--Q4tvR {\n  font-weight: bold;\n}\n",""]),t.locals={root:"CatchErrors__root--2Kwvq",strong:"CatchErrors__strong--Q4tvR"}},1102:function(e,t,n){var r=n(1108);e.exports=r.default||r},1103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(4),i=(r=n(3))&&r.__esModule?r:{default:r};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,l(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.Component),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&c(n.prototype,r),i&&c(n,i),t}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:i.default.func});var s=p;t.default=s,e.exports=t.default},1104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],u=[];return e.forEach(function(e){var o=e.type,i=e.props;"title"===o?t=e:"link"===o&&"canonical"===i.rel?n=e:"meta"===o?r.push(e):u.push(e)}),[t].concat((c=function(e){var t={};i.forEach(function(e){t[e]=[]});for(var n=[],r=function(r){var u=e[r],c=u.props.id;(c?!t.id[c]:0===o.filter(function(e){var n=u.props[e],r=t[e][n];return r&&!r.props.id}).length)&&(n.unshift(u),i.forEach(function(e){var n=u.props[e];n&&(t[e][n]=u)}))},u=e.length-1;u>=0;u--)r(u);return n}(r),function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(c)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),[n],u);var c},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce(function(n,r){var o,i=e.getAttribute(r);return i?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(i,'"]')),(o=Array.prototype.slice.call(o||[])).filter(function(e){return!e.id}))):n},[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),i=o.concat(["id"])},1105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(4)),o=u(n(3)),i=u(n(392));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s,y,d,b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.default.createElement(i.default,null,r.default.createElement("title",null,this.props.title))}}])&&a(n.prototype,o),u&&a(n,u),t}();s=b,y="propTypes",d={title:o.default.string},y in s?Object.defineProperty(s,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[y]=d;var h=b;t.default=h,e.exports=t.default},1107:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),i=n(32),u=n(81),c=n.n(u),a=n(3),l=n.n(a),f=n(330),p=n.n(f);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return d(r,(n=r=d(this,(e=b(t)).call.apply(e,[this].concat(i))),r.state={error:null,invalidCode:null,info:null},n))}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidCatch",value:function(e,t){var n=this.props.code;this.setState({invalidCode:n,error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.invalidCode,n=e.error,i=e.info,u=this.props,c=u.code,a=u.children;if(c!==t)return a;var l=i.componentStack.split("\n").filter(function(e){return/RenderCode/.test(e)}).map(function(e){return e.replace(/ \(created by .*/g,"")}),f=l.slice(0,l.length-1);return o.a.createElement("div",{className:p.a.root},o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:p.a.strong},n.message),f.map(function(e,t){return o.a.createElement("div",{key:t},e)}))))}}])&&y(n.prototype,i),u&&y(n,u),t}();m.propTypes={code:l.a.string.isRequired,children:l.a.node.isRequired};var v=n(410),O=n.n(v);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=j(this,P(t).call(this,e))).state=n.props.initialState,n}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.code,n=e.scope;return O()(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_(e,t,n[t])})}return e}({},n,{React:o.a,this:this}))}}])&&w(n.prototype,i),u&&w(n,u),t}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}E.displayName="RenderCode",E.propTypes={code:l.a.string.isRequired,scope:l.a.object,initialState:l.a.object},E.defaultProps={scope:{},initialState:{}};var A=n(355),D=n(356),R=n(1102),N=function(){try{var e=window.location.hash.replace(/^#/,"");return c.a.parse(e)}catch(e){return{}}},q=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=T(this,k(t).call(this,e));var r=N(),o=r.themeName,i=r.code,u=void 0===i?"":i;return n.state={themeName:o,themes:A,components:D,FrameComponent:R,code:u},n}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",function(){var t=N(),n=t.themeName,r=t.code;n&&r&&e.setState({themeName:n,code:r})})}},{key:"render",value:function(){var e=this.state,t=e.FrameComponent,n=e.themes,r=e.themeName,i=e.components,u=e.code,c="__PLAYROOM__NO_THEME__"===r?null:r,a=c?n[c]:null;return o.a.createElement(m,{code:u},o.a.createElement(t,{themeName:c,theme:a},o.a.createElement(E,{code:u,scope:i})))}}])&&x(n.prototype,i),u&&x(n,u),t}(),L=document.createElement("div");document.body.appendChild(L),Object(i.render)(o.a.createElement(q,null),L)},330:function(e,t,n){var r=n(1101);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insertAt:"top",hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(4)),o=c(n(3)),i=c(n(28)),u=n(1104);function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,d,b,h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);i.default.render(n,this.temporaryElement,function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,i=o.innerHTML;(r=(r=r.filter(function(e){return-1===i.indexOf(e.outerHTML)})).map(function(e){return e.cloneNode(!0)})).forEach(function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,u.getDuplicateTitle)();n&&(0,u.removeChild)(o,n)}else if("meta"===t){var r=(0,u.getDuplicateMeta)(e);r&&(0,u.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var i=(0,u.getDuplicateCanonical)(e);i&&(0,u.removeChild)(o,i)}}),(0,u.appendChild)(document.head,r)}}})}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&l(n.prototype,o),c&&l(n,c),t}();y=h,d="contextTypes",b={extract:o.default.func},d in y?Object.defineProperty(y,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):y[d]=b;var m=h;t.default=m,e.exports=t.default},410:function(e,t){(function(){var t={}.hasOwnProperty,n=[].slice;e.exports=function(e,r){var o,i,u,c;for(o in i=[],c=[],r)t.call(r,o)&&(u=r[o],"this"!==o&&(i.push(o),c.push(u)));return Function.apply(null,n.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(r.this,c)}}).call(this)},411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var r=u(n(1103)),o=u(n(392)),i=u(n(1105));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c}}]);