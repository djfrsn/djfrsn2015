
 // Process Styles w/ the exclusion of critical css
var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'), // https://github.com/ai/autoprefixer
    comb = require('gulp-csscomb'); // https://github.com/ai/autoprefixer

gulp.task('styles', function () {

    return gulp.src(sourced.css)
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(comb())
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(gulp.dest(sourced.app))
        .pipe(browserSync.reload({stream:true, once: true}));
});


