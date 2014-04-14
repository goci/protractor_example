module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    protractor: {
      options: {
        configFile: "protractor_conf.js",
        keepAlive: false, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
      },
      'myproject': {
        configFile: "protractor_conf.js",
        args: {}
      }
    },
    protractor_webdriver: {
      'myproject': {
        options: {
          path: 'node_modules/.bin/'
        }
      }
    },
    availabletasks: {
      tasks: {}
    }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-available-tasks');

  grunt.registerTask('default', ['protractor']);
};
