'use strict';

var gulp         = require('gulp'),
	autoprefix	 = require('gulp-autoprefixer'),
	filter	     = require('gulp-filter'),
	jshint	     = require('gulp-jshint'),
	size	     = require('gulp-size'),
	plumber	     = require('gulp-plumber'),
	concat	     = require('gulp-concat'),
	uglify	     = require('gulp-uglify'),
	minifyhtml	 = require('gulp-minify-html'),
	minifycss	 = require('gulp-minify-css'),
	less	     = require('gulp-less'),
	notify	     = require('gulp-notify'),
	gutil    	 = require('gulp-util'),
	server 		 = require('gulp-server-livereload');



gulp.task('dev', function(){ env = 'development';})
gulp.task('prod', function(){ env = '';})
gulp.task('development', ['dev', 'less', 'scripts', 'watch']);
gulp.task('build', ['prod','less', 'html', 'font', 'scripts']);


var path = {
    less:   ['./app/less/**/*.less'],
    js:   	['./app/js/**/*.js'],
    html:   ['./app/html/*.html'],
    images: ['./app/img/**/*'],
    fonts:  ['./app/fonts/**/*']
},
env = '',
onError = function(err) {
    gutil.beep();
    console.error(err.message);
}


gulp.task('less',function(){
	if (env === 'development') {
		gulp.src('./app/less/main.less')
		.pipe(plumber({
		    errorHandler: onError
		}))
		.pipe(less({
	        sourceMap: true
	    }))
	    .pipe(gulp.dest('./app/css'));
	}else{
		gulp.src('./app/less/main.less')
		.pipe(plumber({
		    errorHandler: onError
		}))
		.pipe(less({
	        sourceMap: true
	    }))
	    .pipe(minifycss('main.css'))
	    .pipe(gulp.dest('./dist/styles'));
	}
	
});

gulp.task('html', function() {
	var process = gulp.src(path.html)
    .pipe(minifyhtml({
        comments: false,
        spare: true,
        empty: true,
        quotes: true
    }))
    .pipe(gulp.dest('./dist/html'));
});


gulp.task('font', function () {

    gulp.src(path.fonts)
        .pipe(filter('**/*.{eot,svg,ttf,woff, woff2}'))
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('scripts', function(e) {
	if (env == 'development') {
    	gulp.src([
			'./app/js/plugins.js', 
			'./app/js/main.js'
		])
	    .pipe(plumber({
	        errorHandler: onError
	    }))
	    .pipe(concat('all.js'))
	    .pipe(gulp.dest('./app/js/'));
    }else{
		gulp.src(['./app/js/main.js'])
		    .pipe(plumber({
		        errorHandler: onError
		    }))
		    .pipe(uglify({
		        mangle: false,
		        compress: {
		            dead_code: true
		        }
		    }))
		    .pipe(concat('all.min.js'))
		    .pipe(gulp.dest('./dist/js'));
	}

});


gulp.task('watch',['serve'], function() {
    if (env == 'development') {
        gulp.watch(path.less, ['less']);
        gulp.watch(path.js, ['scripts']);
        gulp.watch(path.images, ['images']);
        gulp.watch(path.assets, ['fonts']);
        gulp.watch(path.html, ['html']);

    }
});


 
gulp.task('serve', function() {
  gulp.src('app/')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


