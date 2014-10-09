/* jshint node:true */

module.exports = function (grunt) {

  grunt.initConfig({
    jade: {
      talks: {
        options: {
          data: grunt.file.readJSON('data/talks.json'),
          pretty: true
        },
        files: {
          'talks/index.html': 'templates/talks.jade'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade:talks']);

}