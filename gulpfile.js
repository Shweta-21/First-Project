var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('styles/scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('styles/css'))
});


gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
});  