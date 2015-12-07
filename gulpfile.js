var gulp = require('gulp');
var webpack = require('gulp-webpack');

/* webpack */
gulp.task('webpack', function () {
  return webpack({
      watch: true,
      entry: {
       
      },
      output: {
        filename: '[name].entry.js',
      },
      module: {
        // 加载器配置
        loaders: [
            // vue-loader
            { test: /\.vue$/, loader: 'vue' },
        ],
      }
    })
    .pipe(gulp.dest('dist/'));
});

/* default */
gulp.task('default', ['webpack'], function () {});