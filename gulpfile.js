var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  paths = {
    vendorSourcesMin: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/dropzone/downloads/dropzone.min.js',
      'node_modules/dropzone/downloads/css/dropzone.css',
      'node_modules/p5/lib/addons/p5.dom.js',
      'node_modules/p5/lib/p5.min.js',
      'bower_components/materialize/bin/materialize.js',
      'bower_components/materialize/bin/materialize.css'
    ],
    vendors: 'static/vendor'
  };

gulp.task('vendors', function() {
  gulp.src(paths.vendorSourcesMin)
    .pipe(gulp.dest(paths.vendors));
});

gulp.task('nodemon', function() {
  nodemon({script: 'app.js', ext: 'js html css'})
    .on('restart', function() {
      console.log('---restarted');
    });
});

gulp.task('default', ['nodemon']);
