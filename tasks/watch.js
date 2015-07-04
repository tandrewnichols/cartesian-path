module.exports = {
  tests: {
    files: ['index.js', 'test/**/*.coffee'],
    tasks: ['mocha'],
    options: {
      atBegin: true
    }
  }
};
