const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("watch-sass", async () => {
  gulp.watch("sass/*.scss", async () => {
    gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("assets/css"));
  });
});
