var fs = require('fs');
	onlyScripts = require('./util/scriptFilter');
	tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

	sourced = {
		app: './',
		html: './index.html',
		css: ''
	};
	dist = {
		css: 'dist/',
		dir: 'dist/'
	};

tasks.forEach(function(task) {
	require('./tasks/' + task);
});
