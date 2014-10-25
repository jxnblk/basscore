
var gulp = require('gulp');
var basswork = require('gulp-basswork');
var mincss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('./src/basscore.css')
    .pipe(basswork())
    .pipe(rename('basscore.css'))
    .pipe(gulp.dest('./css'))
    .pipe(mincss())
    .pipe(rename('basscore.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['./src/**/*'], ['default']);
});

