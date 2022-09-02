---
title: JavaScript Number
titleTemplate: Snippet Collection | massCode
description: Collection of JavaScript Number snippets
---

# Number

## Is Number

This snippet can be used to check whether a provided value is a number.

```js
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n)
```

#### Example

```js
isNumber('1') // false
isNumber(1) // true
```

## Is Square

This snippet can be used to check if a number is a square.

```js
const isSquare = n => n >= 0 && Math.sqrt(n) % 1 === 0
```

#### Example

```js
isSquare(36) // true
```

## Round

This snippet can be used to round a number to a specified number of digits.

```js
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
```

#### Example

```js
round(24.99, 1) // 25
```
