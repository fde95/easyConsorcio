const gulp = require("gulp"); //Inicialização Gulp

// const sass = require("gulp-sass")(require("sass")); //Minificação e Compilação SASS

const htmlmin = require('gulp-htmlmin'); //Minificação HTML

const concat = require('gulp-concat'); //Concatenador CSS e JS

const cssMin = require('gulp-cssmin'); //Minificador CSS

const rename = require('gulp-rename'); //Renomeador CSS e JS

const uglify = require("gulp-uglify"); //Minificador JS

const imagemin = require("gulp-imagemin"); //Minificador de Imagens

/*Minificação HTML*/
function index (){
    return gulp
        .src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        })
        )
        .pipe(gulp.dest('./dist'))
}

/*Minificação CSS */
function styles (){
    return gulp
        .src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/styles/*css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cssMin())
        .pipe(rename ({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
}


/*Minificação de Imagens */
function imageMin (){
    return gulp
        .src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

/*Minificação JavaScript */
function scripts (){
    return gulp 
        .src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './src/scripts/lib/*js',
        './src/scripts/*.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(index, styles, imageMin, scripts);
exports.watch = function(){
    gulp.watch('./src/*.html', gulp.parallel(index))
    gulp.watch('./src/styles/*.css', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}