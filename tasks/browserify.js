module.exports = {
  dist: {
    src: ['lib/**'],
    dest: 'dist/expand-path.js',
    options: {
      browserifyOptions: {
        standalone: 'expandPath'
      }
    }
  }
};
