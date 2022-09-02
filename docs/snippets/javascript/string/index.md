---
title: JavaScript String
titleTemplate: Snippet Collection | massCode
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

## Decapitalize

This snippet turns the first letter of a string into lowercase.

```js
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('')
```

#### Example

```js
decapitalize('FooBar') // 'fooBar'
```

## Is String

This snippet can be used to check whether an argument is a string.

```js
const isString = val => typeof val === 'string'
```

#### Example

```js
isString('5') // true
```

## Is Lower Case

This snippet can be used to determine whether a string is lower case.

```js
const isLowerCase = str => str === str.toLowerCase()
```

#### Example

```js
isLowerCase('some') // true
isLowerCase('RanDom') // false
```

## Is Upper Case

This snippet can be used to check whether a string is upper case.

```js
const isUpperCase = str => str === str.toUpperCase()
```

#### Example

```js
isUpperCase('SOME') // true
isLowerCase('RanDom') // true
```

## Reverse

This snippet can be used to reverse a string.

```js
const reverseString = str => [...str].reverse().join('')
```

#### Example

```js
reverseString('some') // 'meos'
```
