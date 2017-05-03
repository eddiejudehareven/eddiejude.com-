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
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
modernizr = require('gulp-modernizr');

gulp.task('default', function(){
	console.log('hurray');
});

gulp.task('html', function(){
	console.log('html');
});

gulp.task('styles', function(){
	return gulp.src('./app/styles/style.css')
	.pipe(postcss([cssImport, mixins, cssnested, cssvars, autoprefixer]))
	.on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
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

gulp.task('scripts', ['modernizr'], function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('modernizr', function() {
  return gulp.src(['./app/styles/**/*.css', './app/Scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});


gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('deleteDistFolder', function() {
  return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/images/**',
    '!./app/styles/**',
    '!./app/Scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./dist/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'usemin']);






