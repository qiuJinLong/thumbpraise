const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", ["praise"], _=> {
	gulp.watch(["src/**/*.es", "!src/public/*/*.es"], ["praise"]);
});

gulp.task("praise", ()=> {
	return gulp.src(["src/**/*.es", "!src/public/*/*.es"])
		.pipe(babel({
			presets:["es2015","stage-3"]
		}))
		.pipe(gulp.dest("./build"));
})