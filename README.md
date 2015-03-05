# grunt-bugfree

> Bug free!

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bugfree --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bugfree');
```

## The "bugfree" task

### Overview
In your project's Gruntfile, add a section named `bugfree` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bugfree: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `buddha`

指明使用buddha（佛祖）还是alpaca（神兽）保佑我们的代码

#### options.punctuation
Type: `String`
Default value: `//`

文件中拼接佛祖或神兽时使用的注释

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  bugfree: {
    options: {
      'who':'buddha',
      'commentSymbol':'//'
    },
    files: ['examples/*.js']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-3-5&nbsp;&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp;init
## License
Copyright (c) 2015 yangjiyuan. Licensed under the MIT license.
