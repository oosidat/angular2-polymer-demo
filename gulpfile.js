const gulp = require('gulp')
const del = require('del');
const typescript = require('gulp-typescript');
const vulcanize = require('gulp-vulcanize');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('clean', () => del('dist'));

gulp.task('compile', () => {
  const tsResult = tsProject
    .src()
    .pipe(typescript(tsProject));
  tsResult.js.pipe(gulp.dest('dist/'));
});

gulp.task('copy:libs', () =>
  gulp
    .src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'bower_components/**/*'
    ])
    .pipe(gulp.dest('dist/lib'))
);

gulp.task('copy:assets', () =>
  gulp.src(['app/**/*', 'index.html','styles/**/*', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
);

gulp.task('vulcanize', () =>
  gulp.src('custom-elements.html')
    .pipe(vulcanize({
      abspath: ''
    }))
    .pipe(gulp.dest('dist'))
);


gulp.task('build', ['compile', 'copy:libs', 'copy:assets', 'vulcanize']);

gulp.task('watch', ['build'], function() {
  gulp.watch('app/**/*.ts', ['compile']);
  gulp.watch(['app/**/*', 'index.html','styles/**/*', '!app/**/*.ts'], ['copy:assets']);
  gulp.watch('custom-elements.html', ['vulcanize']);
});

gulp.task('default', ['build']);
