var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');
	babel = require('gulp-babel');

var jsSources = ['assets/js/scripts/*.js'],
	sassSources = ['assets/sass/app.sass'],
	cssSources = ['assets/css/stylesheets/*.css'],
	htmlSources = ['assets/views/*.html'];

gulp.task('log', function() {
	gutil.log('hello world')
});

gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

gulp.task('sass', function() {
	gulp.src(sassSources)
	.pipe(sass({outputStyle: 'extended'}))
	.on('error', gutil.log)
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename('app.min.css'))
	.pipe(gulp.dest('assets/css'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(babel({presets: ['es2015']}))
	.pipe(uglify())
	.pipe(concat('script.min.js'))
	.pipe(gulp.dest('assets/js'))
	.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(htmlSources, ['html']);
	gulp.watch(sassSources, ['sass']);
	gulp.watch('assets/sass/**/*.sass', ['sass']);
	gulp.watch(jsSources, ['js']);
});

gulp.task('connect', function() {
	connect.server({
		root: '.',
		livereload: true
	})
});

gulp.task('default', ['html', 'sass', 'js', 'connect', 'watch']);