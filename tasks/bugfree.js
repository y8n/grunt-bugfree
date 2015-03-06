/*
 * grunt-bugfree
 * 
 *
 * Copyright (c) 2015 yangjiyuan
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('bugfree', 'Bug free!', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'buddha',
      commentSymbol:'//'
    });
    // 检验是否已经添加过的正则
    var testExistRegexMap = {
      'buddha':/88" . "88/,
      'alpaca':/┗┓┓┏━┳┓┏┛/
    };

    // 暂存配置项
    var who = options.who,
        commentSymbol = options.commentSymbol;

    var commentFileMap = {
      'buddha':'buddha.txt',
      'alpaca':'alpaca.txt'
    };
    var commentFilePath = path.join(__dirname,commentFileMap[who]),
        commentContent = grunt.file.read(commentFilePath);

    // 分割每一行
    var lineCommentArr = commentContent.split(grunt.util.normalizelf('\n'));

    lineCommentArr.forEach(function(value,index,arr){
      arr[index] = commentSymbol + value;
    });

    commentContent = lineCommentArr.join("\n");

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath),
            newFileContent = commentContent + "\n" + originalFileContent;

        if(testExistRegexMap[who].test(originalFileContent)){
          return;          
        }
        grunt.file.write(filepath,newFileContent);
      });


      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
