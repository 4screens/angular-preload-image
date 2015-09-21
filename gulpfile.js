'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pkg = require('./package.json');
var path = require('path');
var sh = require('shelljs');

plugins.minimist = require('minimist')(process.argv.slice(2));

var PATH = {
  bower_components: 'bower_components',
  build: '.',
  dist: './',
};

var BRANCH = {
  master: 'master',
  develop: 'develop'
};

var MAIN = 'angular-preload-image.js';

gulp.task('minify', ['lint'], function() {
  return gulp.src(path.join(PATH.build, MAIN))
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

gulp.task('release::dist::commit', ['minify'], function() {
  plugins.git.checkout(BRANCH.develop);

  return gulp.src(PATH.dist)
    .pipe(plugins.git.add())
    .pipe(plugins.git.commit('feat(release): New release.'));
});

gulp.task('release::dist::merge', ['release::dist::commit'], function() {
  return plugins.git.checkout(BRANCH.master, function() {
    plugins.git.merge(BRANCH.develop);
  });
});

gulp.task('release::dist::push', ['release::dist::merge'], function(done) {
  return plugins.git.push('origin', BRANCH.develop, {cwd: PATH.dist}, function(err) {
    if (err) {
      plugins.git.checkout(BRANCH.master);

      plugins.git.reset('HEAD~1', { args: '--hard' });

      plugins.git.checkout(BRANCH.develop);

      plugins.git.reset('HEAD~1', { args: '--hard' });

      throw err;
    }

    plugins.git.push('origin', BRANCH.master, {cwd: PATH.dist}, done);
  });
});

gulp.task('release::dist::tag', ['release::dist::push'], function(done) {
  return plugins.git.tag('v' + pkg.version, 'v' + pkg.version, {cwd: PATH.dist}, function(err) {
    if (err) {
      throw err;
    }

    plugins.git.push('origin', 'refs/tags/v' + pkg.version, {cwd: PATH.dist}, done);
  });
});

gulp.task('release', ['release::dist::tag'], function() {

});