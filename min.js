/*! ISC License (c) 2017, Andrea Giammarchi, @WebReflection */
var fixBabelClass=function(t){var r=t.getOwnPropertyDescriptor,n=t.getPrototypeOf||function(t){return t.__proto__},e=t.setPrototypeOf||function(t,r){return t.__proto__=r,t},o=Reflect.construct||function(t,r,n){for(var e=[null],o=r.length,u=0;u<o;u++)e[u+1]=r[u];return new(t.bind.apply(t,e))},u=function(t){do{var e=t&&r(t,"prototype");if(e&&!e.writable)return!0}while(e&&(t=n(t)));return!1};return function(t){var r=n(t);return u(r)?e(t,e(function(){return e("DOCUMENT_NODE"in r?this:o(r,arguments,t),t.prototype)},r)):t}}(Object);try{module.exports=fixBabelClass}catch(t){}