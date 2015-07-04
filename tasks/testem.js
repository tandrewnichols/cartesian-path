module.exports = {
  browser: {
    src: [
      'test/browser/bind-polyfill.js',
      'dist/paths.js',
      'node_modules/mocha-given/browser/mocha-given.js',
      'test/browser/setup.js',
      'node_modules/expect.js/index.js',
      'test/browser/*.coffee'
    ],
    options: {
      framework: 'mocha',
      parallel: 2,
      reporter: 'tap',
      launch_in_ci: ['PhantomJS'],
      launch_in_dev: ['PhantomJS', 'Chrome'],
      reporter: 'dot'
    }
  }
};
