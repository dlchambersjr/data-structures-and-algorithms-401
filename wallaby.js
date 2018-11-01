module.exports = function () {

  return {

    files: ['libs/multibracketValidation/**/*.js'],


    tests: ['tests/**/*test.js'],

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