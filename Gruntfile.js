/*
 * grunt-bugfree
 * 
 *
 * Copyright (c) 2015 yangjiyuan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Configuration to be run (and then tested).
    bugfree: {
      options:{
        who:'alpaca', // 可取值:buddha(佛祖) alpaca(神兽)
        commentSymbol:'//' //注释类型
      }, 
      dist:['test/fixtures/*.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'bugfree']);

};
