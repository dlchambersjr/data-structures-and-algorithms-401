'use strict';

const binarySearch = require('../finished-challenges/array-binary-search');

describe('Test the binarySearch function', () => {

  const firstArray = [4, 8, 15, 16, 23, 42];
  const secondArray = [11, 22, 33, 44, 55, 66, 77];

  //test for lower extreme
  it('should return the index at the start of the array', () => {

    let firstMiddle = 4;
    let secondMiddle = 11;

    const firstActual = binarySearch(firstArray, firstMiddle);
    const firstExpect = 0;

    const secondActual = binarySearch(secondArray, secondMiddle);
    const secondExpect = 0;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  //test for middle number
  it('should return the index at the middle of the array', () => {

    let firstMiddle = 15;
    let secondMiddle = 44;

    const firstActual = binarySearch(firstArray, firstMiddle);
    const firstExpect = 2;

    const secondActual = binarySearch(secondArray, secondMiddle);
    const secondExpect = 3;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  //test for upper extreme
  it('should return the index at the end of the array', () => {

    let firstMiddle = 42;
    let secondMiddle = 77;

    const firstActual = binarySearch(firstArray, firstMiddle);
    const firstExpect = 5;

    const secondActual = binarySearch(secondArray, secondMiddle);
    const secondExpect = 6;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  //test for a number not in the array
  it('should return undefined because the number is not in the array', () => {

    let firstMiddle = 56;
    let secondMiddle = 90;

    const firstActual = binarySearch(firstArray, firstMiddle);
    const firstExpect = undefined;

    const secondActual = binarySearch(secondArray, secondMiddle);
    const secondExpect = undefined;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

});

describe('Test for some stretch goals', () => {

  // generate three arrays 100 - 10000 - 100000 - 1000000;

  let hundred = [];
  let tenThousand = [];
  let hundredThousand = [];
  let million = [];

  for (let i = 1; i <= 100; i++) { hundred.push(i); }
  console.log(hundred.length);

  for (let i = 1; i <= 10000; i++) { tenThousand.push(i); }
  console.log(tenThousand.length);

  for (let i = 1; i <= 100000; i++) { hundredThousand.push(i); }
  console.log(hundredThousand.length);

  for (let i = 1; i <= 1000000; i++) { million.push(i); }
  console.log(million.length);

  it('should return the index of the postion between 1-100 that matches the value', () => {

    let firstMiddle = 37;
    let secondMiddle = 82;

    const firstActual = binarySearch(hundred, firstMiddle);
    const firstExpect = 36;

    const secondActual = binarySearch(hundred, secondMiddle);
    const secondExpect = 81;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  it('should return the index of the postion between 1-10000 that matches the value', () => {

    let firstMiddle = 3799;
    let secondMiddle = 7999;

    const firstActual = binarySearch(tenThousand, firstMiddle);
    const firstExpect = 3798;

    const secondActual = binarySearch(tenThousand, secondMiddle);
    const secondExpect = 7998;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  it('should return the index of the postion between 1-100000 that matches the value', () => {

    let firstMiddle = 14582;
    let secondMiddle = 65082;

    const firstActual = binarySearch(hundredThousand, firstMiddle);
    const firstExpect = 14581;

    const secondActual = binarySearch(hundredThousand, secondMiddle);
    const secondExpect = 65081;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

  it('should return the index of the postion between 1-1000000 that matches the value', () => {

    let firstMiddle = 1;
    let secondMiddle = 1000000;

    const firstActual = binarySearch(million, firstMiddle);
    const firstExpect = 0;

    const secondActual = binarySearch(million, secondMiddle);
    const secondExpect = 999999;

    expect(firstActual).toBe(firstExpect);
    expect(secondActual).toBe(secondExpect);

  });

});