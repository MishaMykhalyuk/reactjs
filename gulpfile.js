const gulp = require('gulp');
const path = require('path');
const del = require('del');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const babelEs6 = require('babel-preset-es2015');
const babelReact = require('babel-preset-react');
const browserify = require('gulp-browserify');

gulp.task('bundle', ['clean-bundle'], () => {
	return gulp.src('src/js/**.js')
		.pipe(watch('src/js/**.js', logChanges))
		.pipe(babel({
			presets: [babelEs6, babelReact]
		}))
		.pipe(browserify({
			debug : true
		}))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('clean-bundle', () => del('dist/js/*.*', {force: true}))

function logChanges(file){
	 console.log('File ' + path.relative(process.cwd(), file.history[0]) + ' was changed');
}