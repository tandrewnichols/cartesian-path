module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: "./",
        src: "lib/cartesian-path.js",
        dest: "dist/",
        rename: function(dest, src) {
          return dest + 'cartesian-path.js';
        }
      }
    ]
  }
};
