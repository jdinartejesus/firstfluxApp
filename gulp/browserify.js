var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});
