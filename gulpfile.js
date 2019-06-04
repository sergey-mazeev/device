var gulp = require('gulp');
var {series, parallel, dest, watch, src} = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

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

function watchFiles() {
    watch('pug/**/*.pug', pugTemplate);
}

exports.default = series(pugTemplate, parallel(server, watchFiles));