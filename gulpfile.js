var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('watch', function() {
  gulp.watch(['./src/templates/*.html', './src/sass/*.scss'], ['generate']);
});

gulp.task('generate', shell.task('node ./build/style-guide-generator.js'));

gulp.task('default', [ 'generate', 'watch' ]);
