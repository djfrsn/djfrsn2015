// Set default task to 'watch'
var gulp = require('gulp');

gulp.task('default', function(callback) {
		runSequence( 'paint',
	      callback);
});