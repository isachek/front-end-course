/* jshint node:true */

module.exports = function (grunt) {

  function getData(datasetName) {
    return grunt.file.readJSON('data/' + datasetName + '.json');
  }

  grunt.initConfig({
    jade: {
      index: {
        options: {
          data: {
            talks: getData('talks'),
            tasks: getData('tasks')
          },
          pretty: true
        },
        files: {
          'index.html': 'templates/index.jade',
          'tasks.html': 'templates/tasks.jade'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade']);

};
