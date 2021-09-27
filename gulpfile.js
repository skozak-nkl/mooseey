const gulp = require("gulp");
const { src, dest } = gulp;
const sass = require("gulp-sass")(require("sass"));
const clean = require("gulp-clean");
const autoprefixer = require("gulp-autoprefixer");
const watch = require("gulp-watch");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const { series } = require("gulp");
const { parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const cleanCSS = require("gulp-clean-css");


function style() {
  return src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(concat("styles.min.css"))
    .pipe(dest("dist/css"));
}

function js() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js/"));
}

function cleanDist() {
  return src("dist", { allowEmpty: true, read: false }).pipe(clean());
}

function images() {
  const filesToMove = [
    'src/assets/img/**/*.+(png|jpg|gif|svg)',
    'src/assets/video/*.jpg'
  ];
  return src(filesToMove, { base: './museumsrc/assets/' })
    .pipe(imagemin())
    .pipe(dest("dist/assets"));
}

function move() {
  const filesToMove = [
    'src/assets/favicon.ico',
    'src/assets/video/*.mp4'
  ];
  return src(filesToMove, { base: '.src/assets/' })
    .pipe(dest("dist/assets"));
}

exports.build = series(cleanDist, style, js, images, move);
exports.style = style;
exports.js = js;

