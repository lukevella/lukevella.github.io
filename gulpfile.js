var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function(){
    gulp.src('scss/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .on('error', notify.onError(function (error) {
        return error.message;
    }))
    .pipe(notify("CSS compiled!"))
    .pipe(gulp.dest('css'))
});


gulp.task('watch', ['sass'], function () {
    gulp.watch('scss/**/*.scss', ['sass'])
    // gulp.watch('public/templates/**/*.html', ['templates'])
    // gulp.watch('public/js/**/*.js', ['js'])
});
