module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: "./",
        src: "lib/paths.js",
        dest: "dist/",
        rename: function(dest, src) {
          return dest + 'paths.js';
        }
      }
    ]
  }
};
