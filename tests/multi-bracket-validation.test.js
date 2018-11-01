'use strict';

const multiBracketValidation = require('../libs/multiBracketValidation/multi-bracket-validation.js');

describe('Test to check for balanced brackets', () => {

  const odd = `{}([)`;
  const balanced = `{([])}`;
  const unbalanced = `({)}`;
  const char = `([code{f}ellows])`;

  it('should return false if there are an odd number of brackets', () => {

    const actual = multiBracketValidation(odd);

    expect(actual).toBeFalsy();

  });

  it('should filter out everything except brackets when checking', () => {

    const actual = multiBracketValidation(char);

    expect(actual).toBeTruthy();

  });

  it('should return true for balanced brackets', () => {

    const actual = multiBracketValidation(balanced);

    expect(actual).toBeTruthy();

  });

  it('should return false for unbalanced brackets', () => {

    const actual = multiBracketValidation(unbalanced);

    expect(actual).toBeFalsy();
  });


});