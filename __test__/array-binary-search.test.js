'use strict';

const binarySearch = require('../array-binary-search');

describe('Test the binarySearch function', () => {

  const firstArray = [4,8,15,16,23,42];
  const secondArray = [11,22,33,44,55,66,77];

  

  //test for lower extreme
  it('should return the index at the start of the array', () => {

    let firstMiddle = 4;
    let secondMiddle = 11;
    
    const firstActual = binarySearch(firstArray,firstMiddle);
    const firstExpect = 0;
    
    const secondActual = binarySearch(secondArray,secondMiddle);
    const secondExpect = 0;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  //test for middle number
  it('should return the index at the middle of the array', () => {
    
    let firstMiddle = 15;
    let secondMiddle = 44;
  
    const firstActual = binarySearch(firstArray,firstMiddle);
    const firstExpect = 2;
  
    const secondActual = binarySearch(secondArray,secondMiddle);
    const secondExpect = 3;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  //test for upper extreme
  it('should return the index at the end of the array', () => {

    let firstMiddle = 42;
    let secondMiddle = 77;
    
    const firstActual = binarySearch(firstArray,firstMiddle);
    const firstExpect = 5;
    
    const secondActual = binarySearch(secondArray,secondMiddle);
    const secondExpect = 6;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  //test for a number not in the array
  it('should return undefined because the number is not in the array', () => {

    let firstMiddle = 56;
    let secondMiddle = 90;
    
    const firstActual = binarySearch(firstArray,firstMiddle);
    const firstExpect = undefined;
    
    const secondActual = binarySearch(secondArray,secondMiddle);
    const secondExpect = undefined;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });


});