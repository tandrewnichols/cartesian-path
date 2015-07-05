[![Build Status](https://travis-ci.org/tandrewnichols/expand-path.png)](https://travis-ci.org/tandrewnichols/expand-path) [![downloads](http://img.shields.io/npm/dm/expand-path.svg)](https://npmjs.org/package/expand-path) [![npm](http://img.shields.io/npm/v/expand-path.svg)](https://npmjs.org/package/expand-path) [![Code Climate](https://codeclimate.com/github/tandrewnichols/expand-path/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/expand-path) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/expand-path/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/expand-path) [![dependencies](https://david-dm.org/tandrewnichols/expand-path.png)](https://david-dm.org/tandrewnichols/expand-path)

# expand-path

Super light-weight brace expansion for node

## Installation

`npm install --save expand-path`

## Summary

Pass in a path with brackets, braces, or angled brackets and get an array of matching paths back.

## Usage

You can use `expand-path` to get a list of object paths (e.g. for use with lodash `_.get`) or with file paths. `expand-path` doesn't care about the separator (or even check what it is). It just expands a "path" with brackets into multiple paths (essentially a cartesian product of the possible paths).

### With object paths

```js
var expand = require('expand-path');
var list = expand('foo.bar.[baz,quux].[hello,goodbye].world');

/*
 * "list" equals:
 *  [
 *    'foo.bar.baz.hello.world',
 *    'foo.bar.quux.hello.world',
 *    'foo.bar.baz.goodbye.world',
 *    'foo.bar.quux.goodbye.world'
 *  ]
 */
```

### With file paths

```js
var expand = require('expand-path');
var list = expand('foo/bar/[baz,quux]/hello/world[.js,spec-coffee]');

/*
 * "list" equals:
 *  [
 *    'foo/bar/baz/hello/world.js',
 *    'foo/bar/quux/hello/world.js',
 *    'foo/bar/baz/hello/world-spec.coffee',
 *    'foo/bar/quux/hello/world-spec.coffee'
 *  ]
 */
```

Note that `expand-path` does not do any disk I/O. It does not read in these file paths or check that they exist. All it does is expand brackets into a list of paths. There are plenty of other modules that can make use of a list of paths (`async`, in combination with `fs` is enough).

## Contributing

I'll be happy to merge any pull request that adds value and has passing tests. Be sure to add a test both for node and for the browser. Tests are run with `grunt`.
