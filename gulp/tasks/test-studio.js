   // Run test on task
var gulp = require('gulp');

gulp.task('testMsg', function() {
		gulp.src(sourced.app)
  			.pipe(notify('Test complete »'));
});

gulp.task('test-app', function(callback) {
		runSequence( 
	      'styles', 'scaffold',
	      callback);
});


gulp.task('test', function(callback) {
		runSequence( 'test-app', 'testMsg',
	      callback);
});