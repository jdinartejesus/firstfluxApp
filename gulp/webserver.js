var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src( './dist' )
    .pipe(webserver({
      livereload:       true,
      directoryListing: false,
    }));
});
