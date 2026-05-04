const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function styles() {
    return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'));
}

exports.default = function() {
    gulp.watch('src/styles/**/*scss', gulp.parallel(styles));
};