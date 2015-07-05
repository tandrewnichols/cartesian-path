(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.expand = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Consumed = require('consumed');
var braces = {
  '[': ']',
  '{': '}',
  '<': '>'
};

var _stringContainsAny = function(path, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (path.indexOf(arr[i]) > -1) {
      return arr[i];
    }
  }
};

var _extendStr = function(addition, original) {
  return original += addition;
};

var _reducePaths = function(paths, memo, br) {
  return memo.concat(paths.map(_extendStr.bind(null, br)));
};

module.exports = function(path) {
  var consumer = new Consumed(path);
  var brace = _stringContainsAny(path, ['{', '[', '<']);
  if (!brace) {
    return [path];
  } else {
    var paths = [''];
    while (consumer.str.indexOf(brace) > -1) {
      var staticStr = consumer.consumeTill(brace);
      if (staticStr) {
        paths = paths.map(_extendStr.bind(null, staticStr));
      }
      var braceStr = consumer.consumeTill(braces[brace], true);
      var branches = braceStr.replace(brace, '').replace(braces[brace], '').split(/\s*,\s*/g);
      paths = branches.reduce(_reducePaths.bind(null, paths), []);
    }
    return paths;
  }
};

},{"consumed":2}],2:[function(require,module,exports){
(function() {
  var Consumed = function(str) {
    this.str = str;
  };

  Consumed.prototype._updateString = function(replacement) {
    this.str = this.str.replace(replacement, '');
  };

  Consumed.prototype.consumeTill = function(c, inclusive) {
    var str = this.str.substring(0, this.str.indexOf(c) + (inclusive ? 1 : 0));
    this._updateString(str);
    return str;
  };

  Consumed.prototype.consume = function(pattern) {
    var match = this.str.match(pattern);
    if (match) {
      this._updateString(pattern);
      return match[0];
    }
  };

  if (typeof module === 'object' && module.exports) {
    module.exports = Consumed;
  }

  if (typeof window !== 'undefined') {
    window.Consumed = Consumed;
  }
})();

},{}]},{},[1])(1)
});