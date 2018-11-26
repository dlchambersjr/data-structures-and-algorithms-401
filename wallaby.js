<<<<<<< HEAD
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

=======
module.exports = function (wallaby) {

  // add any needed environment variables here
  process.env.PORT = 3000;
  process.env.APP_SECRET = 'SecretCodeForTests';

  return {

    files: ['new-challenges/**/*.js'],

    tests: ['tests/**/*.test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    setup: function () {
      // require('dotenv').config();
      require('babel-core');
    },

  };

>>>>>>> 762e742a0a202e9fcd8480bc6bf9ee27b1d1883e
};