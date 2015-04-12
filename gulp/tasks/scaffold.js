// Compile scaffold file-includes & transform to 'app/index.html'
var gulp = require('gulp');

gulp.task('scaffold', function() {

	return gulp.src(sourced.html)
		.pipe(plumber({errorHandler: notify.onError()}))
		.pipe(gulp.dest(sourced.app))
		.pipe(browserSync.reload({stream:true, once: true}));
});