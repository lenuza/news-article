!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){e.fetchData=function(t){return fetch("/api/text/".concat(encodeURIComponent(t))).then((function(t){return t.text()})).catch((function(t){console.log(t)}))}},function(t,e,n){var r=n(0).fetchData,o=document.getElementById("results"),u=function(t){return r(t).then((function(t){return"<span>category: </span>"+JSON.parse(t).categories[0].label})).catch(console.log)};e.displayData=function(t){u(t).then((function(t){return t="<p> ".concat(t," </p>"),o.innerHTML=t})).catch(console.log)},e.buildData=u},function(t,e,n){var r=n(0).fetchData;e.newUrlValue=function(){event.preventDefault();var t=document.getElementById("newArticle").value;console.log(t),Client.displayData(t),document.getElementById("newArticle").value=""},e.fetchData=r},function(t,e,n){"use strict";n.r(e);var r=n(2);n.d(e,"newUrlValue",(function(){return r.newUrlValue}));var o=n(0);n.d(e,"fetchData",(function(){return o.fetchData}));var u=n(1);n.d(e,"buildData",(function(){return u.buildData})),n.d(e,"displayData",(function(){return u.displayData}));n(4)},function(t,e,n){}]);