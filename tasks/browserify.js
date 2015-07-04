module.exports = {
  paths: {
    src: ['lib/**'],
    dest: 'dist/paths.js',
    options: {
      browserifyOptions: {
        standalone: 'paths'
      }
    }
  }
};
