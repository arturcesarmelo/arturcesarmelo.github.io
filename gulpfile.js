var gulp = require('gulp'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch')
;

let ndm = './node_modules/'

let deps =  {
	js: [
		`${ndm}jquery/dist/jquery.js`,
		`${ndm}bootstrap/dist/js/bootstrap.js`,
		`${ndm}angular/angular.js`,
		`${ndm}@uirouter/angularjs/release/angular-ui-router.js`,
		`${ndm}chart.js/dist/Chart.js`,
		`${ndm}angular-chart.js/dist/angular-chart.js`,
		'./src/plugins/*.js'
	],
	ang: [
		'./src/app.js',
		'./src/controllers/*.js',
		'./src/services/*.js'
	],
	css: [
		`${ndm}bootstrap/dist/css/bootstrap.css`,
		`${ndm}chartist/chartist.min.css`,
		`${ndm}font-awesome/css/font-awesome.css`,		
		`${ndm}animate.css/animate.css`,
		'./src/css/inpinia.css'
	],
	fonts: [
		`${ndm}font-awesome/fonts/fontawesome-webfont.eot`,		
		`${ndm}font-awesome/fonts/fontawesome-webfont.ttf`,		
		`${ndm}font-awesome/fonts/fontawesome-webfont.svg`,		
		`${ndm}font-awesome/fonts/fontawesome-webfont.woff`,		
		`${ndm}font-awesome/fonts/fontawesome-webfont.woff2`,		
	]
}

gulp.task('scripts', function() {
  return gulp.src(deps.js)
	.pipe(concat('dep.js'))
	.pipe(gulp.dest('./dist/js/'))
});

gulp.task('angular', function() {
  return gulp.src(deps.ang)
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./dist/js/'));
});


gulp.task('styles', function() {
	return gulp.src(deps.css)
	.pipe(concat('app.css'))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('fonts', function() {
	return gulp.src(deps.fonts)
	.pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('default', ['scripts', 'angular', 'styles', 'fonts'], function() {
	gulp.watch(['src/**/*.js', 'src/**/*.css'], function() {
		// run styles upon changes
		gulp.run('angular');
		gulp.run('styles');		
	});
});