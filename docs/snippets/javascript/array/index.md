---
title: JavaScript Array | Snippet Collection
description: Collection of JavaScript Array snippets
---

# Array

## Compact

This snippet removes false values from an array.

```js
const compact = arr => arr.filter(Boolean)
```

#### Example

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])
// [ 1, 2, 3, 'a', 's', 34 ]
```

## Uniq

This snippet get uniq values in an array.

```js
const uniq = arr => [...new Set(arr)]
```

#### Example

```js
uniq(1, 1, 2, 3, 4, 4) // [1, 2, 3, 4]
```
