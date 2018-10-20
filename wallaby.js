module.exports = function () {

  return {

    files: ['libs/**/*.js', '!linked-list/**/*.test.js'],


    tests: ['tests/**/*.test.js'],

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