"use strict";(self.webpackChunkdesign_language_website=self.webpackChunkdesign_language_website||[]).push([[8621,37965,66095,420,69602,78364],{52520:function(e,t,r){var n=r(64710),c=r(45697),o=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(c),u=i(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],g=["tabindex"],O=u.default.forwardRef((function(e,t){var r=e.className,c=e.children,o=e.tabIndex,i=d(e,p),a=n.getAttributes(f(f({},i),{},{tabindex:o})),l=a.tabindex,s=d(a,g);return r&&(s.className=r),null!=l&&(s.tabIndex=l),t&&(s.ref=t),u.default.createElement("svg",s,c)}));O.displayName="Icon",O.propTypes={"aria-hidden":a.default.string,"aria-label":a.default.string,"aria-labelledby":a.default.string,children:a.default.node,className:a.default.string,height:a.default.oneOfType([a.default.number,a.default.string]),preserveAspectRatio:a.default.string,tabIndex:a.default.string,viewBox:a.default.string,width:a.default.oneOfType([a.default.number,a.default.string]),xmlns:a.default.string},O.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=O,t._extends=b,t._objectWithoutProperties=d},92216:function(e,t,r){var n=r(52520),c=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(64710),r(45697);var i,a=o(c),u=["children"],l=a.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,u);return a.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),i||(i=a.default.createElement("path",{d:"M14.274,25h0.781l-3.711-8.859H10.68L6.945,25h0.781l0.796-1.888h4.961L14.274,25z M8.826,22.392\tl2.185-5.183l2.171,5.183H8.826z M29.64,19h0.721v6c0,1.302-1.059,2.36-2.36,2.36h-4.132l2.387,2.385l-0.51,0.51l-3.254-3.253\tl3.254-3.257l0.51,0.51l-2.384,2.385H28c0.904,0,1.64-0.735,1.64-1.64V19z M23,12.86c3.879,0,5.322-3.695,5.337-3.732\tc0.031-0.082,0.031-0.173,0-0.255C28.322,8.835,26.879,5.14,23,5.14s-5.322,3.695-5.337,3.732c-0.031,0.082-0.031,0.173,0,0.255\tC17.678,9.165,19.121,12.86,23,12.86z M23,5.86c3.03,0,4.338,2.528,4.609,3.14C27.338,9.612,26.03,12.14,23,12.14\tS18.662,9.612,18.391,9C18.662,8.388,19.97,5.86,23,5.86z M31,0.64H15c-0.199,0-0.36,0.161-0.36,0.36v10.3\tc-1.133-0.426-2.36-0.66-3.64-0.66C5.288,10.64,0.64,15.288,0.64,21c0,5.713,4.647,10.36,10.36,10.36S21.36,26.713,21.36,21\tc0-1.28-0.233-2.507-0.66-3.64H31c0.199,0,0.36-0.161,0.36-0.36V1C31.36,0.801,31.199,0.64,31,0.64z M11,30.64\tc-5.315,0-9.64-4.324-9.64-9.64s4.325-9.64,9.64-9.64s9.64,4.325,9.64,9.64S16.315,30.64,11,30.64z M30.64,16.64H20.397\tc-1.031-2.215-2.823-4.006-5.038-5.038V1.36h15.28L30.64,16.64L30.64,16.64z M23,11.36c1.302,0,2.36-1.059,2.36-2.36\tS24.302,6.64,23,6.64S20.64,7.699,20.64,9S21.698,11.36,23,11.36z M23,7.36c0.904,0,1.64,0.736,1.64,1.64s-0.735,1.64-1.64,1.64\tS21.36,9.904,21.36,9S22.096,7.36,23,7.36z"})),r)}));e.exports=l},64710:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return b},getAttributes:function(){return f},toSVG:function(){return d},toString:function(){return s}});var a=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,o=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=i(e,a),s=f.tabindex,b=i(f,u),d=c(c(c({},l),b),{},{width:t,height:r,viewBox:o});return d["aria-label"]||d["aria-labelledby"]||d.title?(d.role="img",null!=s&&(d.focusable="true",d.tabindex=s)):d["aria-hidden"]=!0,d}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(b(c),">").concat(i,"</").concat(r,">"):"<".concat(r," ").concat(b(f(c)),">").concat(i,"</").concat(r,">")}function b(e){return Object.keys(e).reduce((function(t,r,n){var c="".concat(r,'="').concat(e[r],'"');return 0===n?c:t+" "+c}),"")}function d(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=void 0===o?[]:o,a=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?c:f(c);Object.keys(u).forEach((function(e){a.setAttribute(e,c[e])}));for(var l=0;l<i.length;l++)a.appendChild(d(i[l]));return a}}}]);