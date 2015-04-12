var path = require('path');
	changed = require('gulp-changed');
	notify = require('gulp-notify');
	plumber = require('gulp-plumber');
	runSequence = require('run-sequence');
	browserSync = require('browser-sync');
	
// Filters out non .coffee and .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {
    return /(\.(js|coffee)$)/i.test(path.extname(name));
};