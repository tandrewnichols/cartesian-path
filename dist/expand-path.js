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

(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  var Consumed = isNode ? require('consumed') : window.Consumed;
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

  var expandPath = function(path) {
    var consumer = new Consumed(path);
    var brace = _stringContainsAny(path, [ '{', '[', '<' ]);
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

      if (consumer.str) {
        paths = paths.map(_extendStr.bind(null, consumer.str));
      }

      return paths;
    }
  };

  /* istanbul ignore else */
  if (isNode) {
    module.exports = expandPath;
  } else {
    window.expandPath = expandPath;
  }
})();
