
  /* ---------------------------------------
    CONFIG
   --------------------------------------- */
var dist    = './';
    gutil   = require('gulp-util'),
    notify  = require('gulp-notify');

module.exports = {
  dest: {
    css: dist+'dist/css',
  },

  path: {
    less      : [ dist+'less/**/*'],
    lessEntry : dist+'less/vanilla.less',
    sassEntry : dist+'sass/vanilla.scss',
  },

  onError: function(err) {
      gutil.beep();
      console.error(gutil.colors.red(err.message) );
      // notify.error("Error: <%= err.message %>");
  }
};