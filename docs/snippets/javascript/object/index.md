---
title: JavaScript Object
titleTemplate: Snippet Collection | massCode
description: Collection of JavaScript Object snippets
---

# Object

## Sort Keys

This snippet can be used to sort object keys.

```js
function sortObjKey(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}
```

#### Example

```js
const unsorted = {
  b: "foo",
  c: "bar",
  a: "baz",
};

sortObjKey(unsorted); // {a: 'baz', b: 'foo', c: 'bar'}
```
