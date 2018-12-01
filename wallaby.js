module.exports = function () {

  return {

    files: [
      'graph/**/*.js',
      { pattern: './**/*test.js', ignore: true },
    ],


    tests: ['__tests__/**/*test.js'],

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