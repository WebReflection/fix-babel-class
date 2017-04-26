# fix-babel-class
A runtime one-off fix for Babel [broken](https://github.com/babel/babel/issues/4480) transpiled classes.

```js
class List extends Array {}

class CustomElement extends HTMLElement {}
customElements.define('custom-element', CustomElement);

// fix whenever you need classes you want
fixBabelClass(List);
fixBabelClass(CustomElement);

console.log(
  // this is **false** without the fix
  new List instanceof List,
  // this **breaks** without the fix
  new CustomElement instanceof CustomElement,
  // this **won't ever work** without the fix
  (new CustomElement).nodeName
);
```