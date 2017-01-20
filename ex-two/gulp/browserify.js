var gulp = require("gulp"),
	browserify = require("browserify"),
	babelify = require("babelify"),
	source = require("vinyl-source-stream"),
	sourcemaps = require("gulp-sourcemaps"),
	buffer = require("vinyl-buffer");

gulp.task("browserify", function(){
	var bundler = creareBundler();
	return bundler
		.bundle()
		.pipe(source('scripts.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./')
			.pipe(gulp.dest('./dist/')));
});

function creareBundler(){
	var bundler = browserify({
		entries: ['./js/app.js'],
		transform: [babelify],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: false
	});
	return bundler;
}