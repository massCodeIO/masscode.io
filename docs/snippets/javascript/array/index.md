---
title: JavaScript Array
titleTemplate: Snippet Collection | massCode
description: Collection of JavaScript Array snippets
---

# Array

## Compact

This snippet removes false values from an array.

```js
const compact = (arr) => arr.filter(Boolean);
```

#### Example

```js
compact([0, 1, false, 2, "", 3, "a", "e" * 23, Number.NaN, "s", 34]);
// [ 1, 2, 3, 'a', 's', 34 ]
```

## Intersection

This snippet can be used to get an array with elements that are included in two other arrays.

```js
function intersection(a, b) {
  const s = new Set(b);
  return a.filter((i) => s.has(i));
}
```

#### Example

```js
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```

## Intersection by

This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.

```js
function intersectionBy(a, b, fn) {
  const s = new Set(b.map(fn));
  return a.filter((x) => s.has(fn(x)));
}
```

#### Example

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```

## Intersection with

This snippet can be used to return a list of elements that exist in both arrays by using a comparator function.

```js
function intersectionWith(a, b, comp) {
  return a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
}
```

#### Example

```js
const arr1 = [1, 1.2, 1.5, 3, 0];
const arr2 = [1.9, 3, 0, 3.9];
const fn = (a, b) => Math.round(a) === Math.round(b);

intersectionWith(arr1, arr2, (a, b) => fn(a, b)); // [1.5, 3, 0]
```

## Is null

This snippet can be used to check whether a value is `null`.

```js
const isNull = (val) => val === null;
```

#### Example

```js
isNull(null); // true
```

## Last

This snippet returns the last element of an array.

```js
const last = (arr) => arr[arr.length - 1];
```

#### Example

```js
last([1, 2, 3, 4]); // 4
```

## Random

This snippet can be used to get a random number from an array.

```js
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
```

#### Example

```js
random([3, 1, 4, 11]); // 4
```

## With Length

This snippet get an array with specified length.

```js
const withLength = (n) => new Array(n).fill("");
```

#### Example

```js
withLength(5); // ['', '', '', '', '']
```

## Uniq

This snippet get uniq values in an array.

```js
const uniq = (arr) => [...new Set(arr)];
```

#### Example

```js
uniq(1, 1, 2, 3, 4, 4); // [1, 2, 3, 4]
```
