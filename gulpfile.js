const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const babelEs6 = require('babel-preset-es2015');
const babelReact = require('babel-preset-react');
const browserify = require('gulp-browserify');

gulp.task('watch-babel', () => {
	return gulp.src('src/js/**.js')
		.pipe(watch('src/js/**.js', logChanges))
		.pipe(babel({
			presets: [babelEs6, babelReact]
		}))
		.pipe(browserify({
			debug : true
		}))
		.pipe(gulp.dest('dist/js/'));
});

function logChanges(file){
	 console.log('File ' + path.relative(process.cwd(), file.history[0]) + ' was changed');
}