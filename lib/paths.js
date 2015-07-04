var Consumed = require('consumed');
var braces = {
  '[': ']',
  '{': '}',
  '<': '>'
};

exports.expand = function(path) {
  var self = exports;
  var consumer = new Consumed(path);
  var brace = self._stringContainsAny(path, ['{', '[', '<']);
  if (!brace) {
    return [path];
  } else {
    var paths = [''];
    while (consumer.str.indexOf(brace) > -1) {
      var staticStr = consumer.consumeTill(brace);
      if (staticStr) {
        paths = paths.map(self._extendStr.bind(self, staticStr));
      }
      var braceStr = consumer.consumeTill(braces[brace], true);
      var branches = braceStr.replace(brace, '').replace(braces[brace], '').split(/\s*,\s*/g);
      paths = branches.reduce(self._reducePaths.bind(self, paths), []);
    }
    return paths;
  }
};

exports._stringContainsAny = function(path, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (path.indexOf(arr[i]) > -1) {
      return arr[i];
    }
  }
};

exports._extendStr = function(addition, original) {
  return original += addition;
};

exports._reducePaths = function(paths, memo, br) {
  return memo.concat(paths.map(exports._extendStr.bind(exports, br)));
};
