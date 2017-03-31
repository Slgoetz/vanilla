var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    gutil       = require('gulp-util'),
    notify      = require('gulp-notify'),
    sass        = require('gulp-sass'),
    minifyCss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    config      = require('../config');


gulp.task('sass', function (cb) {
  gulp.src(config.path.sassEntry)
    .pipe(plumber({
        errorHandler: config.onError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(notify('Sass Compiled'));
});
