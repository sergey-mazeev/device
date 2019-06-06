var gulp = require('gulp');
var {series, parallel, dest, watch, src} = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

function server(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        watch: true,
    });
    cb();
}

function pugTemplate(cb) {
    src('pug/*.pug')
        .pipe(pug())
        .pipe(dest('./'));
    cb();
}

function scss(cb) {
    src('./scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    cb();
}

function watchFiles() {
    watch('pug/**/*.pug', pugTemplate);
    watch('scss/**/*.scss', scss);
}

exports.default = series(parallel(pugTemplate, scss), parallel(server, watchFiles));