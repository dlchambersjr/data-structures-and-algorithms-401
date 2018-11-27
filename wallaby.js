module.exports = function () {

  return {

    files: [
      'new-challenges/**/*.js',
      { pattern: './**/*test.js', ignore: true },
    ],


    tests: ['./**/*test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

  };

};