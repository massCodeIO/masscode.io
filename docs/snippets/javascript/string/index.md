---
title: JavaScript String | Snippet Collection
description: Collection of JavaScript String snippets
---

# String

## Byte by Size

This snippet returns the length of a string in bytes.

```js
const byteSize = str => new Blob([str]).size
```

#### Example

```js
byteSize('💪') // 4
byteSize('JavaScript') // 10
```

## Capitalize

This snippet capitalizes the first letter of a string.

```js
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')
```

#### Example

```js
capitalize('fooBar') // 'FooBar'
```

## Capitalize Every Word

This snippet capitalizes the first letter of every word in a given string.

```js
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase())
```

#### Example

```js
capitalizeEveryWord('foo bar') // 'Foo Bar'
```

### Decapitalize

This snippet turns the first letter of a string into lowercase.

```js
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('')
```

#### Example

```js
decapitalize('FooBar') // 'fooBar'
```
