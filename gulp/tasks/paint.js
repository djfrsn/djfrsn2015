var gulp = require('gulp');

gulp.task('bs-reload', function () {
    browserSync.reload();
});


gulp.task('paint', [ 'setWatch', 'browser-sync'], function () {
    gulp.watch([ sourced.html ],
    	['scaffold']);
    gulp.watch([ sourced.brush ],
    	['brush']);
});