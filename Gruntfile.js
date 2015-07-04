var tm = require('task-master');

module.exports = function(grunt) {
  tm(grunt, {
    jit: {
      travis: 'grunt-travis-matrix',
      matrix: 'grunt-travis-matrix',
      mochacov: 'grunt-mocha-cov'
    }
  });
  grunt.registerTask('mocha', ['mochaTest:test']);
  grunt.registerTask('default', ['jshint:all', 'mocha', 'testem:ci:browser']);
  grunt.registerTask('coverage', ['mochacov:html', 'open:coverage']);
  grunt.registerTask('ci', ['default', 'travis']);
  grunt.registerTask('build', ['clean:dist', 'uglify:dist', 'copy:dist']);
  grunt.registerTask('browser', ['testem:run:browser']);
};
