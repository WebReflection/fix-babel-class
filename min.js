/*! ISC License (c) 2017, Andrea Giammarchi, @WebReflection */
var fixBabelClass=function(t){var r=t.getOwnPropertyDescriptor,e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,r){return t.__proto__=r,t},o=Reflect.construct||function(t,r,e){for(var n=[null],o=r.length,u=0;u<o;u++)n[u+1]=r[u];return new(t.bind.apply(t,n))};return function(t){var u=e(t),c=u&&r(u,"prototype");return c&&!c.writable?n(t,n(function(){return n("DOCUMENT_NODE"in u?this:o(u,arguments,t),t.prototype)},u)):t}}(Object);try{module.exports=fixBabelClass}catch(t){}