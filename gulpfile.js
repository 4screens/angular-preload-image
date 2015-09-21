'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pkg = require('./package.json');
var path = require('path');
var sh = require('shelljs');

plugins.minimist = require('minimist')(process.argv.slice(2));

var PATH = {
  bower_components: 'bower_components',
  build: '.'
};

var MAIN = 'angular-preload-image.js';

gulp.task('minify', ['lint'], function() {
  return gulp.src(path.join('.', PATH.build, MAIN))
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.uglify({
      preserveComments: 'all'
    }))
    .pipe(plugins.rename({extname: '.min.js'}))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(PATH.build));
});

gulp.task('publish', ['minify'], function() {
  gulp.watch(MAIN, ['publish::copy']);
});

gulp.task('publish::copy', ['lint'], function() {
  return gulp.src(MAIN)
    .pipe(gulp.dest(plugins.minimist.path));
});

gulp.task('lint', function() {
  return gulp.src('./' + MAIN)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  return gulp.src('./' + MAIN)
    .pipe(plugins.jscs());
});

gulp.task('develop', ['minify'], function() {
  gulp.watch(MAIN, ['lint']);
});
