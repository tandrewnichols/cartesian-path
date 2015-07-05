module.exports = {
  browser: {
    src: [
      'test/helpers/bind-polyfill.js',
      'dist/expand-path.js',
      'node_modules/mocha-given/browser/mocha-given.js',
      'test/helpers/setup.js',
      'node_modules/expect.js/index.js',
      'test/*.coffee'
    ],
    options: {
      framework: 'mocha',
      parallel: 2,
      reporter: 'tap',
      launch_in_ci: ['PhantomJS'],
      launch_in_dev: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'],
      reporter: 'dot'
    }
  }
};
