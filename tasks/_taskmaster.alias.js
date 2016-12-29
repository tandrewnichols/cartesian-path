module.exports = {
  mocha: ['mochaTest:test'],
  test: ['eslint:lib', 'mocha', 'testem:ci:browser'],
  default: ['build', 'test'],
  coverage: ['istanbul:unit', 'open:coverage'],
  ci: ['test', 'travisMatrix'],
  build: ['clean:dist', 'concat:dist', 'uglify:dist'],
  browser: ['build', 'testem:run:browser']
};
