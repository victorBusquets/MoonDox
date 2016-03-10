// include gulp
var gulp = require('gulp');

// include plug-ins
var livereload = require('gulp-livereload');
var flatten = require('gulp-flatten');
var less = require('gulp-less');
var $ = require('gulp-load-plugins')();
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// LESS
gulp.task('less', function(){
  gulp.src('./app/css/styles.less')
    .pipe(concat('styles-min.css'))
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('./app/css/'));
});

// default gulp task
gulp.task('default', ['less'], function() {

  browserSync.init({
    port: 3000,
	server: {
           baseDir: "./app"
    },
    open: false
  });

 
  // watch for CSS changes
  gulp.watch('./app/**/*.less', ['less', browserSync.reload], function(){
    //livereload.listen();
  });

});