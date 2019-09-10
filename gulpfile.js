var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
});

gulp.watch('app/scss/style.scss', ['sassss']); 