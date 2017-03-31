var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    gutil       = require('gulp-util'),
    notify      = require('gulp-notify'),
    less        = require('gulp-less'),
    minifyCss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    config      = require('../config');

gulp.task('less',  function(cb) {
    gulp.src(config.path.lessEntry)
        .pipe(plumber({
            errorHandler: config.onError
        }))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest.css))
        .pipe(notify('Less Compiled') );
});



gulp.task('min',  ['less'], function(cb) {
    gulp.src(config.path.lessEntry)
        .pipe(plumber({
            errorHandler: config.onError
        }))
        .pipe(less())
        .pipe(minifyCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest(config.dest.css))
        .pipe(notify('CSS Build Completed'));
        cb;
});

