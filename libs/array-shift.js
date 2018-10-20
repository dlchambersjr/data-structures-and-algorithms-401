'use strict';

// Module f0r insertShiftArray

module.exports = (originalArray, value) => {

  if (originalArray.length < 1 || value === '') { return null; }

  let newArray = [];
  let midArray = Math.ceil(originalArray.length / 2);

  for (let i = 0; i < originalArray.length; i++) {
    if (i === midArray) {
      newArray[newArray.length] = value;
    }
    newArray[newArray.length] = originalArray[i];
  }

  return newArray;

};