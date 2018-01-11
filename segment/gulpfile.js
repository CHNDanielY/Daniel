var gulp=require("gulp"),
livereload = require('gulp-livereload');

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(livereload());
});
gulp.task('livereload', function() {
    livereload.listen(); //要在这里调用listen()方法
    gulp.watch('src/*.html', ['html']);
});
gulp.task('default', function(){
    gulp.run('livereload');
});
