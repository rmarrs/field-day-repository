module.exports = function(grunt){

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // grunt.registerTask('default', ['jshint', 'uglify', 'copyto', 'smushit', 'phplint']);
  grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer']);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: ['webroot/js/custom.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['webroot/scss/*'],
        tasks: ['sass', 'autoprefixer']
      }
      // img: {
      //  files: ['app/webroot/img/*.png', 'app/webroot/img/*.jpg'],
      //  tasks: ['smushit']
      // },
      // php: {
      //  files: ['**/*.php'],
      //  tasks: ['phplint'],
      //  options: {
      //    nospawn: true,
      //  },
      // }
    },

    //JavaScript
    // jshint: {
    //  all: ['html/js/jquery.dev.js']
    // },

    uglify: {
      options: {
        mangle: false,
        compress: false
      },
      build: {
        files: [
          {'/vagrant/cakephp/webroot/js/main.js': [
            '/vagrant/cakephp/vendor/components/modernizr/modernizr.js', 
            '/vagrant/cakephp/vendor/components/jquery/jquery.js', 
            '/vagrant/cakephp/vendor/zurb/foundation/dist/js/foundation.js', 
            '/vagrant/cakephp/vendor/zurb/foundation/dist/js/plugins/foundation.core.min.js',
            '/vagrant/cakephp/vendor/zurb/foundation/dist/js/plugins/foundation.util.*.min.js',
            '/vagrant/cakephp/vendor/zurb/foundation/dist/js/plugins/foundation!(.util.|.zf.|.core)*.min.js',
            '/vagrant/cakephp/webroot/js/custom.js'
          ]}
        ]
      }
    },
    autoprefixer: {
      options: {
        browsers: [
          "> 1%",
          "last 2 versions",
          "ie >= 9",
          "opera >= 10",
          "Android >= 2.3"
        ]
      },
      files: { 
        src: ["webroot/css/custom.css"]
      }
    },
    //CSS
    sass: {
      options: {
        loadPath: ['vendor/zurb/foundation/scss', 'node_modules/foundation-icons'],
          style : 'expanded'

      },
      dev: { 
        files: [{
        expand: true,
        cwd: 'webroot/scss',
        src: ['*.scss'],
        dest: 'webroot/css/',
        ext: '.css'
      }]
          /*files : {'/vagrant/cakephp/webroot/css/main.css' : [
//            '/vagrant/cakephp/vendor/components/normalize.css/normalize.css', 
            'vendor/zurb/foundation/scss/foundation.scss'
//            '/vagrant/cakephp/webroot/css/cake.css',
//            '/vagrant/cakephp/webroot/css/home.css',
//            '/vagrant/cakephp/webroot/sass/*.sass'
        ]
        }*/
      }
  }
});


  // Event handling
  // grunt.event.on('watch', function(action, filepath) {
  //  //only lint the changed file
  //  grunt.config(['phplint', 'all'], filepath);
  // });

};