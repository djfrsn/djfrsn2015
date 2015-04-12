var gulp = require('gulp');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {

	var config = {
		server: {
            baseDir: sourced.app
        },
		injectChanges: true
	};
    browserSync(config);
});
