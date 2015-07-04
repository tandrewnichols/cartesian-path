[![Build Status](https://travis-ci.org/tandrewnichols/consumed.png)](https://travis-ci.org/tandrewnichols/consumed) [![downloads](http://img.shields.io/npm/dm/consumed.svg)](https://npmjs.org/package/consumed) [![npm](http://img.shields.io/npm/v/consumed.svg)](https://npmjs.org/package/consumed) [![Code Climate](https://codeclimate.com/github/tandrewnichols/consumed/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/consumed) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/consumed/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/consumed) [![dependencies](https://david-dm.org/tandrewnichols/consumed.png)](https://david-dm.org/tandrewnichols/consumed)

# consumed

Easy string consumption for parsing and lexing.

## Installation

`npm install --save consumed`

## Summary

Create a new instance of the Consumed object and pass in a string. Then you can use a single letter or a regex pattern to grab part of the string and remove it from the original.

## Usage

```js
var Consumed = require('consumed');
var consumer = new Consumed('foo bar baz');

// Get up to the first instance of a letter
var match = consumer.consumeTill('b');
console.log(match); // 'foo '
console.log(consumer.str); // 'bar baz'

// Get up to the first instance of a letter, but include that letter
match = consumer.consumeTill('b', /*inclusive=*/true);
console.log(match); // 'bar b'
console.log(consumer.str); // 'az'

// Or match a pattern
consumer = new Consumed('foo bar baz');
match = consumer.consume(/.*(.)\1/);
console.log(match); // 'foo'
console.log(consumer.str); // ' bar baz'
```

## Contributing

I'll be happy to merge any pull request that adds value and has passing tests. Be sure to add a test both for node and for the browser. Tests are run with `grunt`.
