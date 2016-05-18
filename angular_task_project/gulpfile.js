'use strict';

var gulp, jade, stylus, concat, uglifyJs, cssMin, rename;

gulp = require('gulp');
jade = require('gulp-jade');
stylus = require('gulp-stylus');
concat = require('gulp-concat');
uglifyJs = require('gulp-uglify');
cssMin = require('gulp-cssmin');
rename = require('gulp-rename');

var DEST = 'build';
var JADE_SRC = 'src/**/*.jade';
var STYL_SRC = 'src/**/*.styl';
var JS_SRC = 'src/**/*.js';

gulp.task('jade', function () {
	gulp
		.src(JADE_SRC)
		.pipe(jade())
		.pipe(gulp.dest(DEST))
});

gulp.task('stylus', function () {
	gulp
		.src(STYL_SRC)
		.pipe(cssMin())
		.pipe(rename({suffix: '.min'}))
		.pipe(stylus())
		.pipe(gulp.dest(DEST));
});

gulp.task('js', function () {
	gulp
		.src([
			'src/**/*.module.js',
			'src/**/*.routes.js',
			'src/**/*.controller.js',
			'src/**/*.filter.js'
		])
		.pipe(concat('app.min.js'))
		.pipe(uglifyJs())
		.pipe(gulp.dest(DEST))
});

gulp.task('watch', function () {
	gulp.watch(JADE_SRC, ['jade']);
	gulp.watch(STYL_SRC, ['stylus']);
	gulp.watch(JS_SRC, ['js']);
});
gulp.task('build', ['jade', 'stylus', 'js']);
gulp.task('start', ['build', 'watch']);