---
title: JavaScript DOM
titleTemplate: Snippet Collection | massCode
description: Collection of JavaScript DOM snippets
---

# DOM

## Element Contains

This snippet checks whether the parent element contains the child.

```js
function elementContains(parent, child) {
  return parent !== child && parent.contains(child);
}
```

#### Example

```js
const head = document.querySelector("head");
const body = document.querySelector("body");

elementContains(head, body); // true
```

## Has Class

This snippet checks whether an element has a particular class.

```js
const hasClass = (el, className) => el.classList.contains(className);
```

#### Example

```js
hasClass(document.querySelector("p"), "some-class"); // true
```
