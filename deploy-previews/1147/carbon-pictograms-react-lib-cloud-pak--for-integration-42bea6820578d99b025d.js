"use strict";(self.webpackChunkdesign_language_website=self.webpackChunkdesign_language_website||[]).push([[70135,37965,66095,420,69602,78364],{52520:function(e,t,r){var n=r(64710),c=r(45697),o=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=i(c),a=i(o);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],g=["tabindex"],O=a.default.forwardRef((function(e,t){var r=e.className,c=e.children,o=e.tabIndex,i=d(e,p),l=n.getAttributes(f(f({},i),{},{tabindex:o})),u=l.tabindex,s=d(l,g);return r&&(s.className=r),null!=u&&(s.tabIndex=u),t&&(s.ref=t),a.default.createElement("svg",s,c)}));O.displayName="Icon",O.propTypes={"aria-hidden":l.default.string,"aria-label":l.default.string,"aria-labelledby":l.default.string,children:l.default.node,className:l.default.string,height:l.default.oneOfType([l.default.number,l.default.string]),preserveAspectRatio:l.default.string,tabIndex:l.default.string,viewBox:l.default.string,width:l.default.oneOfType([l.default.number,l.default.string]),xmlns:l.default.string},O.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=O,t._extends=b,t._objectWithoutProperties=d},30461:function(e,t,r){var n=r(52520),c=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(64710),r(45697);var i,l=o(c),a=["children"],u=l.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,a);return l.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),i||(i=l.default.createElement("path",{d:"M16,31.36c-0.059,0-0.117-0.015-0.171-0.043l-13-7C2.713,24.254,2.64,24.133,2.64,24V8\tc0-0.132,0.073-0.254,0.189-0.317l13-7c0.107-0.058,0.234-0.058,0.342,0l13,7C29.287,7.746,29.36,7.868,29.36,8v16\tc0,0.133-0.073,0.254-0.189,0.317l-13,7C16.117,31.346,16.059,31.36,16,31.36z M3.36,23.785L16,30.591l12.64-6.806V8.215L16,1.409\tL3.36,8.215V23.785z M21.172,24.36c-0.852,0-1.652-0.332-2.255-0.934l-5.171-5.172l0.509-0.51l5.172,5.172\tc0.466,0.467,1.086,0.723,1.745,0.723c1.361,0,2.468-1.106,2.468-2.468c0-0.659-0.256-1.279-0.723-1.745l-2.172-2.172l0.51-0.509\tl2.172,2.171c0.602,0.603,0.934,1.403,0.934,2.255C24.36,22.93,22.93,24.36,21.172,24.36z M10.829,24.36\tc-1.758,0-3.188-1.431-3.188-3.188c0-0.853,0.332-1.653,0.934-2.255l4.171-4.171l0.509,0.509l-4.171,4.172\tc-0.466,0.466-0.723,1.086-0.723,1.745c0,1.361,1.107,2.468,2.469,2.468c0.66,0,1.279-0.256,1.746-0.723l2.171-2.172l0.509,0.51\tl-2.171,2.172C12.481,24.028,11.681,24.36,10.829,24.36z M21,22.36c-0.75,0-1.36-0.61-1.36-1.36c0-0.244,0.065-0.475,0.179-0.673\tl-2.845-2.845c-0.28,0.185-0.614,0.292-0.974,0.292c-0.978,0-1.774-0.796-1.774-1.774c0-0.359,0.107-0.694,0.292-0.974l-2.845-2.845\tC11.474,12.295,11.245,12.36,11,12.36c-0.75,0-1.36-0.61-1.36-1.36S10.25,9.64,11,9.64s1.36,0.61,1.36,1.36\tc0,0.245-0.065,0.474-0.178,0.673l2.845,2.845c0.28-0.185,0.614-0.292,0.974-0.292c0.978,0,1.774,0.796,1.774,1.774\tc0,0.359-0.107,0.694-0.292,0.974l2.845,2.845c0.198-0.113,0.429-0.179,0.673-0.179c0.75,0,1.36,0.61,1.36,1.36\tS21.75,22.36,21,22.36z M21,20.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S21.353,20.36,21,20.36z M16,14.946c-0.581,0-1.054,0.473-1.054,1.054c0,0.581,0.473,1.054,1.054,1.054c0.581,0,1.054-0.473,1.054-1.054\tS16.581,14.946,16,14.946z M11,10.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64\tS11.353,10.36,11,10.36z M19.255,17.255l-0.51-0.509l4.172-4.171c0.466-0.467,0.723-1.086,0.723-1.746\tc0-1.361-1.106-2.469-2.468-2.469c-0.659,0-1.279,0.257-1.745,0.723l-2.172,2.171l-0.509-0.509l2.171-2.171\tc0.603-0.602,1.402-0.934,2.255-0.934c1.758,0,3.188,1.43,3.188,3.188c0,0.851-0.332,1.652-0.934,2.254L19.255,17.255z M10.746,15.254l-2.171-2.171c-0.602-0.602-0.934-1.402-0.934-2.254c0-1.758,1.43-3.188,3.188-3.188\tc0.852,0,1.652,0.332,2.254,0.934l5.172,5.171l-0.51,0.509l-5.171-5.171c-0.466-0.466-1.086-0.723-1.746-0.723\tc-1.361,0-2.469,1.107-2.469,2.469c0,0.66,0.257,1.279,0.723,1.746l2.171,2.171L10.746,15.254z"})),r)}));e.exports=u},64710:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.r(t),r.d(t,{defaultAttributes:function(){return u},formatAttributes:function(){return b},getAttributes:function(){return f},toSVG:function(){return d},toString:function(){return s}});var l=["width","height","viewBox"],a=["tabindex"],u={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,o=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=i(e,l),s=f.tabindex,b=i(f,a),d=c(c(c({},u),b),{},{width:t,height:r,viewBox:o});return d["aria-label"]||d["aria-labelledby"]||d.title?(d.role="img",null!=s&&(d.focusable="true",d.tabindex=s)):d["aria-hidden"]=!0,d}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(b(c),">").concat(i,"</").concat(r,">"):"<".concat(r," ").concat(b(f(c)),">").concat(i,"</").concat(r,">")}function b(e){return Object.keys(e).reduce((function(t,r,n){var c="".concat(r,'="').concat(e[r],'"');return 0===n?c:t+" "+c}),"")}function d(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=void 0===o?[]:o,l=document.createElementNS("http://www.w3.org/2000/svg",r),a="svg"!==r?c:f(c);Object.keys(a).forEach((function(e){l.setAttribute(e,c[e])}));for(var u=0;u<i.length;u++)l.appendChild(d(i[u]));return l}}}]);