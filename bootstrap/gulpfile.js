var gulp = require('gulp');
var concat=require("gulp-concat");
gulp.task('concat',function(){
	gulp.src('*.html')
	.pipe(concat('all.html'))
	.pipe(gulp.dest('dist/'));
})
gulp.task('default',function(){
    console.log('hello world');
});