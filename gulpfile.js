var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	watch= require('gulp-watch'),
	browserSync = require('browser-sync'),
  reload = browserSync.reload;




gulp.task('sass', function() {
    gulp.src('./comp/scss/*.scss')
        .pipe(sass())
        .pipe(concat('build.css'))
        .pipe(gulp.dest('./dist/css/'));
   
});
 gulp.task("watch", function(){    
    gulp.watch("./comp/scss/*.scss", ['styles']);
});

gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });
   gulp.watch(["*.html", "./dist/css/*.css", "./comp/js/*.js"]).on('change', reload);
});

gulp.task('concat', function() {
    gulp.src('./comp/js/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['*.html', '*.scss']).on('change', browserSync.reload);
    });