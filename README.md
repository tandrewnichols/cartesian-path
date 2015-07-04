[![Build Status](https://travis-ci.org/tandrewnichols/paths.png)](https://travis-ci.org/tandrewnichols/paths) [![downloads](http://img.shields.io/npm/dm/paths.svg)](https://npmjs.org/package/paths) [![npm](http://img.shields.io/npm/v/paths.svg)](https://npmjs.org/package/paths) [![Code Climate](https://codeclimate.com/github/tandrewnichols/paths/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/paths) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/paths/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/paths) [![dependencies](https://david-dm.org/tandrewnichols/paths.png)](https://david-dm.org/tandrewnichols/paths)

# paths

Generate an array of paths from a single path with braces, ala brace expansion

## Installation

`npm install --save paths`

## Summary

Pass in a path with brackets, braces, or angled brackets and get an array of matching paths back.

## Usage

You can use `paths` to get a list of object paths (e.g. for use with lodash `_.get`) or with file paths. `paths` doesn't care about the separator (or even check what it is). It just expands a "path" with brackets into multiple paths (essentially a cartesian product of the possible paths).

### With object paths

```js
var paths = require('paths'); // Not to be confused with "path"
var list = paths.expand('foo.bar.[baz,quux].[hello,goodbye].world');

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
var paths = require('paths'); // Not to be confused with "path"
var list = paths.expand('foo/bar/[baz,quux]/hello/world[.js,spec-coffee]');

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

Note that `paths` does not do any disk I/O. It does not read in these file paths or check that they exist. All it does is expand brackets into a list of paths. There are plenty of other modules that can make use of a list of paths (`async`, in combination with `fs` is enough).

## Contributing

I'll be happy to merge any pull request that adds value and has passing tests. Be sure to add a test both for node and for the browser. Tests are run with `grunt`.
