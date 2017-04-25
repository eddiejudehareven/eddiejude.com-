var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
mixins = require('postcss-mixins'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(),
webpack = require('webpack'),
imagemin = require('gulp-imagemin');

gulp.task('default', function(){
	console.log('hurray');
});

gulp.task('html', function(){
	console.log('html');
});

gulp.task('styles', function(){
	return gulp.src('./app/styles/style.css')
	.pipe(postcss([cssImport, mixins, cssnested, cssvars, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() { 

  browserSync.init({
  	notify: false,
    server: {
      baseDir: "app"
    }
  });

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/styles/**/*.css', function() {
		gulp.start('cssInject');
});

	watch('./app/Scripts/**/*.js', function() {
		gulp.start('scripts');
	})

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/style.css')
	.pipe(browserSync.stream());

});

gulp.task('scripts', function(callback) {
	webpack(require('./webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
			console.log(stats.toString());
			callback();
	});

/* gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
	}); */

});




