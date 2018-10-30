module.exports = function () {

  return {

    files: ['libs/**/*.js'],


    tests: ['tests/**/*.js'],

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