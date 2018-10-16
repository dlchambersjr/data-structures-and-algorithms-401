'use strict';

const insertShiftArray = require('../array-shift');

describe('Testing insertShiftArray Results', () => {

  it('should not receive empty array', () => {
    const actual = insertShiftArray([], 9);
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('should not receive empty number', () => {
    const actual = insertShiftArray([1, 2, 3], '');
    const expected = null;
    expect(actual).toBe(expected);
  });


  it('should return a new array that has a length 1 greater than the original array', () => {
    const actual = insertShiftArray([1, 2, 3, 4, 5], 9);
    const expected = 6;
    expect(actual.length).toBe(expected);
  });

  it('shouuld return the middle value of the new array as equal to the inserted number', () => {
    const actual = insertShiftArray([1, 2, 3, 4, 5], 9);
    const expected = 9;
    expect(actual[3]).toBe(expected);
  });

});