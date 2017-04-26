# fix-babel-class
A runtime one-off fix for Babel transpiled classes.

```js
class List extends Array {}

class CustomElement extends HTMLElement {}
customElements.define('custom-element', CustomElement);

// fix whenever you need classes you want
fixBabelClass(List);
fixBabelClass(CustomElement);

console.log(
  new List instanceof List,
  new CustomElement instanceof CustomElement,
  (new CustomElement).nodeName
);
```