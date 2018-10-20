module.exports = function () {

  return {

    files: ['linked-list/**/*.js', '!linked-list/**/*.test.js'],


    tests: ['linked-list/**/*.test.js'],

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