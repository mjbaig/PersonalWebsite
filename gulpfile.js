var gulp = require('gulp');
var typescript = require('gulp-typescript');
var child = require('child_process');
var fs = require('fs');

gulp.task('default',['typescript_compile','start_server']);

gulp.task('typescript_compile',function(){
    return gulp.src('frontend-resources/**/*.ts')
        .pipe(typescript({
            noImplicit:true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('frontend-resources/javascript'))
});

gulp.task('start_server',function(){
    var server = child.spawn('node',['./bin/www']);
    var log = fs.createWriteStream('server.log',{flags:'a'});
    server.stdout.pipe(log);
    server.stderr.pipe(log);
});

