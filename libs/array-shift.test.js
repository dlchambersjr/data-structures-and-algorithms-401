'use strict';

//require the array-shift module that contains the insertShiftArray function
const insertShiftArray = require('../array-shift');

describe('Testing insertShiftArray Results', () => {

  it('should not receive empty array', () => {
    const actual = insertShiftArray([], 9);
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('should not receive empty number/value', () => {
    const actual = insertShiftArray([1, 2, 3], '');
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('should return a new array that has a length 1 greater than the original array', () => {
    const actual = insertShiftArray([1, 2, 3, 4, 5], 9);
    const expected = 6;
    expect(actual.length).toBe(expected);
  });

  it('should return the middle value of the new array as equal to the inserted value', () => {
    const actual = insertShiftArray([1, 2, 3, 4, 5], 9);
    const expected = 9;
    expect(actual[3]).toBe(expected);
  });

});