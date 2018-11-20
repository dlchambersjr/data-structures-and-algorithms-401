module.exports = function () {

  return {

    files: ['**/*.js'],


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